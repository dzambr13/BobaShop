const { Router } = require('express')
const router = Router()
const { reviewController, bobaController } = require('../controllers')

router.get('/', (req, res) => res.send('Working? Working'))

router.post('/reviewcreate', reviewController.createReview)

router.get('/review', reviewController.getAllReviews)

router.put('/review/:id', reviewController.updateReview)

router.delete('/review/:id', reviewController.deleteReview)

// -------------

router.get('/boba', bobaController.getAllBobas)

router.get('/boba/:id', bobaController.getBoba)

module.exports = router
