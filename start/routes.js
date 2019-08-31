'use strict'

const Route = use('Route')

Route.post('/register', 'AuthController.register')
     .validator('StoreUser')

Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  // API
  Route.group(() => {
    Route.resource('brands', 'BrandController')
         .only(['index', 'show'])

    Route.resource('segments', 'SegmentController')
         .only(['index', 'show'])

    Route.resource('types', 'TypeController')
         .only(['index', 'show'])
  })

  // Admin
  Route.group(() => {
    Route.resource('brands', 'BrandController')
         .only(['store', 'update', 'delete'])
         .validator(new Map([
            [['segments.store'], ['Segment']],
            [['segments.update'], ['Segment']]
          ]))

    Route.resource('segments', 'SegmentController')
         .only(['store', 'update', 'delete'])
          .validator(new Map([
              [['segments.store'], ['Segment']],
              [['segments.update'], ['Segment']]
            ]))

    Route.resource('segments', 'SegmentController')
          .only(['store', 'update', 'delete'])
          .validator(new Map([
            [['segments.store'], ['Segment']],
            [['segments.update'], ['Segment']]
          ]))
  })
})
.prefix('api/v1')
