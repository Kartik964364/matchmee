document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    // Username validation
    if (username.value.trim() === '') {
        username.classList.add('is-invalid');
        isValid = false;
    } else {
        username.classList.remove('is-invalid');
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Password validation
    if (password.value.length < 8 || password.value.length > 20) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Registration successful!');
        this.reset(); // Reset the form
    }
});
