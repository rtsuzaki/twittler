function displayTweets(){
  var $body = $('body');
  $('.tweet').remove();    //getting an error since only clearing the div but not the buttons
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class=tweet></div>');
    var button = document.createElement("button");
    button.className = 'tweet';
    button.innerHTML = '@' + tweet.user;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener ("click", function() {
      alert("did something");
      //displayUserTweets(tweet.user)
    });
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '--------' + tweet.created_at);
    $tweet.appendTo($body);
    index -= 1;
  }
}

// function displayUserTweets(userName){
//   var $body = $('body');
//   $('div').html('');
//   var index = streams.home.length - 1;
//   while(index >= 0){
//     if (streams.home[index].user === userName) {
//       var tweet = streams.home[index];
//       var $tweet = $('<div></div>');
//       var button = document.createElement("button");
//       button.innerHTML = '@' + tweet.user;
//       var body = document.getElementsByTagName("body")[0];
//       body.appendChild(button);
//       button.addEventListener ("click", function() {
//       alert("did something");
//       });
  
//       $tweet.text('@' + tweet.user + ': ' + tweet.message + '--------' + tweet.created_at);
//       $tweet.appendTo($body);
//       index -= 1;
//     }
//   }
// }


$(document).ready(function(){
  $('#update-btn').on('click',displayTweets);
});  


