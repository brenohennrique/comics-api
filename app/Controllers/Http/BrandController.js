'use strict'

const Brand = use('App/Models/Brand')
const Redis = use('Redis')

class BrandController {
  async index ({ transform }) {
    const cachedBrands = await Redis.get('brands')

      if (cachedBrands) return JSON.parse(cachedBrands)

    const brands = await Brand.all()
    const brandsTransform = await transform.collection(brands, 'BrandTransformer')

    await Redis.set('brands', JSON.stringify(brandsTransform))
    Redis.expire('brands', 20)

    return brandsTransform
  }

  async store ({ request }) {
    const data = request.only(['name'])

    const brand = await Brand.create(data)

    return brand
  }

  async show ({ params, transform }) {
    const brand = await Brand.find(params.id)

    return transform.item(brand, 'BrandTransformer')
  }

  async update ({ params, request }) {
    const data = request.only(['name'])
    const brand = await Brand.find(params.id)

    brand.merge(data)

    await brand.save()

    return brand
  }

  async destroy ({ params }) {
    const brand = await Brand.find(params.id)

    await brand.delete()
  }
}

module.exports = BrandController
