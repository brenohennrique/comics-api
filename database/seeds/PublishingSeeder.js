'use strict'

const Type = use('App/Models/Type')

const statesArray = [
  { name: 'Panini' }
]

class PublishingSeeder {
  async run () {
    await Type.createMany(statesArray)
  }
}

module.exports = PublishingSeeder
