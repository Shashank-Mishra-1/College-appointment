const express = require('express');
const { setAvailability, getAvailability } = require('../controllers/professorController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id/availability', authenticate, setAvailability);
router.get('/:id/availability', authenticate, getAvailability);

module.exports = router;