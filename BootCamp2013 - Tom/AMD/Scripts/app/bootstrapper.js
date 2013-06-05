define('bootstrapper',
    ['logger'],
    function (logger) {
        var init = function () {
            logger.appendToLog("Bootstrapper loaded!");
        },
            run = function () {
                logger.appendToLog("This was appended from bootstrapper run function!");
            };

        init();

        return {
            run: run
        };
    });