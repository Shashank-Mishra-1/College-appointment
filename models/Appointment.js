const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timeSlot: { type: Date, required: true },
    status: { type: String, enum: ['booked', 'canceled'], default: 'booked' }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);