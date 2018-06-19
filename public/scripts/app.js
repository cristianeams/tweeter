const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
$(function() {

function createTweetElement() {
  let $tweet = $("<article>").addClass("tweet");
  let newHTML = `<header>
                 <img src=${tweetData.user.avatars.small} alt="User Avatar"/>
                 <h2>${tweetData.user.name}</h2>
                 <span class="handle">${tweetData.user.handle}</span>
                 </header>

                 <p>${tweetData.content.text}</p>

                 <footer class="date">${tweetData.created_at}<span id="icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>
                 </footer>`;
  console.log(newHTML);

  $tweet = $tweet.append(newHTML);
  return $tweet;
}

let $tweet = createTweetElement(tweetData);
  console.log($tweet);

// Test / driver code (temporary)
$('#tweets-container').append($tweet);

});