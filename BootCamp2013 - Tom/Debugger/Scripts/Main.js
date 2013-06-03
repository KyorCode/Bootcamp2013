var main = function () {
    "use strict";
    var calculator = function () {

        var getValue = function (id) {
            return document.getElementById(id).value;
        },
            add = function (a, b,output) {
                var valueA = getValue(a);
                var valueB = getValue(b);
                debugger;
                document.getElementById(output).innerText = parseInt(valueA) + parseInt(valueB);
            };

        return {
            add: add
        };
    }();

    return {
        calculator:calculator
    };
}();