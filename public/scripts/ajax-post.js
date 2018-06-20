
$(function() {
    $("#newTweet-form").submit(function(event){
        event.preventDefault();

        var result = validateForm();//prevents page from refreshing
        if(result){
            let post_url = $(this).attr("action"); //get form action
            let request_method = $(this).attr("method"); //get form method
            let form_data = $(this).serialize(); //Encode form elements for submission

            event.preventDefault();
            console.log(post_url, request_method);
            console.log(form_data);
            $.ajax({
                url : post_url,
                type: request_method,
                data : form_data,
                success: function(result){
                    $("tweets-container").html(result);
                },
                error: function(error){
                    console.log("Error: ", error);
                }
            });
        }
    });// function onFormSubmit Ends here;

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

}); //document ready function