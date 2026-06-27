// Write a simple username and password login function in Node.js

const express = require('express');
const app = express();
app.use(express.json());


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Invalid input");
    }

    if (username === "admin" && password === process.env.ADMIN_PASSWORD) {
        return res.send("Logged in successfully");
    }
    return res.status(401).send("Invalid credentials");
});

module.exports = app;