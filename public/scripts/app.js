$(function() {

  function renderTweets(tweets) {
    let $div = $("<div></div>");
    tweets.forEach(tweet => {
      let single = createTweetElement(tweet);
      $div = $div.append(single);
      return $div;
    });

  $('#tweets-container').append($div);
  }

  function createTweetElement(tweet) {
    let $tweet = $("<article>").addClass("tweet");
    let newHTML = `<header>
                   <div class="left-elm">
                   <img src=${tweet.user.avatars.small} alt="User Avatar"/>
                   <h2>${tweet.user.name}</h2>
                   </div>
                   <div class="right-elm">
                   <span class="handle">${tweet.user.handle}</span>
                   </div>
                   </header>

                   <p>${tweet.content.text}</p>

                   <footer class="date">${tweet.created_at}<span id="icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>
                   </footer>`;

    $tweet = $tweet.append(newHTML);
    return $tweet;
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });

  }

  loadTweets();

});
