$(document).ready(function() {
  $('textarea').on('keyup', function() {
    let maxLength = 140;
    let currentLength = $(this).val().length;
    if( currentLength <= maxLength ){
      $(this).siblings('.counter').text(`${maxLength - currentLength}`);
      //console.log(maxLength - currentLength + " characters left");
    }else if (currentLength > maxLength){
      //console.log(- (currentLength - maxLength) );
      $(this).siblings('.counter').text(` ${-(currentLength - maxLength)}`).css('color', 'red');
    }
});

})
