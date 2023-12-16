function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('./php/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}',})
    .then(response => response.text())
    .then(data => {
        console.log(data); 
        if (data.includes("Login successfull")) {
            // Redirect to a welcome page after successful login
            window.location.href = 'profile.html';
        }
    })
    .catch(error => console.error('Error:', error));
}