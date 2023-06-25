const express = require('express')
const router = express.Router()
const reservationController = require("../controllers/reservationController");

router.post('/create-reservation',reservationController.createReservation)
router.post('/delete-reservation',reservationController.deleteReservation)
router.post('/update-reservation',reservationController.updateReservation)

module.exports = router;
