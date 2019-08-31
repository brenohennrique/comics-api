'use strict'

const Publishing = use('App/Models/Publishing')
const Redis = use('Redis')

class PublishingController {
  async index ({ transform }) {
    const cachedPublishings = await Redis.get('publishings')

      if (cachedPublishings) return JSON.parse(cachedPublishings)

    const publishings = await Publishing.all()
    const publishingsTransform = await transform.collection(publishings, 'PublishingTransformer')

    await Redis.set('publishings', JSON.stringify(publishingsTransform))
    Redis.expire('publishings', 20)

    return publishingsTransform
  }

  async store ({ request }) {
    const data = request.only(['name'])

    const publishings = await Publishing.create(data)

    return publishings
  }

  async show ({ params, transform }) {
    const publishings = await Publishing.find(params.id)

    return transform.item(publishings, 'PublishingTransformer')
  }

  async update ({ params, request }) {
    const data = request.only(['name'])
    const publishings = await Publishing.find(params.id)

    publishings.merge(data)

    await publishings.save()

    return publishings
  }

  async destroy ({ params }) {
    const publishings = await Publishing.find(params.id)

    await publishings.delete()
  }
}

module.exports = PublishingController
