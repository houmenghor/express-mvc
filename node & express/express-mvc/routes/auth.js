const express = require('express');
const router = express.Router();

const validate = require('../middleware/validate');
const { registerSchema } = require('../validators/auth');
const {authController} = require('../controllers/authController');

router.post('/register', validate(registerSchema), authController);

module.exports = router;