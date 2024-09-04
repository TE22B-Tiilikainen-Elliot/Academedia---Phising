document.querySelector('.form__button').addEventListener('click', function() {
    // Check if the user has already been logged
    if (localStorage.getItem('loginButtonClicked')) {
        console.log('Login button was already clicked, not logging again.');
        return; // Exit the function if the user has already been logged
    }

    // Log the click event
    console.log('Login button clicked');

    // Send the log to the server
    fetch('/log-login-click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ timestamp: new Date().toISOString() })
    }).then(response => {
        if (response.ok) {
            // Store a flag in localStorage to indicate that the login button was clicked
            localStorage.setItem('loginButtonClicked', 'true');
        } else {
            console.error('Failed to log the click event.');
        }
    }).catch(err => console.error('Error logging login click:', err));
});