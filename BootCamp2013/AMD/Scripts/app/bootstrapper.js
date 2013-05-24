define('bootstrapper',
    ['jquery', 'presenter'],
    function ($, presenter) {
        var init = function () {
            $('#log').append('<li>bootstrapper loaded!</li>');
        },
            run = function () {
                presenter.appendToLog("This was appended from bootstrapper");
            };

        init();

        return {
            run: run
        };
    });