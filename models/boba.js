const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Boba = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    location: { Type: String, required: true }
  },
  { timestamps: true }
)

// console.log('boba model created')

module.exports = mongoose.model('Boba', Boba)
