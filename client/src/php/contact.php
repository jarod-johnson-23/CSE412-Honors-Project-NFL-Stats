<?php
if(true) {
	include_once( 'class.phpmailer.php' );
	$mail = new PHPMailer;
	$mail->isMail();
	$mail->AddAddress('jarod.johnson@laneterralever.com');
	$mail->setFrom('jarod.johnson@laneterralever.com', 'Downtown Damonte Contact Form');
	$mail->addReplyTo('jarod.johnson@laneterralever.com', 'Downtown Damonte Contact Form');
	$mail->Subject = "Downtown Damonte Contact Form";

	$message     = '<html><body>';
	$message    .= '</body></html>';
	$mail->msgHTML($message);
	if( $mail->Send() ){
		header("Location:/thankyou.html");
		$mail->clearAddresses();
		return true;
	}else{

		$mail->clearAddresses();
		return false;
	}
}
?>