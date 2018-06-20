
$(function() {
    $("#newTweet-form").submit(function(event){
        event.preventDefault(); //prevents page from refreshing
        let post_url = $(this).attr("action"); //get form action
        let request_method = $(this).attr("method"); //get form method
        let form_data = $(this).serialize(); //Encode form elements for submission

        $.ajax({
            url : post_url,
            type: request_method,
            data : form_data
        }).done(function(response){ //
            $("tweets-container").html(response);
        });
    });
});