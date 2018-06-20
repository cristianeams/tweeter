$(function() {

  function renderTweets(tweets) {

    let $div = $("<div></div>");
    tweets.forEach(tweet => {
      let $single = createTweetElement(tweet);
      $div = $div.prepend($single);
      return $div;
    });
  $('#tweets-container').html($div);
  } // end of renderTweets function

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
  } //end of createTweetElement function

  function loadTweets() {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: renderTweets
      });
  } // end of loadTweets function
  loadTweets();

  $("#newTweet-form").submit(function(event){
    event.preventDefault();
    let result = validateForm();

    if(result){
      let post_url = $(this).attr("action"); //get form action
      let request_method = $(this).attr("method"); //get form method
      let form_data = $(this).serialize(); //Encode form elements for submission

      event.preventDefault();

      $.ajax({
        url : post_url,
        type: request_method,
        data : form_data
        })
        .done (function(result){
            $("#tweets-container").load(loadTweets());
            $('#newTweet-form').val('');
        });
    }
  });// end of onFormSubmit function

  function validateForm(){
    let validation = false;
    let message = $('textarea').val();

    if(message.length < 1){
      $('textarea').after('<span class="error"> You message is empty!</span>');
      } else if(message.length > 140){
      $('textarea').after('<span class="error"> You message is too long!</span>');
      } else {
        validation = true;
        return validation;
      }
    }
   ///end of validateForm function

  $( "button#compose" ).click(function() {
    $( "section.new-tweet" ).slideToggle();
    $('textarea').focus();
  });

});
