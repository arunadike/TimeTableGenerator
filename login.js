// login.js

// Select form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const feedbackMessage = document.getElementById('feedbackMessage');

// Function to handle form submission
function handleLogin(event) {
  event.preventDefault();

  // Get username and password values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate fields
  if (!username || !password) {
    displayFeedback('Please enter both username and password.', 'error');
    return;
  }

  // Simulated login process (replace this with actual login logic)
  if (username === 'user' && password === 'password123') {
    displayFeedback('Login successful!', 'success');
    // Redirect to dashboard or home page
    window.location.href = '/dashboard.html';
  } else {
    displayFeedback('Invalid username or password.', 'error');
  }
}

// Function to display feedback messages
function displayFeedback(message, type) {
  feedbackMessage.textContent = message;
  feedbackMessage.className = type === 'error' ? 'feedback error' : 'feedback success';
}

// Add event listener to login form
loginForm.addEventListener('submit', handleLogin);
