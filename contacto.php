<?php
$nombre = $_POST["first_name"];
$telefono = $_POST["telefono"];
$texto = $_POST["texto"];
$headers = "From: Resvera" . "\r\n" .
    "CC: victorf9523@gmail.com";
$body =
    "Nombre: ".$nombre."
    Teléfono: ".$telefono."
    Mensaje: ".$texto;

    try {
        
    mail("victorf9523@gmail.com", "Comentario Resvera", $body, $headers);

    echo '<script>
    alert("Los datos se enviaron correctamente");
    window.history.go(-1);
    </script>';
    
    } catch (Exception $e) {
        echo '<script>
        alert("Ocurrió un error al enviar los datos: ");
        window.history.go(-1);
        </script>';
    }

?> 