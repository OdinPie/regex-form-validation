<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
<title>Document</title>
</head>
<body class="container">
    <form>
        <h1>Name: <?php echo $name ;?></h1>
        <h1>Phone: <?php echo $phone ;?></h1>
        <h1>Email: <?php echo $email ;?></h1>
        <h1>Message: <?php echo $message ;?></h1>
    </form>
</body>
</html>