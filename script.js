// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if login is valid (here we simulate with a basic condition)
    if (username && password) {
        // Redirect to the confirmation page after successful login
        alert("Login successful! Redirecting to confirmation.");
        window.location.href = 'confirmation.html'; // Replace with your confirmation page URL
    } else {
        alert('Please enter valid credentials!');
    }
});

// Handle the sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Simulate sign-up process (you can add real validation here)
    if (username && password) {
        alert("Sign-up successful! Redirecting to checkout.");
        window.location.href = 'https://wafflenugget.github.io/ZAP-n-SPARK/'; // Redirect after sign-up
    } else {
        alert('Please fill out all fields!');
    }
});

// Show sign-up form when clicking the sign-up link
document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';  // Hide login form
    document.getElementById('signup-form').style.display = 'block';  // Show sign-up form
    document.getElementById('register-link').style.display = 'none';  // Hide "Don't have an account?" text
});

// Remove sign-up form and show login when clicking the "Back to Login" link
document.getElementById('back-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';  // Hide sign-up form
    document.getElementById('login-form').style.display = 'block';  // Show login form
    document.getElementById('register-link').style.display = 'block';  // Show "Don't have an account?" text
});