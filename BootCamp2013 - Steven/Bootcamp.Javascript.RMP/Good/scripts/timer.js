var app = window.app || {};

app.timer = (function(window, pubsub) {
    var
        minutes = 0,
        seconds = 0,
        milliseconds = 0,
        interval = 25,
        timerId = -1,
        
        init = function() {
            pubsub.subscribe('timerStart', start);
            pubsub.subscribe('timerPause', pause);
            pubsub.subscribe('timerClear', clear);
            pubsub.subscribe('timerElapsed', elapsed);
            reportProgress();
            pubsub.publish('timerInitialized');
        },
        
        reportProgress = function() {
            pubsub.publish('timerReportProgress', {
                minutes: minutes,
                seconds: seconds,
                milliseconds: milliseconds
            });
        },
        
        start = function() {
            if (timerId === -1) {
                timerId = window.setInterval(function() { pubsub.publish('timerElapsed'); }, interval);
                pubsub.publish('timerStarted');
            }
        },
        
        elapsed = function() {
            milliseconds += interval;

            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds += 1;
            }

            if (seconds >= 60) {
                milliseconds = 0;
                seconds = 0;
                minutes += 1;
            }

            reportProgress();
        },
        
        pause = function() {
            window.clearInterval(timerId);
            timerId = -1;
            pubsub.publish('timerPaused');
        },
        
        clear = function() {
            pause();
            seconds = 0;
            minutes = 0;
            milliseconds = 0;
            reportProgress();
            pubsub.publish('timerCleared');
        };

    return {
        init: init
    };
}(window, app.pubsub));