(function () {
    "use strict";

    function printToConsole(output) {
        console.log(output);
    }

    var functions = function () {
            var setArguments = function() {
                //arguments = [""]; // throws exception: can't assign value to arguments
            },
                //identicalArguments = function(par, par) { // throws exception: duplicate parameter names
                //},
                argumentsCalleeWrong = function() {
                    return function(n) {
                        if (n <= 1)
                            return 1;
                        return n * arguments.callee(n - 1);
                    };
                },
                argumentsCalleeRight = function() {
                    return function rec(n) {
                        if (n <= 1)
                            return 1;
                        return n * rec(n - 1);
                    };
                };

            return {
                setArguments: setArguments,
                //identicalArguments: identicalArguments,
                argumentsCalleeWrong: argumentsCalleeWrong,
                argumentsCalleeRight: argumentsCalleeRight
            };
        }();
    
    //functions.setArguments();
    //functions.identicalArguments("test1", "test2");
    //printToConsole(functions.argumentsCalleeWrong()(5)); // throws exception: callee may not be accessed for calls on them
    //printToConsole(functions.argumentsCalleeRight()(5));
    // 120
})();