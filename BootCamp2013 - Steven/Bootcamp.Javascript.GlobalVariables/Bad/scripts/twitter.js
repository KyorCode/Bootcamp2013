var total = 0;

function getTweets() {
    // Get tweets from twitter
    total = Math.floor((Math.random() * 100) + 1);
}

function showNumberOfTweetsRetrieved() {
    document.getElementById('numberOfTweetsRetrieved').value = total;
}

setInterval(function () {
    getTweets();
    showNumberOfTweetsRetrieved();
}, 3000);