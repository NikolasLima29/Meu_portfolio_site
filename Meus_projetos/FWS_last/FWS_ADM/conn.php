<?php
    $sql =  new mysqli("162.241.2.71", "quaiat07_fws", "JO@O_M@TH_1234", "quaiat07_fws");
    $sql->set_charset("utf8");

    if ($sql->connect_error) {
        // Erro na conexão — logar e mostrar mensagem genérica
        error_log("Erro na conexão com o banco: " . $sql->connect_error);
        header("Location: ../../index.html?status=erro&msg=Erro interno. Tente novamente.");
        exit;
    }

?>
