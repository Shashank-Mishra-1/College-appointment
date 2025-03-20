const express = require('express');
const { bookAppointment, cancelAppointment } = require('../controllers/appointmentController'); 
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

console.log("📌 Imported Controller Functions:", { bookAppointment, cancelAppointment }); 

router.post('/book', authenticate, bookAppointment);
router.delete('/:id/cancel', authenticate, cancelAppointment);

module.exports = router;