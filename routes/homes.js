const express = require('express')
const router = express.Router()
const homeController = require("../controllers/homeController");

router.post('/create-home',homeController.createHome)
router.post('/delete-home',homeController.deleteHome)
router.post('/update-home',homeController.updateHome)

module.exports = router;
