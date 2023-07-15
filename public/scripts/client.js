/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweet) {
  const { name, avatars, handle } = tweet.user;
  const { text } = tweet.content;
  const createdAt = new Date(tweet.created_at);

  const $tweet = $(`
  <article class="tweet">
  <div>
      <header id="tweet-header">
      <img class="user-icon" srs="${avatars}" alt="User Avatar">
      <h4>${name}</h4>
  </div>
  <p>${handle}</p>
  </header>
  <div class="tweet-content">
  <p>${text}</p>
  </div>
  <footer>
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

const $tweet = createTweetElement(tweetData);

const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac"
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
};

console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 