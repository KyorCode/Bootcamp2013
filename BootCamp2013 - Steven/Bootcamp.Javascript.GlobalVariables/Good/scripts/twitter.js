var app = window.app || {};
var twitter = app.twitter || {};

twitter.total = 0;

twitter.getTweets = function() {
    // Get tweets from twitter
    twitter.total = Math.floor((Math.random() * 100) + 1);
};

twitter.showNumberOfTweetsRetrieved = function () {
    document.getElementById('numberOfTweetsRetrieved').value = twitter.total;
};

setInterval(function () {
    twitter.getTweets();
    twitter.showNumberOfTweetsRetrieved();
}, 3000);