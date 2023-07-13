// function to track tweet char lengths

$(document).ready(function() {
  $('.new-tweet textarea').keydown(function(e) {
    const maxLength = 140;
    let currentLength = $(this).val().length + 1;
    $('.counter').text(maxLength - currentLength);
    if (currentLength > maxLength) {
      console.log(e);
      $('.counter').css('color', 'red');
    } else {
      $('.counter').text(maxLength - currentLength);
      $('.counter').css('color', 'black');
    }
    console.log(maxLength - currentLength);
  });
});
