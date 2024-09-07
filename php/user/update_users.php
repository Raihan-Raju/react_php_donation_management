<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'sadaka');

$username=$_POST['username'];
$phone=$_POST['phone'];
$address=$_POST['address'];
$password=$_POST['password'];
$email=$_POST['email'];
$id=$_POST['id'];


$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
    
    $query = "update users set username='$username',photo='$photo',phone='$phone',address='$address',
    password='$password',email='$email' where id=$id";
}else{
    $query = "update users set username='$username',phone='$phone',address='$address',
    password='$password',email='$email' where id=$id";
}
if($username!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}
