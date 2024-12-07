// Sample credentials for demonstration
const validCredentials = {
    username: "user123",
    password: "password123"
};

// Handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validate credentials (simplified for this example)
    if (username === validCredentials.username && password === validCredentials.password) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard page (you can change this)
    } else {
        // Show error message if credentials are incorrect
        document.getElementById('error-message').style.display = 'block';
    }
});
