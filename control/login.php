<?php
	session_start(); 
	header('Content-Type: application/json');
	include('bdd.php');
	
	if(!empty($_POST['login']))
	{
		$utroll = htmlentities($_POST['login']);
		//$utroll = "tatou";
		
		$reponse = $bdd->prepare('SELECT * FROM `goldMichlin` WHERE `name` = :name');
		$reponse->bindValue(':name', $utroll,PDO::PARAM_STR);
		$reponse->execute();
		$donnees = $reponse->fetch();
		$reponse->closeCursor();
		if($donnees!=null)
		{
			echo json_encode(['connected' => 'true','uname' => $donnees['name'],'cred' => $donnees['cred']]);
			$_SESSION['troll'] = $utroll;
		}
		else 
		{
			$reponse = $bdd->prepare('INSERT INTO `goldmichlin`(`name`) VALUES (:name)');
			$reponse->bindValue(':name', $utroll,PDO::PARAM_STR);
			$reponse->execute();
			$reponse->closeCursor();
			echo json_encode(['connected' => 'true','uname' => $utroll,'cred' => "5" ]);
		}
	}
	else {echo json_encode(['connected' => 'false','msg' => 'no_username']);}
?>