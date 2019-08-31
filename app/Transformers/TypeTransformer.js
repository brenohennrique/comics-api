'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

class TypeTransformer extends BumblebeeTransformer {
  transform (model) {
    return {
      id: model.id,

      name: model.name
    }
  }
}

module.exports = TypeTransformer
