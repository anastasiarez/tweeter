$(document).ready(function() {

  // 1 - make a call to the server & show the tweets

  function fetchTweets() {
    $.ajax({
      url: "/tweets",
      method: 'get'
    }).done(data => {
      renderTweets(data);
    });
  }

  // 2 - Add a tweet to a container (empty the container from any previous information, create tweet using a function, and add it to a container)

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
      <div>
        <header id="tweet-header">
          <img class="user-icon" src="${avatars}" alt="User Avatar">
          <h4>${name}</h4>
          </div>
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

  function sendTweet(event) {
    event.preventDefault();
    console.log('event.target', event.target);

    const formData = $(event.target).serialize();

    $.ajax({
      url: "/tweets",
      method: 'post',
      data: formData
    }).done(function() {
      $('#tweet-text').val('')
      fetchTweets();
    })
  }
  function escapeHTML(text) {
    const element = document.createElement('div');
    element.innerText = text;
    return element.innerHTML;
  }
  function registerSubmit() {
    $('#form').submit(sendTweet);
  }

  // Call the functions to fetch tweets, register submit event, and apply timeago plugin

  fetchTweets();
  registerSubmit();

  $("p.timestamp").timeago();
});


