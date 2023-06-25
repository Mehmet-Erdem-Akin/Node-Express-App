const express = require('express')
const router = express.Router()
const hostController = require("../controllers/hostController");

router.post('/create-host',hostController.createHost)
router.post('/delete-host',hostController.deleteHost)
router.post('/update-host',hostController.updateHost)

module.exports = router;
