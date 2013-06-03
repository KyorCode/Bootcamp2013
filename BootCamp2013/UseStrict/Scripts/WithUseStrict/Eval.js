(function () {
    "use strict";

    function printToConsole(output) {
        console.log(output);
    }

    var evalExamples = function () {
        var useEval = function () {
            // Any use throws an exception!

            //var eval = {};

            //for (var eval in obj) {
            //}

            //function eval(){}

            //function test(eval){}

            //function(eval){}

            eval("var a = false;");
            printToConsole(typeof a);
            //undefined
        };

        return {
            useEval: useEval
        };
    }();

    evalExamples.useEval();
})();