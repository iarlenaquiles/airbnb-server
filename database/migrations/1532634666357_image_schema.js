'use strict'

const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
