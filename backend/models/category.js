const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category_name: String,
    category_products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

categorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


const Category = mongoose.model('Category', categorySchema)

module.exports = Category