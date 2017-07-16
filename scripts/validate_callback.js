$(document).ready(function(){
  $('.js-input-callback-button').click(function(){
      $name = $('.js-input-text-name').val();
      $prof = $('.js-input-text-prof').val();
      $callback = $('.js-input-text-callback').val();
      $nameDec = $('.js-input-text-name');
      $profDec = $('.js-input-text-prof');
      $callbackDec = $('.js-input-text-callback');

      $regexpText = /^[а-яА-ЯёЁa-zA-Z0-9.\s\S ]+$/;

      if($regexpText.test($callback)){
        $callbackDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $callbackDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
      }


      if($regexpText.test($prof)){
        $profDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $profDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
      }


      if($regexpText.test($name)){
        $nameDec.css({'border-color': '#332479', 'box-shadow': '0 0 6px #332479'});
      }
      else{
        $nameDec.css({'border-color': 'red', 'box-shadow': '0 0 6px red'});
      }
  });
});