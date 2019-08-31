'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

class SegmentTransformer extends BumblebeeTransformer {
  transform (model) {
    return {
      id: model.id,

      name: model.name
    }
  }
}

module.exports = SegmentTransformer
