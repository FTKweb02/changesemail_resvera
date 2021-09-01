<?php

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$whats = $_POST["whats"];
$llamada = $_POST["llamada"];
$horario = $_POST["horario"];
$headers = "From: Resvera" . "\r\n" .
    "CC: victorf9523@gmail.com";

$body =
    "Nombre: ".$nombre."
    Teléfono: ".$telefono."
    WhatsApp: ".$whats."
    Llamadas: ".$llamada."
    Horario: ".$horario;

    try {
        
        mail("victorf9523@gmail.com", "Reservación Resvera", $body, $headers);
    
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