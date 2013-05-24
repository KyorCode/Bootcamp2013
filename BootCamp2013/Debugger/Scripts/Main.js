var main = function () {
    "use strict";
    var calculator = function () {

        var getValue = function (id) {
            return document.getElementById(id).value;
        },
            add = function (a, b) {
                var valueA = getValue(a);
                var valueB = getValue(b);
                debugger;
                return valueA + valueB;
            };

        return {
            add: add
        };
    }();

    return {
        calculator:calculator
    };
}();