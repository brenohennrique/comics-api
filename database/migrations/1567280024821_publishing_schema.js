'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublishingSchema extends Schema {
  up () {
    this.create('publishings', (table) => {
      table.increments()
      table.string('name', 50)
           .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('publishings')
  }
}

module.exports = PublishingSchema
