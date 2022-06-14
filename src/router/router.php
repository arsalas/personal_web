<?php

class Router
{
    public static function start()
    {
        switch ($_GET['uri']) {
            case '':
                include("../src/views/Home.php");
                include("../src/views/About.php");
                include("../src/views/Projects.php");
                include("../src/views/Contact.php");
                break;
            case 'email':
                echo 'Not implemented';
                break;
            default:
                header("Location: " . $GLOBALS['URL']);
                break;
        }
    }
}
