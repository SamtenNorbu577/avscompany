<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

mail("info@avscompany.ru", "Заявка с сайта", "ФИО: ".$name.". Телефон: ".$phone.". E-mail: ".$email, "From: site@avscompany.ru \r\n");
