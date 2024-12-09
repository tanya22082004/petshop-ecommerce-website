document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;

    // Reset previous error states
    clearErrors();

    // Validate form
    if (!validateForm(fullname, email, password, confirmPassword, terms)) {
        return;
    }

    // If validation passes, submit the form
    this.submit();
});

function validateForm(fullname, email, password, confirmPassword, terms) {
    let isValid = true;

    // Validate fullname
    if (fullname.length < 2) {
        showError('fullname', 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
        isValid = false;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        showError('confirm-password', 'Passwords do not match');
        isValid = false;
    }

    // Validate terms
    if (!terms) {
        showError('terms', 'You must accept the terms and conditions');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(field => {
        field.classList.remove('error');
    });
    
    document.querySelectorAll('.error-message').forEach(message => {
        message.remove();
    });
}
