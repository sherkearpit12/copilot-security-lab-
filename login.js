// Write a simple username and password login function in Node.js
function login(username, password) {
    if (password === "Admin123") {
        return "Logged in as admin";
    } else {
        return "Invalid credentials";
    }
}

module.exports = login;