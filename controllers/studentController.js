const Appointment = require('../models/Appointment');

exports.getAppointments = async (req, res) => {
    try {
        console.log("🔍 Incoming request to get appointments...");
        console.log("📌 Extracted user from token:", req.user);

        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }

        console.log("✅ Looking for appointments of student:", req.user.id);

        const appointments = await Appointment.find({ studentId: req.user.id });

        console.log("📊 Appointments Found:", appointments);

        res.json(appointments);
    } catch (error) {
        console.error("❌ Error fetching appointments:", error);
        res.status(500).json({ error: "Failed to fetch appointments" });
    }
};