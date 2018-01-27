
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
$res = 0;
$name2 = $_POST['name2'];
$email2 = $_POST['email2'];
$password2 = $_POST['password2'];
$dbname = "myDB";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "insert into log(username, email, password) values ('$name2', '$email2', '$password2')";
if ($conn->query($sql) === TRUE) {
   $res = 1;
} else {
   $res = 0;
}
$conn->close();
echo json_encode($res);
?>