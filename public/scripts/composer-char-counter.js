$(function() {
  const maxLength = 140;
  const $newTweet = $('.new-tweet');
  const $counter = $newTweet.find('.counter');
  $newTweet.find('textarea').on('keyup', function() {
    const currentLength = $(this).val().length;
    if( currentLength <= maxLength ){
      $counter.text(`${maxLength - currentLength}`);
    }else if (currentLength > maxLength) {
      $counter.text(` ${-(currentLength - maxLength)}`).css('color', 'red');
    }
  });
});



