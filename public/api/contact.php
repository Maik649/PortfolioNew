<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Diese Anfrage-Methode wird nicht unterstützt.');
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 16384) {
    respond(400, false, 'Die Anfrage ist ungültig oder zu groß.');
}

$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    respond(400, false, 'Die Anfrage enthält keine gültigen Formulardaten.');
}

$name = $payload['name'] ?? null;
$email = $payload['email'] ?? null;
$message = $payload['message'] ?? null;
$privacyAccepted = $payload['privacyAccepted'] ?? null;

if (
    !is_string($name) ||
    !is_string($email) ||
    !is_string($message)
) {
    respond(400, false, 'Bitte füllen Sie alle Felder korrekt aus.');
}

if ($privacyAccepted !== true) {
    respond(400, false, 'Bitte stimmen Sie der Datenschutzerklärung zu.');
}

$name = trim($name);
$email = trim($email);
$message = trim($message);
$nameMatches = [];
$nameLength = preg_match_all('/./us', $name, $nameMatches);
$messageMatches = [];
$messageLength = preg_match_all('/./us', $message, $messageMatches);

if (
    $nameLength === false ||
    $nameLength < 7 ||
    $nameLength > 120 ||
    strlen($email) > 254 ||
    filter_var($email, FILTER_VALIDATE_EMAIL) === false ||
    $messageLength === false
) {
    respond(400, false, 'Bitte prüfen Sie Name, E-Mail-Adresse und Nachricht.');
}

if ($messageLength < 11) {
    respond(400, false, 'Die Nachricht muss mindestens 10 Zeichen lang sein.');
}

if (preg_match(
    '~</?[a-z][^>]*>|<!--|-->|javascript\s*:|\bon[a-z]+\s*=|\b(?:eval|alert|prompt|confirm)\s*\(|\b(?:document|window|console)\s*\.|\b(?:const|let|var)\s+[A-Za-z_$]|\bfunction\s*[A-Za-z_$]*\s*\(|=>~i',
    $message
) !== 0) {
    respond(400, false, 'Bitte geben Sie keinen HTML- oder JavaScript-Code ein.');
}

if (
    strlen($message) > 10000
) {
    respond(400, false, 'Bitte prüfen Sie Name, E-Mail-Adresse und Nachricht.');
}

$recipient = 'info@maikpankow.de';
$subject = 'Kontaktanfrage Portfolio';
$body = "Name: {$name}\nE-Mail: {$email}\n\nNachricht:\n{$message}";
$headers = "From: Portfolio Kontakt <info@maikpankow.de>\r\n"
    . "Reply-To: {$email}\r\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

if (!mail($recipient, $subject, $body, $headers)) {
    error_log('PHP mail() could not accept the portfolio contact message.');
    respond(500, false, 'Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut.');
}

respond(200, true, 'Vielen Dank! Ihre Nachricht wurde versendet.');
