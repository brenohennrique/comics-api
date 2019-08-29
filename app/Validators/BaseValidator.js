'use strict'

const Antl = use('Antl')

class BaseValidator {
  get validateAll () {
    return true
  }

  get messages () {
    return Antl.list('validation')
  }

  async fails(errorMessages) {
    return this
      .ctx
      .response
      .status(422)
      .send(errorMessages)
  }
}

module.exports = BaseValidator
