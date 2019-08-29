'use strict'

const BaseValidator = use('App/Validators/BaseValidator')
class Brand extends BaseValidator {
  get rules () {
    return {
      name: 'required|min:4|max:100|unique:brands'
    }
  }
}

module.exports = Brand
