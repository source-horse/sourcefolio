document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Redirect to dashboard or home page
        // For demo, we'll just log it
        console.log('User is already logged in');
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (!emailInput.value || !passwordInput.value) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically make an API call to your backend
        console.log('Login attempt:', {
            email: emailInput.value,
            password: passwordInput.value,
            remember: document.getElementById('remember').checked
        });

        // For demo purposes, simulate successful login
        const rememberMe = document.getElementById('remember').checked;
        handleSuccessfulLogin(emailInput.value, rememberMe);
    });

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle successful login
    function handleSuccessfulLogin(email, remember) {
        // Store login state
        if (remember) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
        } else {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', email);
        }

        // Show success message
        alert('Login successful!');
        
        // Reset form
        loginForm.reset();

        // In a real app, you would redirect to a dashboard or home page
        // window.location.href = 'dashboard.html';
    }

    // Add focus effects
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}); 