function displayTweets(){
  var $body = $('body');
  $('div').html('');
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '--------' + tweet.created_at);
    $tweet.appendTo($body);
    index -= 1;
  }
}


$(document).ready(function(){
  $('#update-btn').on('click',displayTweets);
});  


  