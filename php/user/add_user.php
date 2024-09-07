<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'sadaka');

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

if (isset($_POST['email'])) {
    $username = $_POST['username'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $target_dir = "../images/";
    $target_file = $target_dir . basename($_FILES["photo"]["name"]);
    if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
        $photo = $_FILES["photo"]["name"];
    } else {
        $photo = '';
    }

    $query = "INSERT INTO users (username, phone, address, photo, password, email) VALUES ('$username', '$phone', '$address', '$photo', '$password', '$email')";
    
    if ($username != '') {
        if ($con->query($query) === TRUE) {
            echo json_encode(['status' => true]);
        } else {
            echo json_encode(['status' => false, 'error' => $con->error]);
        }
    } else {
        echo json_encode(['status' => false, 'error' => 'Username is empty']);
    }
} else {
    echo json_encode(['status' => false, 'error' => 'Email not set']);
}

$con->close();
?>
