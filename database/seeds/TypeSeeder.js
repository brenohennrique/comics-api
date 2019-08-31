'use strict'

const Type = use('App/Models/Type')

const statesArray = [
  { name: 'Revista' }
]

class TypeSeeder {
  async run () {
    await Type.createMany(statesArray)
  }
}

module.exports = TypeSeeder
