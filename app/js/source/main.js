(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#startGame').click(startGame);
    $('.card').click(checkCard);
  }

  var octo = [];
  var octoten = [];
  var octotwenty =[];

  function startGame(){
    pickTheOctos();
    shuffle(octo);
    pickTen();
    duplicateoctos();
    shuffle(octotwenty);
    showCards();
  }

  function pickTheOctos(){
    for (var i = 0 ; i < 113; i++){
      octo.push(i+1);
    }
    console.log(octo);
  }

  // Fisher-Yates shuffle
  // bost.ocks.org/mike/shuffle
  // renamed elements but same
  function shuffle(array) {
    var alpha = array.length, beta, omega;
    while (alpha) {
      omega = Math.floor(Math.random() * alpha--);
      beta = array[alpha];
      array[alpha] = array[omega];
      array[omega] = beta;
    }
    return array;
  }

  function pickTen(){
    octoten = octo.slice(0,10);
  }

  function duplicateoctos(){
    octotwenty = octoten.concat(octoten);
  }

  function showCards() {
    $('.card .back_white').each(function(i) {
      $(this)
    //    .removeClass('back_white')
        .addClass('cat_' + octotwenty[i]);
    //.hide(4000);
    }); // end loop
  } // end function showCard

  function checkCard(){
    $(this).css('display','block');
  }


})();
