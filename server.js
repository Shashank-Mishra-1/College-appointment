const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const professorRoutes = require('./routes/professorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/professors', professorRoutes);
app.use('/students', studentRoutes);
app.use('/appointments', appointmentRoutes);

let server;

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 5001;
    server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`Registered route: ${r.route.path}`);
    }
});

module.exports = { app, server: server || { close: () => {} } };


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDVhMTA3MjFhNTEyMzE1MjczZDg0NyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzQyMDUzNjg2fQ.tK7KZWiCkaHoyCGLxsL5OCbcSqVfhi70xO-uDlOmo44