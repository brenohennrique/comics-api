'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

class BrandTransformer extends BumblebeeTransformer {
  transform (model) {
    return {
      id: model.id,

      name: model.name
    }
  }
}

module.exports = BrandTransformer
