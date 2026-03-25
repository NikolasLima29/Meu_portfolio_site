<?php
// Cria a conexão com o banco de dados
// $conn = new mysqli("localhost", "root", "", "FWS");

require_once __DIR__ . '/../config.php';
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);


// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Define o charset para UTF-8 (com suporte total a acentos e emojis)
$conn->set_charset("utf8mb4");
?>
