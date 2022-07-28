const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const { bobaController, reviewController } = require('./controllers')

const { boba } = require('./models/boba')

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.static(`${__dirname}/client/build`))

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/reviews', reviewController.getAllReviews)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
