<?php

	$email = trim($_POST['email']);
//	$phone = trim($_POST['phone']);
	$name = trim($_POST['name']);
	$dt = date('Y-m-d H:i:s');

	if($email == ''  || $name ==''){
		echo 'заполните все поля';
	}

	elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo "Введите почту";
	}

	else{
		file_put_contents('apps.txt', "$dt $email $name \n" , FILE_APPEND);
		echo 1;
	}