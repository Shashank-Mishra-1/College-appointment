# College Appointment System - Backend API

This repository contains the backend implementation for a **College Appointment System**, allowing students to **book appointments with professors**, while professors can **set their availability and manage bookings**. The system is built using **Node.js, Express, and MongoDB**, with **Jest and Supertest** for automated testing.

## 🚀 Features
- **User Authentication** (JWT-based)
- **Role-based Access Control** (Students & Professors)
- **Professor Availability Management**
- **Student Appointment Booking & Cancellation**
- **MongoDB Integration with Mongoose**
- **Automated API Testing using Jest & Supertest**

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Testing:** Jest, Supertest
- **Tools:** Postman, MongoDB Compass, Excalidraw

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

git clone [Insert GitHub Repo Link]
cd college-appointment-api


2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=mongodb+srv://your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5001

4️⃣ Start the Server

npx nodemon server.js

5️⃣ Run Tests

npm test



⸻

📌 API Endpoints

🔑 Authentication

Method	Endpoint	Description
POST	/auth/register	Register a new user (Student/Professor)
POST	/auth/login	Login and get JWT token

👨‍🏫 Professors

Method	Endpoint	Description
POST	/professors/:id/availability	Set available slots
GET	/professors/:id/availability	View available slots

🎓 Students

Method	Endpoint	Description
GET	/students/appointments	View booked appointments
POST	/appointments/book	Book an appointment
DELETE	/appointments/:id/cancel	Cancel an appointment



⸻

✅ Testing & Validation

This repository includes Jest test cases to validate API endpoints. Run tests using:

npm test

The test cases cover:
	•	User Registration & Login
	•	Setting Professor Availability
	•	Booking & Canceling Appointments

⸻

⭐ If you find this project helpful, feel free to give it a star on GitHub! ⭐

---
