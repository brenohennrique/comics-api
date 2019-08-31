'use strict'

const Segment = use('App/Models/Segment')

const statesArray = [
  { name: 'Comics' }
]

class SegmentSeeder {
  async run () {
    await Segment.createMany(statesArray)
  }
}

module.exports = SegmentSeeder
