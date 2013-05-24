define('presenter', ['jquery'], function ($) {
    var init = function() {
        $('#log').append('<li>presenter loaded!</li>');
    },
        appendToLog = function (text) {
        $('#log').append('<li>' + text + '</li>');
        };

    init();

    return {
        appendToLog: appendToLog
    };
});