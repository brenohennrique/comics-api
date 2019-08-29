'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class StoreUser extends BaseValidator {
  get rules () {
    return {
      first_name: 'required|min:5|max:60',
      last_name: 'required|min:5|max:60',
      birthday: 'required|date',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:60'
    }
  }
}

module.exports = StoreUser
