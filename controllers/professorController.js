const Availability = require('../models/Availability');

exports.setAvailability = async (req, res) => {
    try {
        const { availableSlots } = req.body;
        const availability = new Availability({ professorId: req.params.id, availableSlots });
        await availability.save();
        res.status(201).json({ message: 'Availability set' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to set availability' });
    }
};

exports.getAvailability = async (req, res) => {
    try {
        const availability = await Availability.findOne({ professorId: req.params.id });
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get availability' });
    }
};