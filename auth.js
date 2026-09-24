function authenticateUser(username, password) {
    console.log("Validating basic credentials...");
    if (username === "admin" && password === "1234") {
        return "Login successful";
    }
    return "Login failed";
}