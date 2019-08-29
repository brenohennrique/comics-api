'use strict'

const Brand = use('App/Models/Brand')
const Redis = use('Redis')

class BrandController {
  /**
   * Show a list of all brands.
   * GET brands
   */
  async index () {
    const cachedBrands = await Redis.get('brands')

    if (cachedBrands) {
      console.log('Cache')
      return JSON.parse(cachedBrands)
    }

    const brands = await Brand.all()

    await Redis.set('brands', JSON.stringify(brands))
    Redis.expire('brands', 20)
    console.log('db')
    return brands
  }

  /**
   * Create/save a new brand.
   * POST brands
   */
  async store ({ request }) {
    const data = request.only(['name'])

    const brand = await Brand.create(data)

    return brand
  }

  /**
   * Display a single brand.
   * GET brands/:id
   */
  async show ({ params }) {
    const brand = await Brand.find(params.id)

    return brand
  }

  /**
   * Update brand details.
   * PUT or PATCH brands/:id
   */
  async update ({ params, request }) {
    const data = request.only(['name'])
    const brand = await Brand.find(params.id)

    brand.merge(data)

    await brand.save()

    return brand
  }

  /**
   * Delete a brand with id.
   * DELETE brands/:id
   */
  async destroy ({ params }) {
    const brand = await Brand.find(params.id)

    await brand.delete()
  }
}

module.exports = BrandController