<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('Location: LogReg.html');
    }
    ?>

<html>
<head>
<title>Welcome Page</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class=hero>
<a href="logout.php">LOG OUT</a>
<h1>Welcome <?php echo $_SESSION['username']; ?></h1>
</div>
</body>

</html>
