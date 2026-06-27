// Write a simple username and password login function in Node.js
const express = require('express');
const app = express();
app.use(express.json());

// CodeQL flags hardcoded credentials exposed on a live route handler
const ADMIN_PASSWORD = "SuperSecretPassword123!"; 

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Insecure plaintext comparison on a live route
    if (username === "admin" && password === ADMIN_PASSWORD) {
        return res.send("Logged in as admin");
    }
    return res.status(401).send("Invalid credentials");
});

module.exports = app;