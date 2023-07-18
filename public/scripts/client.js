/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  function getHourDiff(start, end) {
    return Math.floor((end - start) / 3600000)
  }
  


// 1 - make a call to the server & show the tweets

function fetchTweets() {
  // get all tweets from the server
  $.ajax({
    url: "/tweets",
    method: 'get'
  }).done(data => {
    // data is all tweets
    console.log('TWEETS:', data)
    renderTweets(data)
  })
}

// 2, call function above
fetchTweets()


function renderTweets(tweets) {
  const $tweetsContainer = $('#tweets-container'); // The $ prefix is often used to indicate that the variable holds a jQuery object.

  $tweetsContainer.empty();

  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  });
}



function createTweetElement(tweet) {
  const { name, avatars, handle } = tweet.user;
  const { text } = tweet.content;
  const createdAt = new Date(tweet.created_at).getSeconds()
  const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });


const timeEnd   = new Date().getSeconds()
const hourDiff  = getHourDiff(timeEnd, createdAt)

  const $tweet = `
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
  
  <p>${rtf1.format(hourDiff, 'hours')}</p>
  <div clas="icons">
  <i class="fas fa-comment"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
  </article>
  `

  return $tweet;
}


function registerSubmit() {

  function sendTweet(event) {
    event.preventDefault()
    console.log('event.target', event.target)
    const tweetText = event.target['tweet-text'].value
  
    const dataToSend = {
      user: {
        name: "Anastasia",
        handle: "@ananas",
        avatars: "/images/profile-hex.png"
      },
      text: tweetText
    }
  
    $.ajax({
      url: "/tweets",
      method: 'post',
      data: dataToSend
    }).done(function() {
      fetchTweets()
    });
  }


  $('#form').submit(sendTweet)
}


registerSubmit()

