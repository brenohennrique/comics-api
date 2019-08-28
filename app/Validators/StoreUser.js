'use strict'

const Antl = use('Antl')
class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      first_name: 'required|min:5|max:60',
      last_name: 'required|min:5|max:60',
      birthday: 'required|date',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:60'
    }
  }

  get messages () {
    return Antl.list('validation')
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    })
  }
}

module.exports = StoreUser
