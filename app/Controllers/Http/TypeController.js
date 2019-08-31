'use strict'

const Type = use('App/Models/Type')
const Redis = use('Redis')

class TypeController {
  async index ({ transform }) {
    const cachedTypes = await Redis.get('types')

    if (cachedTypes) return JSON.parse(cachedTypes)

    const types = await Type.all()
    const typesTransform = await transform.collection(types, 'TypeTransformer')

    await Redis.set('types', JSON.stringify(typesTransform))
    Redis.expire('types', 20)

    return typesTransform
  }

  async store ({ request }) {
    const data = request.only(['name'])

    const type = await Type.create(data)

    return type
  }

  async show ({ params, transform }) {
    const type = await Type.find(params.id)

    return transform.item(type, 'TypeTransformer')
  }

  async update ({ params, request }) {
    const data = request.only(['name'])
    const type = await Type.find(params.id)

    type.merge(data)

    await type.save()

    return type
  }

  async destroy ({ params }) {
    const type = await Type.find(params.id)

    await type.delete()
  }
}

module.exports = TypeController
