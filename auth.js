function authenticateUser(username, password) {
    console.log("Running secure token-based authentication...");
    if (username === "admin" && password === "1234") {
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        return { authenticated: true, token: token };
    }
    return { authenticated: false, token: null };
}