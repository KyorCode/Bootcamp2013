(function () {
    function printToConsole(output) {
        console.log(output);
    }

    var withExample = function () {
            var usage = function() {
                var obj = {};

                with ({ o: obj }) {
                    o.name = "QFrame";
                    o.url = "http://www.qframe.be";
                };
                
                printToConsole(obj);
            };

            return {
                usage : usage
            };
        }();

    //withExample.usage();
})();