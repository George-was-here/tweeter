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

  //Event handler for submit function
  $("#tweet-text").submit(function(event) {
    $('#errorContainer').slideUp();
    event.preventDefault();

    const text = String($(this).serialize()).replace("text=", "").replaceAll('%20', " ");

    // if text is not present
    if (text === '') {
      $('#errorContainer').slideDown();
      $("#errorText").text($("#errorText").text().replace("", "You cannot tweet nothingness, please enter a tweet!"));
      return;
    }

    if (text.length > 140) {
      $('#errorContainer').slideDown();
      $("#errorText").text($("#errorText").text().replace("", "Please edit tweet size below 140 characters."));
      return;
    }

    $.post('/tweets',{text}, () => {
      loadTweets();
      $("#textarea-tweet").val("");
      $("#textarea-tweet").trigger('input');
    });
  });

  const loadTweets = () => {
    $.get("/tweets", function(data) {
      renderTweets(data.reverse());
    });
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
  <span class="datecreated">${timeago.format(tweetData.created_at)}</span>
  </div>
</footer>
</section>
</article>
`);
    return $tweet;
  };

  loadTweets();

  

  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});