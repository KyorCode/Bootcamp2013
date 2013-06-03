(function () {
    "use strict";

    var withExample = function () {
            var usage = function() {
                var obj = {};

                //with ({ o: obj }) { // throws exception: strict mode code may not include a with statement
                //    o.name = "QFrame";
                //    o.url = "http://www.qframe.be";
                //};
               
            };

            return {
                usage : usage
            };
        }();

    withExample.usage();
})();