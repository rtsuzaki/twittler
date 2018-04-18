$(document).ready(function(){
  function updateTweets(){
	$('body').find('div').remove();
	var index = streams.home.length - 1;
	while(index >= 0){
	  var tweet = streams.home[index];
	  var $tweet = $('<div class=tweet-content></div>');
	  $tweet.text(tweet.message);
	  $tweet.appendTo('body');
	  var $userName = $('<div class=name></div>');
	  $userName.text('@'+tweet.user)
	  $userName.prependTo($('.tweet-content').last());
	  $('.tweet-content').last().addClass(tweet.user)
	  var $time = $('<div class=time-created></div>');
	  $time.text(tweet.created_at)
	  $time.appendTo($('.tweet-content').last());
	  index -= 1;
	}
  };

  //Load tweets when first visiting page
  updateTweets();

  //Update tweet feed when clicking update tweet button
  $('.update-btn').on('click',updateTweets);
  
  //Highlight username when mouse enters div (and unhighlights when it leaves)
  $('body').on('mouseenter','.name',function(){
  	$(this).toggleClass('highlighted')
  })

  $('body').on('mouseleave','.name',function(){
  	$(this).toggleClass('highlighted')
  })


  //Show only user's tweets when you click on username
  $('body').on('click','.name',function(){
  	var clickedName = $(this).parent().attr('class').split(' ')[1];
    $('body').find('div').hide();
    $('.' + clickedName).show();
    $('.'+ clickedName).children().show();
  });

});



