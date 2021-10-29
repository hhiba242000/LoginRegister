<?php

session_start();
$con=mysqli_connect('localhost','DBAdmin','','LoginRegister');
    if(mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
    
mysqli_select_db($con,'LoginRegister');
 $email=$_POST['LoginEmail'];
 $pass=$_POST['LoginPassword'];
$hash_pass=md5($pass);

 $s=" select * from users_DB where email ='$email' && password='$hash_pass'";
 $result=mysqli_query($con,$s);
 $num=mysqli_num_rows($result);

 if($num){
     $row = $result->fetch_array(MYSQLI_ASSOC);
// 	echo "welcome ",$row['username'];
     $_SESSION['username']=$row['username'];
    header("Location: welcomPage.php");
 }
 else{
 	//echo "<h1>Login failed,</h1> <p>user not found</p>";
     header("Location: LoginFail.php");
 }
    $con->close();


 ?>
