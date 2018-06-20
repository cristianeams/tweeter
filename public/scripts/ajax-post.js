
// $(function() {
//     $("#newTweet-form").submit(function(event){
//         event.preventDefault();

//         let result = validateForm();//prevents page from refreshing

//         if(result){
//             let post_url = $(this).attr("action"); //get form action
//             let request_method = $(this).attr("method"); //get form method
//             let form_data = $(this).serialize(); //Encode form elements for submission

//             event.preventDefault();

//             $.ajax({
//                 url : post_url,
//                 type: request_method,
//                 data : form_data
//             })
//                 .done (function(result){
//                     console.log(result)
//                      $("#tweets-container").load(loadTweets());
//                      $('#newTweet-form').val('');

//             });
//         }
//     });// function onFormSubmit Ends here;

//     function validateForm(){
//         let validation = false;
//         let message = $('textarea').val();

//         if(message.length < 1){
//             $('textarea').after('<span class="error"> You message is empty!</span>');
//         } else if(message.length > 140){
//             $('textarea').after('<span class="error"> You message is too long!</span>');
//         } else {
//             validation = true;
//             return validation;
//         }
//     }
//    ///end of validateForm function

//     $( "button#compose" ).click(function() {
//         $( "section.new-tweet" ).slideToggle();
//         $('textarea').focus();
//     });

}); //document ready function