'use strict'

class StoreUser {
  get rules () {
    return {
      first_name: 'required|min:5|max:60',
      last_name: 'required|min:5|max:60',
      birthday: 'required|date',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:60'
    }
  }

  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    })
  }
}

module.exports = StoreUser
