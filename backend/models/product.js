const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    category_ids: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    product_display_name: String,
    product_short_description: String,
    product_long_description: String,
    product_location: {
        street: String,
        // postal_number: Number,
        canton: String,
        city: String,
        exact_location: {
            lat: Number,
            long: Number
        }
    },
    product_price: {
        pricing_type: String,
        price: Number
    },
    review_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    is_active: Boolean,
    product_images: [{
        image_url: String
    }]
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product