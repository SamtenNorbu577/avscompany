$(document).ready(function(){
  $('.js-input-button').click(function(){
      $text = $('.js-input-text').val();
      $number = $('.js-input-number').val();
      $mail = $('.js-input-mail').val();
      $textDec = $('.js-input-text');
      $numberDec = $('.js-input-number');
      $mailDec = $('.js-input-mail');
      $error = $('.js-error-message-call');

      $regexpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      $regexpNumber = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      $regexpText = /^[а-яА-ЯёЁa-zA-Z0-9.\s\S ]+$/;

      if($regexpMail.test($mail)){
        $mailDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $mailDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }


      if($regexpNumber.test($number)){
        $numberDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $numberDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }


      if($regexpText.test($text)){
        $textDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $textDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }

      if($regexpText.test($text) && $regexpNumber.test($number) && $regexpMail.test($mail)){
        $("form").submit(function() { //устанавливаем событие отправки для формы
        $.ajax({
                type: "POST", //Метод отправки
                url: "send.php", //путь до php фаила отправителя
                data: "name="+$text+"&phone="+$number+"&email="+$mail,
                success: function() {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    alert("Ваш запрос успешно отправлен\n\rМы свяжемся с вами в ближайшее время");
                },
                error: function () {
                    //код в этом блоке выполняется при ошибке отправки сообщения
                    alert("Што-то пошло не так");
                }
            });
        return false;//Не отправлять submit формы
        });
      }
  });
});