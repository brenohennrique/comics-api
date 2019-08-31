'use strict'

const Segment = use('App/Models/Segment')
const Redis = use('Redis')

class SegmentController {
  async index ({ transform }) {
    const cachedSegments = await Redis.get('segments')

    if (cachedSegments) return JSON.parse(cachedSegments)

    const segments = await Segment.all()
    const segmentsTransform = await transform.collection(segments, 'SegmentTransformer')

    await Redis.set('segments', JSON.stringify(segmentsTransform))
    Redis.expire('segments', 20)

    return segmentsTransform
  }

  async store ({ request }) {
    const data = request.only(['name'])

    const segment = await Segment.create(data)

    return segment
  }

  async show ({ params, transform }) {
    const segment = await Segment.find(params.id)

    return transform.item(segment, 'SegmentTransformer')
  }

  async update ({ params, request }) {
    const data = request.only(['name'])
    const segment = await Segment.find(params.id)

    segment.merge(data)

    await segment.save()

    return segment
  }

  async destroy ({ params }) {
    const segment = await Segment.find(params.id)

    await segment.delete()
  }
}

module.exports = SegmentController
