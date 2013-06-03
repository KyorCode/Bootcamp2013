(function () {
    "use strict";

    function printToConsole(output) {
        console.log(output);
    }

    var variablesAndProperties = function () {
        var noGlobalAssignment = function () {
            foo = "bar"; // throws exception : not defined
        },
            extensibleObject = function () {

                var obj = {};
                obj.name = "QFrame";

                printToConsole(obj.name);
                // QFrame

                printToConsole(Object.isExtensible(obj));
                // true

                Object.preventExtensions(obj);

                obj.url = "http://www.qframe.be"; // throws exception : non extensible
            },
            multipleDefine = function () {
                //var obj = { foo: "bar", foo : "rab" }; // throws exception : duplicate declaration
            },
            propertyDescriptor = function () {
                var obj = {};

                Object.defineProperty(obj, "value", {
                    value: true,
                    writable: false,
                    enumerable: true,
                    configurable: true
                });

                (function () {
                    var name = "QFrame";

                    Object.defineProperty(obj, "name", {
                        get: function () { return name; },
                        set: function (value) { name = value; }
                    });
                })();

                printToConsole(obj.value);
                // true

                printToConsole(obj.name);
                // QFrame

                obj.name = "QFrame NV";

                printToConsole(obj.name);
                // QFrame NV

                for (var prop in obj)
                    printToConsole(prop);
                // value
                // name

                //obj.value = false; // throws exception : writalble : false

                Object.defineProperty(obj, "value",
                    {
                        writeable: true,
                        configurable: false
                    });

                obj.value = false;

                printToConsole(obj.value);
                // false

                delete obj.value; // throws exception : configurable : false
            };

        return {
            noGlobalAssignment: noGlobalAssignment,
            extensibleObject: extensibleObject,
            multipleDefine: multipleDefine,
            propertyDescriptor: propertyDescriptor
        };
    }();

    //variablesAndProperties.noGlobalAssignment();
    //variablesAndProperties.extensibleObject();
    //variablesAndProperties.multipleDefine();
    //variablesAndProperties.propertyDescriptor();

})();