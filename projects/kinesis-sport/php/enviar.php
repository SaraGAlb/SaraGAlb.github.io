<?php
$nombre;
$email;
$mensaje;

if($_POST){
    $nombre=$_POST['nombre'];
    $email=$_POST['email'];
    $mensaje=$_POST['mensaje'];
}

//construir mensaje
$destinatario="sara.94.coslada@digitechfp.com";
$asunto="Formulario Web";
$cuerpo= "Nombre: " .$nombre. "\n";
$cuerpo.= "Email: " .$email. "\n";
$cuerpo.= "Mensaje: " $mensaje. "\n";

//para enviar
mail($destinatario,$asunto,$utf8-decode($cuerpo));
echo("Formulario enviado con exito");

?>