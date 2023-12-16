document.addEventListener('DOMContentLoaded', function() {
    // Fetch user details when the page loads
    fetchUserDetails();
});

function fetchUserDetails() {
    // Assume you have a separate fetch_user_details.php endpoint
    // Replace 'your_fetch_user_details_endpoint' with the actual endpoint
    fetch('./php/profile.php')
    .then(response => response.json())
    .then(data => {
        // Update the displayed profile details
        const profileDetails = document.getElementById('profile-details');
        profileDetails.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Date of Birth:</strong> ${data.dob}</p>
            <p><strong>Contact:</strong> ${data.contact}</p>
            <button type="button" onclick="toggleForm()">Edit Profile</button>
        `;
    })
    .catch(error => console.error('Error:', error));
}

function updateProfile() {
    const name = document.getElementById("name-input").value;
    const age = document.getElementById("age-input").value;
    const dob = document.getElementById("dob-input").value;
    const contact = document.getElementById("contact-input").value;

    // Perform validation if needed

    // Send the updated profile data to the server using AJAX
    // Assume you have a separate update_profile.php for handling the update logic
    // Replace 'your_update_profile_endpoint' with the actual endpoint
    fetch('./php/profile.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&dob=${encodeURIComponent(dob)}&contact=${encodeURIComponent(contact)}`,})
    .then(response => response.text())
    .then(data => {
        // After a successful update, toggle back to the profile display
        toggleForm();
        fetchUserDetails();

        console.log(data); // Log the response from the server
    })
    .catch(error => console.error('Error:', error));
}

function toggleForm() {
    const form = document.getElementById("update-profile-form");
    const profileDetails = document.getElementById("profile-details");

    if (form.style.display === "none") {
        // Show the form and hide the profile details
        form.style.display = "block";
        profileDetails.style.display = "none";
    } else {
        // Hide the form and show the profile details
        form.style.display = "none";
        profileDetails.style.display = "block";
    }
}