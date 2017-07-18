<?php
$name = $_POST['name'];
$prof = $_POST['prof'];
$callback = $_POST['callback'];


mail("admin@avscompany.ru", "Отзыв с сайта", "ФИО: ".$name.". Профессия: ".$prof.". Отзыв: ".$callback, "From: site@avscompany.ru \r\n");