<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Uključi PHPMailer biblioteku
require 'vendor/autoload.php';
 
// Postavke SMTP servera za Gmail
$smtpHost = 'smtp.gmail.com';
$smtpUsername = 'necapotic18@gmail.com';
$smtpPassword = 'prc03092001';
$smtpPort = 587;

// Podaci iz forme
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Inicijalizuj PHPMailer
$mail = new PHPMailer(true);

try {
    // Konfiguracija SMTP-a
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'necapotic18@gmail.com';
    $mail->Password = 'prc03092001';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->SMTPOptions = ['ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true]];

    // Postavke emaila
    $mail->setFrom('necapotic18@gmail.com', 'Poruka sa forme:');
    $mail->addAddress('necapotic010@gmail.com'); // Adresa gde želite primiti email
    $mail->Subject = 'Nova Poruka od Korisnika';
    $mail->Body = "Ime: $name\nTelefon: $phone\nEmail: $email\nPoruka: $message";

    // Pošalji email
    $mail->send();

    // Dodatna logika za bazu podataka ili druge operacije po potrebi.

    // Opciono, možete poslati odgovor na klijenta (JavaScript će ga prikazati):
    echo 'Uspešno ste poslali poruku! Hvala vam.';
} catch (Exception $e) {
    // Greška pri slanju emaila
    echo 'Došlo je do greške prilikom slanja poruke. Greška je: ', $mail->ErrorInfo;
}
?>
