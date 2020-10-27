<?php
var_dump($_POST['name']);
if (isset($_POST['name']) & isset($_POST['email']) & isset($_POST['subject']) & isset($_POST['msg'])) {
	var_dump('test');
	$nom=$_POST['name'];
	$email=$_POST['email'];
	$sujet=$_POST['subject'];
	$message=$_POST['msg'];
		
	
    $totalMessage="Nom: ".$nom."\n"."Email: ".$email."\n"."Sujet: ".$sujet."\n"."Message: ".$message;
    echo $totalMessage;             
    $result = mail("thibault.camuset@gmail.com", "Vous avez reçu un message venant de votre Portfolio!", $totalMessage);
	echo "mail envoyé ".$result;
    return (true);
}

?>