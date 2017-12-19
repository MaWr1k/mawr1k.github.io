<?php


	$message = $_POST['message'];
	$to = 'mawr1k66@gmail.com'; 
    $subject = 'Обратный звонок';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
 	$headers .= "From: Отправитель <info@smtrest.ru>\r\n"; //Наименование и почта отправителя
 	$send = @mail($to, $subject, $message, $headers);

 	echo $send;