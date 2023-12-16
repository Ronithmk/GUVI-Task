<?php
// Assume you have a MySQL connection established here
$servername = "localhost";
$username = "root";
$password = "Roni@1308";
$dbname = "mysql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assume you have session management for user authentication
session_start();





$user_id = $_SESSION['username']; // Replace with the actual session variable

// Check the request method to determine the action
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Fetch user details from the 'profiles' table
    $fetch_profile_sql = "SELECT * FROM users WHERE username='$user_id'";
    $result = $conn->query($fetch_profile_sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo json_encode(['error' => 'Profile not found']);
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Handle the update form submission
    $name = $_POST['name'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    // Perform validation if needed

    // Update user profile data in the 'profiles' table
    $update_profile_sql = "UPDATE users SET name='$name', age='$age', dob='$dob', contact='$contact' WHERE username='$user_id'";

    if ($conn->query($update_profile_sql) === TRUE) {
        echo "Profile updated successfully!";
    } else {
        echo "Error updating profile: " . $conn->error;
    }
}

$conn->close();
?>
