<?php
	session_start();
	include('bdd.php');
	ini_set('display_errors', 1);
	ini_set('error_reporting', E_ALL);

	if($_POST["stat"] == "win")
	{$reponse = $bdd->prepare('UPDATE goldmichlin SET sc=sc+1,cred=cred+5 WHERE name = :name');echo 't';}
	else
	{$reponse = $bdd->prepare('UPDATE goldmichlin SET cred=cred-1 WHERE name = :name');}

	$reponse->bindValue(':name', $_SESSION['troll'],PDO::PARAM_STR);
	$reponse->execute();
	$reponse->closeCursor();
	
	$reponse = $bdd->prepare('SELECT `cred` FROM `goldmichlin` WHERE `name` = :name');
	$reponse->bindValue(':name', $_SESSION['troll'],PDO::PARAM_STR);
	$reponse->execute();
	$donnees = $reponse->fetch();
	echo json_encode(["stat" => true,"cred" => $donnees['cred']]);
	$reponse->closeCursor();
?>