const Appointment = require('../models/Appointment');
const mongoose = require('mongoose');

exports.bookAppointment = async (req, res) => {
    try {
        const { studentId, professorId, timeSlot } = req.body;

        console.log("📌 Booking appointment for:", studentId, "with Professor:", professorId, "at", timeSlot);

        const appointment = new Appointment({ studentId, professorId, timeSlot, status: "booked" });
        await appointment.save();

        console.log("✅ Appointment successfully booked:", appointment);

        res.status(201).json({ message: "Appointment booked", appointment });
    } catch (error) {
        console.error("❌ Error booking appointment:", error);
        res.status(500).json({ error: "Failed to book appointment", details: error.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        let appointmentId = req.params.id;

        console.log("🔍 Attempting to cancel appointment with ID:", appointmentId);

        if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
            return res.status(400).json({ error: "Invalid appointment ID format" });
        }

        appointmentId = new mongoose.Types.ObjectId(appointmentId);

        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) {
            console.log("❌ Appointment not found in the database");
            return res.status(404).json({ error: "Appointment not found" });
        }

        console.log("✅ Appointment Found:", appointment);

        await Appointment.findByIdAndDelete(appointmentId);

        console.log("🗑️ Appointment successfully canceled:", appointmentId);

        res.json({ message: "Appointment canceled" });

    } catch (error) {
        console.error("❌ Error canceling appointment:", error);
        res.status(500).json({ error: "Failed to cancel appointment", details: error.message });
    }
};