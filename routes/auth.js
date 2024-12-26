const express = require('express');
const { registrar, login } = require('../controllers/auth');
const router = express.Router();

router.post('/register', registrar);
router.post('/login', login);

module.exports = router;
