<?php

class Router
{
	public static function start()
	{
		switch ($_GET['uri']) {
			case '':
				require_once("../src/components/Header.php");
				require_once("../src/views/App.php");
				require_once("../src/components/Footer.php");
				break;
			case 'index.php':
				require_once("../src/components/Header.php");
				require_once("../src/views/App.php");
				require_once("../src/components/Footer.php");
				break;
			case 'email':
				try {
					$mail = new Mail();
					$mail->sendEmail($_POST['email'],  $_POST['name'], $_POST['message']);
					echo json_encode(array('status' => 'OK'));
				} catch (Exception $e) {
					echo json_encode(array('status' => 'KO'));
				}
				break;
				// default:
				// 	header("Location: " . $GLOBALS['URL']);
				// 	break;
			default:
				require_once("../src/views/NotFound.php");
				break;
		}
	}
}
