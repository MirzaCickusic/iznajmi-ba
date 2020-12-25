const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    category_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    published_by_user: String,
    display_name: String,
    short_description: String,
    long_description: String,
    reviews_ids:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    location: {
        street: String,
        // postal_number: Number,
        canton: String,
        city: String,
        exact_location: {
            lat: Number,
            long: Number
        }
    },
    pricing: {
        type: String,
        price: Number
    },
    is_active: Boolean,
    images: [{
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