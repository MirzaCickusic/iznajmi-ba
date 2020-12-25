const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    passwordHash: String,
    city: String,
    canton: String,
    registration_date: Date,
    telephone: {
        type: String,
        unique: true
    },
    review_count: {type: Number, default: 0},
    review_value: {type: Number, default: 0},
    address: {
        street: String,
        location: {
            lat: Number,
            long: Number
        }
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User