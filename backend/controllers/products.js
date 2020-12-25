const productRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

//Get all products
productRouter.get('/', async (request, response) => {
    const products = await Product
        .find({})

    response.json(products.map(product => product.toJSON()))
})

//Create a product
productRouter.post('/', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const product = new Product({
        category_ids: body.category_ids,
        published_by_user: user.id,
        display_name: body.display_name,
        short_description: body.short_description,
        long_description: body.long_description,
        reviews_ids: body.reviews_ids,
        location: body.location,
        pricing: body.price,
        is_active: body.is_active,
        images: body.images
    })

    const savedProduct = await product.save()

    response.json(savedProduct.toJSON())
})

//Update product by id
productRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const product = {
        //TODO Implement product update content
    }

    Product.findByIdAndUpdate(request.params.id, product, { new: true })
        .then(updatedProduct => {
            response.json(updatedProduct.toJSON())
        })
        .catch(error => next(error))
})

//Get product by id
productRouter.get('/:id', async (request, response) => {
    const product = await Product.findById(response.params.id)

    if (product) {
        response.json(product.toJSON())
    } else {
        response.status(404).end()
    }
})

//Delete product by id
productRouter.delete('/:id', async (request, response) => {
    await Product.findByIdAndRemove(request.params.id)
    response.status(204).end()
})


module.exports = productRouter