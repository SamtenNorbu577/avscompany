$(document).ready(function(){
  $('.js-input-callback-button').click(function(){
      $name = $('.js-input-text-name').val();
      $prof = $('.js-input-text-prof').val();
      $callback = $('.js-input-text-callback').val();
      $nameDec = $('.js-input-text-name');
      $profDec = $('.js-input-text-prof');
      $callbackDec = $('.js-input-text-callback');
      $error = $('.js-error-message');

      $regexpText = /^[а-яА-ЯёЁa-zA-Z0-9.\s\S ]+$/;

      if($regexpText.test($callback)){
        $callbackDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $callbackDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }


      if($regexpText.test($prof)){
        $profDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $profDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }


      if($regexpText.test($name)){
        $nameDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $nameDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
        $error.css({'display': 'block'}).delay(4000).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
      }
      if($regexpText.test($name) && $regexpText.test($prof) && $regexpText.test($callback)){
          $("form").submit(function() { //устанавливаем событие отправки для формы
              $.ajax({
                  type: "POST", //Метод отправки
                  url: "send_review.php", //путь до php фаила отправителя
                  data: "name="+$name+"&prof="+$prof+"&callback="+$callback,
                  success: function() {
                      //код в этом блоке выполняется при успешной отправке сообщения
                      alert("Ваш отзыв успешно отправлен");
                  },
                  error: function () {
                      //код в этом блоке выполняется при ошибке отправки сообщения
                      alert("Што-то пошло не так\n\rОтправка не удалась");
                  }
              });
              return false;//Не отправлять submit формы
          });
      }
  });
});