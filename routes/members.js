const express = require('express')
const router = express.Router()
const memberController = require("../controllers/memberController");

router.post("/create-member", memberController.createMember);


module.exports = router;
