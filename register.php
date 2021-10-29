<?php 
session_start();
$con=mysqli_connect('localhost','DBAdmin','','LoginRegister');
    if(mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
    

mysqli_select_db($con,'LoginRegister');

$username=$_POST['RegUsrName'];
$email=$_POST['RegEmail'];
$pass=$_POST['RegPassword'];
    
//$s="SELECT email, COUNT(*) FROM users GROUP BY  email HAVING COUNT(*) > 1";
//$result=mysqli_query($con,$s);
//$num=mysqli_num_rows($result);
    
    $s=" select * from users_DB where email ='$email'";
    $result=mysqli_query($con,$s);
    $num=mysqli_num_rows($result);
//replace $result with$num in if statement
    
if($num){
	//echo "<h1>Registration failed,</h1> <p>email already taken</p>";
    header("Location: RegFail.php");
}
else{
    $hashed_pass=md5($pass);
    $ns="insert into users_DB (username, email, password) values ('$username','$email','$hashed_pass')";
    $newresult=mysqli_query($con,$ns);
    //echo "registration successful,welcome ",$username;
    $_SESSION['username']=$username;
    header("Location: welcomPage.php");

}


 ?>
