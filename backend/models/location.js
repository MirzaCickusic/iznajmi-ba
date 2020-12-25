const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    //ako tačna lokacija nije učitana, uzimamo long i lat od opštine ili grada
    municipality: String,
    exact_location: {
        lat: Number,
        long: Number
    }
})

locationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


const Location = mongoose.model('Category', locationSchema)

module.exports = Location