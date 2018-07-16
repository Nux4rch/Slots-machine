<?php
	session_start();
	include('bdd.php');
	ini_set('display_errors', 1);
	ini_set('error_reporting', E_ALL);
	
	$reponse = $bdd->prepare('SELECT * FROM goldmichlin ORDER BY sc DESC limit 0,5');
	$reponse->execute();
	$i = 0;
	while ($donnees = $reponse->fetch()) 
	{
		$arr = array('stat' => "ok","u" => $donnees['name'],"sc" => $donnees['sc']);
		$arrt[$i] = $arr;
		$i++;
	}
	if(!isset($arrt))
	{$arrt = array('stat' => "end");}
	
	echo json_encode($arrt);
	$reponse->closeCursor();
?>