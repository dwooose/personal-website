<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $header = "From:". $name . "<" . $email . ">\r\n";

    $recipient = "dianaroseacerteza@gmail.com";

    mail($recipient, $subject, $message, $header) or die("Error :(");

    
    echo "message sent!";
    /*<!DOCTYPE html>
    <html> 
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Drose</title>
            <link rel="icon" href="images/logo.png">
            <link rel="stylesheet" href="style.css"> 
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
            <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
            
        </head>
        <body>
            <!--NAVIGATION BAR-->
            <div class="header-resume">
                <a href="index.html" class="logo">D<span>ROSE</span></a>
                <div class="nav-resume">
                    <a href="index.html" style="--i:1" class="back"><i class="bx bx-arrow-back">HOME</i></a>
                </div>
            </div>
            <div class="contact-text">
                <h2>Thank You for sending me an email!</h2>
            </div>
            </div>
        </body>
    </html>

    ';*/
?>