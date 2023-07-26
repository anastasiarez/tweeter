
function showError(message) {
  $('#error-messages').text(message).slideDown();
  $('#submit').attr('disabled', true);
  // Disable the submit button when error message is shown
}

function hideError() {
  $('#error-messages').slideUp();
  $('#submit').attr('disabled', false);
  // Enable the submit button when error message is hidden
}

function tweetTextValidation() {
  const tweetText = $('#tweet-text').val();
  const MAX_LENGTH = 140;
  const remainingChars = MAX_LENGTH - tweetText.length;

  // Update the character counter
  $('.counter').text(remainingChars);

  // Check if textarea is empty or character limit is exceeded
  if (remainingChars < 0) {
    showError('This message is exceeding the maximum length of 140 characters. Please try again.');
  } else {
    hideError();
  }

  // Toggle the 'counter-exceeded' class based on the character limit
  $('.counter').toggleClass('counter-exceeded', remainingChars < 0);
}

$(document).ready(function() {
  // Disable the submit button when the page is loaded
  $('#submit').attr('disabled', true);

  // Attach the input event listener to the textarea
  $('.new-tweet textarea').on('input', function() {
    tweetTextValidation();
  });

  // Attach the submit event listener to the form
  $('#form').submit(function(event) {
    const tweetText = $('#tweet-text').val().trim();
    if (tweetText === '') {
      showError('Your tweet is empty. Please add a message');
    }
  });
});

// Initial call to update the tweet button state
tweetTextValidation();

