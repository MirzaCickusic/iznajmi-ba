const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    product_reviewed_id: String,
    review_text: String,
    submitted_by_user_id: String,
    submitted_at: String,
    rating_given: Number
})

reviewSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review