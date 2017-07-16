<?php
$name = $_POST['name'];
$prof = $_POST['prof'];
$callback = $_POST['callback'];


if (mail("shulepova_avs@mail.ru", "Отзыв с сайта", "ФИО: ".$name.". Профессия: ".$prof.". Отзыв: ".$callback, "From: site@avscompany.ru \r\n")) {
	header('Refresh: 1; url=http://avscompany.ru/company.html');
	echo "Сообщение отправлено";
} else {
	header('Refresh: 1; url=http://avscompany.ru/company.html');
	echo "Отправка не удалась";
}