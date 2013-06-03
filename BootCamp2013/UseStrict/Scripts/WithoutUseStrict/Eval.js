(function () {
    function printToConsole(output) {
        console.log(output);
    }

    var evalExamples = function () {
        var useEval = function () {
            // Any use throws an exception!

            var eval = {};

            for (var eval in obj) {
                printToConsole(eval);
            };

            function eval() {
            };

            function test(eval) {
                var foo = eval;
            };

            var f2 = function (eval) {
                var foo = eval;
            };

            eval("var a = false;");
            printToConsole(typeof a);
            // boolean
        };

        return {
            useEval: useEval
        };
    }();

    evalExamples.useEval();
})();