var app = window.app || {};

app.timerUI = (function (window, pubsub) {
    var
        init = function () {
            var startButton = window.document.getElementById('startButton');
            var pauseButton = window.document.getElementById('pauseButton');
            var clearButton = window.document.getElementById('clearButton');
        
            startButton.addEventListener('click', function() { pubsub.publish('timerStart'); }, false);
            pauseButton.addEventListener('click', function() { pubsub.publish('timerPause'); }, false);
            clearButton.addEventListener('click', function() { pubsub.publish('timerClear'); }, false);

            pubsub.subscribe('timerInitialized', function() {
                startButton.removeAttribute('disabled');
                pauseButton.setAttribute('disabled', true);
                clearButton.setAttribute('disabled', true);
            });

            pubsub.subscribe('timerStarted', function() {
                startButton.setAttribute('disabled', true);
                pauseButton.removeAttribute('disabled');
                clearButton.removeAttribute('disabled');
            });

            pubsub.subscribe('timerPaused', function() {
                startButton.removeAttribute('disabled');
                pauseButton.setAttribute('disabled', true);
                clearButton.removeAttribute('disabled');
            });

            pubsub.subscribe('timerCleared', function() {
                startButton.removeAttribute('disabled');
                pauseButton.setAttribute('disabled', true);
                clearButton.setAttribute('disabled', true);
            });

            pubsub.subscribe('timerReportProgress', function(data) {
                window.document.getElementById('minutes').innerHTML = data.minutes;
                window.document.getElementById('seconds').innerHTML = data.seconds;
                window.document.getElementById('milliseconds').innerHTML = data.milliseconds;
            });
        };
    
    return {
        init: init
    };
}(window, app.pubsub));