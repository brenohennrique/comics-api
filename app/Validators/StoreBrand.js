'use strict'

const Antl = use('Antl')

class StoreBrand {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|min:4|max:100|unique:brands'
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

module.exports = StoreBrand
