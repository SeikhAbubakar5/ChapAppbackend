const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/chatController');

router.post('/message', chatController.saveMessage);

module.exports = router;