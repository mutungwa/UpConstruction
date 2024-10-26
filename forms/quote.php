<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'Mutungwakelvin@gmail.com'; // Replace with your Gmail address
        $mail->Password = 'Mutungwa73002.'; // Replace with your Gmail password or App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('Mutungwakelvin@gmail.com', 'Southern Earthmoving'); // Replace with the recipient email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Quote Request from ' . $name;
        $mail->Body = "
            <h3>Quote Request Details</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
        
        $mail->send();
        echo 'Your quote request has been sent successfully. Thank you!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
