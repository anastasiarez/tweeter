$(document).ready(function() {

  // Make a call to the server & show the tweets

  function fetchTweets() {
    $.ajax({
      url: "/tweets",
      method: 'get'
    }).done(data => {
      renderTweets(data);
    });
  }

  // Add a tweet to a container (empty the container from any previous information, create tweet using a function, and add it to a container)

  function renderTweets(tweets) {
    const $tweetsContainer = $('#tweets-container');
    $tweetsContainer.empty();
    tweets.forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet);
    });
  }

  function createTweetElement(tweet) {
    const { name, avatars, handle } = tweet.user;
    const { text } = tweet.content;
    const createdAt = new Date(tweet.created_at);

    const $tweet = `
    <article class="tweet">
     
        <header id="tweet-header">
          <img class="user-icon" src="${avatars}" alt="User Avatar">
          <h4>${name}</h4>
          <p class="handle">${handle}</p> 
        </header>

      <div class="tweet-content">
        <p>${escapeHTML(text)}</p>
      </div>
      <footer id="tweet-footer">
     <p class="timestamp" title="${createdAt.toISOString()}">${timeago.format(createdAt)}</p>
      <div class="icons">
      <i class="fas fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
      </div>
      </footer>
      </article>
    `;
    return $tweet;
  }

  // Function to send a tweet
  function sendTweet(event) {
    event.preventDefault();
    console.log('event.target', event.target);

    // Serialize the form data to send it to the server
    const formData = $(event.target).serialize();

    // Make an AJAX request to post the tweet data to the server
    $.ajax({
      url: "/tweets",
      method: 'post',
      data: formData
    }).done(function() {
      // Clear the tweet input field after successful submission
      // Reset tweet text area and character counter after successful submission

      $('#tweet-text').val('');
      $('.counter').text('140');

      // Fetch and update the tweets after the new tweet is posted
      fetchTweets();
    });
  }

  // Function to escape HTML characters to prevent XSS
  function escapeHTML(text) {
    const element = document.createElement('div');
    element.innerText = text;
    return element.innerHTML;
  }

  // Function to register the submit event for the tweet form
  function registerSubmit() {
    $('#form').submit(sendTweet);
  }

  // Call the functions to fetch tweets, register submit event, and apply timeago plugin
  fetchTweets();
  registerSubmit();

  $("p.timestamp").timeago();
});


