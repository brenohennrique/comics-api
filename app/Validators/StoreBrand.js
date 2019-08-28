'use strict'

class StoreBrand {
  get rules () {
    return {
      name: 'required|min:4|max:100|unique:brands'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    })
  }
}

module.exports = StoreBrand
