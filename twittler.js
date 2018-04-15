$(document).ready(function(){
  displayTweets();

  function displayTweets(names){
    var $body = $('.feed');
    $body.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var $tweetUser = $('<h2 class="tweetUser">@' + tweet.user + ':</div>');
      $tweetUser.data('username',tweet.user);
      $tweetUser.appendTo($tweet);
      var $message = $('<p>' + tweet.message + '</p>');
      $message.appendTo($tweet);
      var $tweetTime = $('<h5>' + tweet.created_at + '</h5>');
      $tweetTime.appendTo($tweet);
      $tweet.appendTo($body);
      index -=1;
    }
    $('#update-btn').click(displayTweets);

    $('.tweetUser').click(function(event) {
      window.scrollTo(0,0);
      event.stopPropagation(); 
      var $thisTweet = $(event.target);
      var thisUser = $thisTweet.data('username');
      var userFeed = streams.users[thisUser];
      var index = userFeed.length - 1;
      $body.html('');
      while(index >= 0) {
        var tweet = userFeed[index];
        var $tweet = $('<div class="tweet"></div>');
        var $tweetUser = $('<h2 class="tweetUser">@' + tweet.user + ':</div>');
        $tweetUser.data('username', tweet.user);
        $tweetUser.appendTo($tweet);
        var $tweetMessage = $('<p>' + tweet.message + '</p>');
        $tweetMessage.appendTo($tweet);
        var $tweetTimestamp = $('<h5>' + tweet.created_at + '</h5>');
        $tweetTimestamp.appendTo($tweet);
        $tweet.appendTo($body);
        index -= 1;
      }
    });
  }
  //$('#update-btn').on('click',displayTweets)
}); 


