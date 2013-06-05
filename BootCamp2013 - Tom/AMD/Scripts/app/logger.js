define('logger', ['jquery'], function ($) {
    var init = function () {
        appendToLog("Logger Loaded!");
    },

     appendToLog = function (text) {
         $('#log').append('<li>' + text + '</li>');
     };

    init();

    return {
        appendToLog: appendToLog
    };
});