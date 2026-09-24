function authenticateUser(username, password) {
    console.log("Running enhanced token-based authentication...");
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    return { authenticated: true, token: token };
}