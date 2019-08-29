'use strict'

const Brand = use('App/Models/Brand')

const statesArray = [
  { name: 'Marvel' },
  { name: 'DC Comics' }
]

class BrandSeeder {
  async run () {
    await Brand.createMany(statesArray)
  }
}

module.exports = BrandSeeder
