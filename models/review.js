const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)

// console.log('created review model')

module.exports = mongoose.model('Review', Review)
