function registerUser() {
    const username = document.getElementById("new-name").value;
    const password = document.getElementById("new-password").value;

    fetch('./php/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:`new-username=${encodeURIComponent(username)}&new-password=${encodeURIComponent(password)}`,})
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log the response from the server
            if (data.includes("Registration successfull")) {
                // Redirect to the login page after successful registration
                window.location.href = 'login.html';
            }
        })
        .catch(error => console.error('Error:', error));
}