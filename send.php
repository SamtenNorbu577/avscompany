<?php
//TODO закончить валидацию имени
//if (filter_var($_POST['name'], FILTER_VALIDATE_REGEXP, array(
//      "options" => array("regexp"=>"/^[а-яА-ЯёЁa-zA-Z0-9]+$/")
//))) {
        $name = $_POST['name'];
//} else {
//      echo "Некорректное имя";
//}

if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $email = $_POST['email'];
} else {
        echo "Некорректный почтовый адрес!";
}


define("REGEXP_PHONE","/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/");
if (filter_var($_POST['phone'], FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>REGEXP_PHONE)))) {
        $phone = $_POST['phone'];
} else {
        echo "Некорректный номер телефона";
}


if (mail("shulepova_avs@mail.ru", "Заявка с сайта", "ФИО: ".$name.". Телефон: ".$phone.". E-mail: ".$email, "From: site@avscompany.ru \r\n")) {
        header('Refresh: 1; url=http://avscompany.ru');
        echo "Сообщение отправлено";
} else {
        header('Refresh: 1; url=http://avscompany.ru');
        echo "Отправка не удалась";
}