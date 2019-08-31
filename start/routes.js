'use strict'

const Route = use('Route')

Route.post('/register', 'AuthController.register')
     .validator('StoreUser')

Route.post('/authenticate', 'AuthController.authenticate')

// API
Route.group(() => {
  Route.resource('brands', 'BrandController')
       .only(['index', 'show'])

  Route.resource('segments', 'SegmentController')
       .only(['index', 'show'])

  Route.resource('types', 'TypeController')
       .only(['index', 'show'])

  Route.resource('publishings', 'PublishingController')
       .only(['index', 'show'])
})
.prefix('api/v1')

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

  Route.resource('publishings', 'PublishingController')
        .only(['store', 'update', 'delete'])
        .validator(new Map([
          [['publishings.store'], ['Publishing']],
          [['publishings.update'], ['Publishing']]
        ]))
})
.prefix('api/v1')
