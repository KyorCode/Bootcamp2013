var
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    interval = 25,
    timerId = -1;
        
function initTimer() {
    window.document.getElementById('startButton').addEventListener("click", startTimer, false);
    window.document.getElementById('pauseButton').addEventListener("click", pauseTimer, false);
    window.document.getElementById('clearButton').addEventListener("click", clearTimer, false);
    reportProgress();
    setTimerInitialized();
}

function setTimerInitialized() {
    window.document.getElementById('startButton').removeAttribute('disabled');
    window.document.getElementById('pauseButton').setAttribute('disabled', true);
    window.document.getElementById('clearButton').setAttribute('disabled', true);
}

function reportProgress() {
    window.document.getElementById('minutes').innerHTML = minutes;
    window.document.getElementById('seconds').innerHTML = seconds;
    window.document.getElementById('milliseconds').innerHTML = milliseconds;
}

function startTimer() {
    if (timerId === -1) {
        timerId = window.setInterval("elapsed()", interval);
        setTimerStarted();
    }
}

function setTimerStarted() {
    window.document.getElementById('startButton').setAttribute('disabled', true);
    window.document.getElementById('pauseButton').removeAttribute('disabled');
    window.document.getElementById('clearButton').removeAttribute('disabled');
}
        
function elapsed() {
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
}
        
function pauseTimer() {
    window.clearInterval(timerId);
    timerId = -1;
    setTimerPaused();
}

function setTimerPaused() {
    window.document.getElementById('startButton').removeAttribute('disabled');
    window.document.getElementById('pauseButton').setAttribute('disabled', true);
    window.document.getElementById('clearButton').removeAttribute('disabled');
}

function clearTimer() {
    pauseTimer();
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    reportProgress();
    setTimerCleared();
}

function setTimerCleared() {
    window.document.getElementById('startButton').removeAttribute('disabled');
    window.document.getElementById('pauseButton').setAttribute('disabled', true);
    window.document.getElementById('clearButton').setAttribute('disabled', true);
}