<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mail
{
    private $host;
    private $username;
    private $password;

    function __construct()
    {
        $this->host = "smtp.gmail.com";
        $this->username =  "developer.test.alberto.web@gmail.com";
        $this->password =  "lbywaclixfezzjvu";
        $this->port =  587;
    }

    public function sendEmail($email, $subject, $message)
    {

        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->SMTPDebug = 0;                                       // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = $this->host;                            // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = $this->username;                        // SMTP username
            $mail->Password   =  $this->password;                       // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = $this->port;                            // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            if (isset($email)) {
                $mail->setFrom($this->username, "Personal web");
                $mail->addAddress('aramirsa@gmail.com');        // Add a recipient
            } else {
                throw new Exception(1);
            }
            // Content
            $mail->isHTML(true);                                        // Set email format to HTML
            $mail->CharSet = 'UTF-8';
            $body = "<div>$email</div>";
            $body .= "<div>$message</div>";
            $mail->Subject = $subject;
            $mail->Body    = $body;
            $mail->AltBody = $body;

            $mail->send();

            $response['status'] = 'OK';
        } catch (Exception $e) {
            $response['status'] = 'KO';
        }

        return $response;
    }
}
