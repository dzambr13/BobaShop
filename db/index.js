const mongoose = require('mongoose')
// require('dotenv').config()

mongoose
  .connect('mongodb://127.0.0.1:27017/bobasDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

// console.log('db index successful')

module.exports = db
