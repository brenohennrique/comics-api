'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Publishing extends BaseValidator {
  get rules () {
    return {
      name: 'required|min:4|max:50'
    }
  }
}

module.exports = Publishing
