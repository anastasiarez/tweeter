// function to track tweet char lengths

// $(document).ready(function() {
//   const MAX_LENGTH = 140;

//   $('.new-tweet textarea').keydown(function(e) {
//     let currentLength = $(this).val().length
//     console.log(currentLength)
//     $('.counter').text(MAX_LENGTH - currentLength);

//     if (currentLength > MAX_LENGTH) {
//       $('.counter').css('color', 'red');
//       $('#submit').attr('disabled', true);

//     } else {
//       $('.counter').text(MAX_LENGTH - currentLength);
//       $('.counter').css('color', 'black');
//       $('#submit').attr('disabled', false);
//     }
//   });
// });


$(document).ready(function() {
  const MAX_LENGTH = 10;
  
  $('.new-tweet textarea').keydown(function(e) {
    let currentLength = $(this).val().length + 1;
    console.log(currentLength);
    $('.counter').text(MAX_LENGTH - currentLength );

    if (currentLength > MAX_LENGTH) {
      $('.counter').css('color', 'red');
      $('#submit').prop('disabled', true);
    } else {
      $('.counter').css('color', 'black');
      $('#submit').prop('disabled', false);
    }
  });
});
