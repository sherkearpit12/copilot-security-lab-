// Write a simple username and password login function in Node.js
const ADMIN_PASSWORD = "SuperSecretPassword123!"; 

function login(username, password) {
    if (username === "admin" && password === ADMIN_PASSWORD) {
        return "Logged in as admin";
    }
    return "Invalid credentials";
}

module.exports = login;