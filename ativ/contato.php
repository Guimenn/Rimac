<?php
    // Verifica se o botão foi clicado
    if (isset($_POST['Continuar'])) {
        // Redireciona para outro arquivo HTML ou site
        header("Location: cont2.html");
        exit(); // Sempre use exit após o redirecionamento.
    }
    ?>