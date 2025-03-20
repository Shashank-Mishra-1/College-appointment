const request = require('supertest');
const { app, server } = require('../server');
const mongoose = require('mongoose');

describe('E2E API Tests', () => {
    let token = '';

    beforeAll(async () => {
        await request(app).post('/auth/register').send({
            name: 'Test User',
            email: 'testuser@example.com',
            password: 'password123',
            role: 'student'
        });

        const loginRes = await request(app).post('/auth/login').send({
            email: 'testuser@example.com',
            password: 'password123'
        });

        token = loginRes.body.token;
    });

    afterAll(async () => {
        await mongoose.connection.close(); 
        if (server && server.close) {
            await server.close(); 
        }
    });

    test('User Registration', async () => {
        const res = await request(app).post('/auth/register').send({
            name: 'New User',
            email: 'newuser@example.com',
            password: 'password123',
            role: 'student'
        });

        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe('User registered successfully');
    });

    test('User Login', async () => {
        const res = await request(app).post('/auth/login').send({
            email: 'testuser@example.com',
            password: 'password123'
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
    });

    test('Set Professor Availability', async () => {
        const res = await request(app)
            .post('/professors/65adf6a8c3b27b00e5f8b123/availability')
            .set('Authorization', `Bearer ${token}`)
            .send({
                availableSlots: ["2025-03-15T10:00:00Z"]
            });

        expect(res.statusCode).toBe(201);
    });

    test('Book an Appointment', async () => {
        const res = await request(app)
            .post('/appointments/book')
            .set('Authorization', `Bearer ${token}`)
            .send({
                studentId: "65ade34567b27b00e5f8b456",
                professorId: "65adf6a8c3b27b00e5f8b123",
                timeSlot: "2025-03-15T10:00:00Z"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("Appointment booked");
    });
});