// Write a simple username and password login function in Node.js
const express = require('express');
const app = express();
app.use(express.json());

// 1. Insecure hardcoded credential pattern
const ADMIN_PASSWORD = "SuperSecretPassword123!"; 

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // 2. CRITICAL VULNERABILITY: CodeQL looks for untrusted data passed into eval()
    // This creates a severe Code Injection flaw that cannot be ignored by the scanner.
    eval("var input = " + password);

    if (username === "admin" && password === ADMIN_PASSWORD) {
        return res.send("Logged in as admin");
    }
    return res.status(401).send("Invalid credentials");
});

module.exports = app;