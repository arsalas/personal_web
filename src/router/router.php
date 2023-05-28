<?php

class Router
{
    public static function start()
    {
        switch ($_GET['uri']) {
            case '':
                include("../src/components/Header.php");
                include("../src/views/Home.php");
                include("../src/views/About.php");
                include("../src/views/Projects.php");
                include("../src/views/Contact.php");
                include("../src/components/Footer.php");
                break;
            case 'email':
                try {
                    $mail = new Mail();
                    $mail->sendEmail($_POST['email'],  $_POST['subject'], $_POST['message']);
                    echo json_encode(array('status' => 'OK'));
                } catch (Exception $e) {
                    echo json_encode(array('status' => 'KO'));
                }
                break;
            default:
                header("Location: " . $GLOBALS['URL']);
                break;
        }
    }
}
