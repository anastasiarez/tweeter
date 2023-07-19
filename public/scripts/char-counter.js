// function to track tweet char lengths

$(document).ready(function() {
  function showError(message) {
    $('#error-messages').text(message).slideDown();
  }

  function hideError() {
    $('#error-messages').slideUp();
  }

  $('.new-tweet textarea').on('input', function() {
    const MAX_LENGTH = 140;
    const currentLength = $(this).val().length;
    const remainingChars = MAX_LENGTH - currentLength;

    // Update the character counter
    $('.counter').text(remainingChars);

    // Check if textarea is empty or character limit is exceeded
    if (currentLength === 0 || remainingChars < 0) {

      if (currentLength > 140) {
        showError('This message is exceeding the maximum length of 140 characters. Please try again.');
      }

      // Disable the button
      $('#submit').attr('disabled', true);
    } else {
      // Enable the button
      $('#submit').attr('disabled', false);
      hideError()
    }

    // Toggle the 'counter-exceeded' class based on the character limit
    $('.counter').toggleClass('counter-exceeded', remainingChars < 0);
  });
});

