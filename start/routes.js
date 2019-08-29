'use strict'

const Route = use('Route')

Route.post('/register', 'AuthController.register')
     .validator('StoreUser')

Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('brands', 'BrandController')
      .apiOnly()
      .validator(new Map([
          [['brands.store'], ['Brand']],
          [['brands.update'], ['Brand']]
        ]))
})
.prefix('api/v1')
