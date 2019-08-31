'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Segment extends BaseValidator {
  get rules () {
    return {
      name: 'required|min:4|max:100'
    }
  }
}

module.exports = Segment
