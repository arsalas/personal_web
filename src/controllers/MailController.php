<?php

class MailController
{

	private $mail;

	public function __construct()
	{
		$this->mail = new Mail();
	}

	public function sendMail($mail, $subject, $message)
	{
		if (!isset($mail) || !isset($subject) || !isset($message))
			throw new Exception(1);
		$bodyMsg = "<div>$mail</div>";
		$bodyMsg .= "<div>$message</div>";
		$result = $this->mail->sendEmail($mail, $subject, $bodyMsg);
		if ($result['status'] == 'KO')
			throw new Exception(2);
	}
}
