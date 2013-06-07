var intervalId;

$(document).ready(function(){
  showTweets();

});

var showTweets = function(username) {
  //set intervals for tweets by username, if no username show all
  if (intervalId !== undefined) {
    window.clearInterval(intervalId);
    //console.log('stop interval ' + intervalId);
  }
  if (username === undefined) {
    intervalId = setInterval(showAllTweets, 5000);// console.log('interval set to ' + intervalId);
    showAllTweets();// console.log('non int');
  }
  else {
    intervalId = setInterval(showUserTweets(username), 5000);//  console.log('interval set to ' + intervalId);
    window.setTimeout(showUserTweets(username), 100);// console.log('non int');
  }
  //console.log('start interval ' + intervalId);
  window.intervalId;
};

var showAllTweets = function() {
  //console.log('all');
  $('.tweet').remove();
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"></div>');
    $tweet.html('<div class="user"><a href="#" data-user="' + tweet.user + '">@' + tweet.user + ':</a></div> <div class="message">' + tweet.message + '</div> <div class="sent">sent ' + moment(tweet.created_on).fromNow() +'</div>' );
    $tweet.appendTo($('#tweets'));
    index -= 1;
    // show only 20 most recent tweets
    var count = $('.tweet').length;
    if (count > 20) { $('.tweet:gt(19)').remove();}
  }
};

var showUserTweets = function(username) {
  return function() {
    //console.log(username);
    $('.tweet').remove();
    var index = streams.users[username].length - 1;
    while(index >= 0){
      var tweet = streams.users[username][index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.html('<div class="user"><a href="#" data-user="' + tweet.user + '">@' + tweet.user + ':</a></div> <div class="message">' + tweet.message + '</div> <div class="sent">sent ' + moment(tweet.created_on).fromNow() +'</div>' );
      $tweet.appendTo($('#tweets'));
      index -= 1;
    }
    // show only 20 most recent tweets
    var count = $('.tweet').length;
    if (count > 20) { $('.tweet:gt(19)').remove();}
  };
};