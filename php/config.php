<?php
// Update port if your MySQL uses a different one (default is 3306, yours seems 3307)
$conn = mysqli_connect("localhost", "root", "", "chat", 3307);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Connected successfully message removed
?>
