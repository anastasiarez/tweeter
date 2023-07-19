// function to track tweet char lengths

$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;
    console.log(currentLength);
    const remainingChars = maxLength - currentLength;
    
    $('.counter').text(remainingChars);
    
    if (remainingChars < 0) {
      $('.counter').addClass('counter-exceeded');
    } else {
      $('.counter').removeClass('counter-exceeded');
    }
  });
});
