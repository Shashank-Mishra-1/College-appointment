const express = require('express');
const { getAppointments } = require('../controllers/studentController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/appointments', authenticate, getAppointments);

module.exports = router;