<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "devwithcam@outlook.com"; // Ton adresse email
    $subject = "Nouveau message depuis le formulaire de contact";

    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Merci ! Votre message a bien été envoyé.";
    } else {
        echo "Désolé, une erreur est survenue. Merci de réessayer.";
    }
} else {
    http_response_code(403);
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}
?>