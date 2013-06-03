(function () {
    function printToConsole(output) {
        console.log(output);
    }

    var functions = function () {
            var setArguments = function () {
                arguments = [""];
                printToConsole(arguments);
                // [""]
            },
                identicalArguments = function (par, par) {
                    printToConsole(par);
                    // test2
                },
                argumentsCallee = function () {
                    return function (n) {
                        if (n <= 1)
                            return 1;
                        return n * arguments.callee(n - 1);
                    };
                };

            return {
                setArguments: setArguments,
                identicalArguments: identicalArguments,
                argumentsCallee: argumentsCallee
            };
        }();

    //functions.setArguments();
    //functions.identicalArguments("test1", "test2");
    // test2
    //functions.argumentsCallee()(5);
    // 120
})();