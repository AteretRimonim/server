const express = require('express');
const authController = require('../controllers/authentication.controller');
const router = express.Router();

router.post('/login', authController.login);

router.post('/refresh-token', authController.refreshToken);

module.exports = router;
