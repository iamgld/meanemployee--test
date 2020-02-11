const express = require('express')
const router = express.Router()

const mpaymentController = require('../controllers/payment.controller')

router.post('/', mpaymentController.processPayment)

module.exports = router

