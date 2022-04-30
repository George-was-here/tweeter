/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  const renderTweets = (tweets) => {
  //loop through each element of the tweets
  $('#tweets-container').empty();
    tweets.forEach(element => {
      $('#tweets-container').append(createTweetElement(element));
    });
    // loops through tweets loop through array
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  };



  const createTweetElement = function(tweetData) {
    const $tweet = $(`      
<article>
<section class="tweet">
<header>
  <div class=userinfo>
    <span class="userName"><img class="useravatar" src=${tweetData.user.avatars}>${tweetData.user.name}</span>
    <span class="handle">${tweetData.user.handle}</span>
  </div>
</header>
<p>${tweetData.content.text}</p>
<footer>
  <div class="bottomoftweet">
  <aside class="footericons">
  <i class="fa-solid fa-flag" id="actionicon" style="font-size:14px;"></i>
  <i class="fa-solid fa-retweet" id="actionicon" style="font-size:14px;"></i>
  <i class="fa-solid fa-heart" id="actionicon" style="font-size:14px;"></i>
  </aside>
  <span class="datecreated">${tweetData.created_at}</span>
  </div>
</footer>
</section>
</article>
`);
    return $tweet;
  };


  // Test / driver code (temporary). Eventually will get this from the server.
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
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);


  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});