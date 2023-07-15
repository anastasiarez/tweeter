/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


function renderTweets(tweets) {
  const $tweetsContainer = $('#tweets-container');

  $tweetsContainer.empty();

  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  });
}


function createTweetElement(tweet) {
  const { name, avatars, handle } = tweet.user;
  const { text } = tweet.content;

  const $tweet = $(`
  <article class="tweet">
  <div>
  <header id="tweet-header">
  <img class="user-icon" src="${avatars}" alt="User Avatar">
  <h4>${name}</h4>
  </div>
  <p>${handle}</p>
  </header>
  <div class="tweet-content">
  <p>${text}</p>
  </div>
  <footer>
  const createdAt = new Date(tweet.created_at);
  <p>${timeago.format(createdAt)}</p>
  <div clas="icons">
  <i class="fas fa-comment"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
  </article>
  `);
  return $tweet;
}

renderTweets(data);