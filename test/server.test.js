const request = require("supertest");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "CI/CD Node.js application is running"
    });
});

test("Health endpoint should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
});