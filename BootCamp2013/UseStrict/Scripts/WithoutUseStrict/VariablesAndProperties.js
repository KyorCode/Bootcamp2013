(function () {
    function printToConsole(output) {
        console.log(output);
    }

    var variablesAndProperties = function () {
        var noGlobalAssignment = function () {
            foo = "bar"; // no exception: property on global window.foo
            printToConsole(window.foo);
        },
            extensibleObject = function () {

                var obj = {};
                obj.name = "QFrame";

                printToConsole(obj.name);
                // QFrame

                printToConsole(Object.isExtensible(obj));
                // true

                Object.preventExtensions(obj);

                obj.url = "http://www.qframe.be"; // no exception

                printToConsole(obj.url);
                // undefined

                printToConsole(Object.isExtensible(obj));
                // false
            },
            multipleDefine = function () {
                var obj = { foo: "bar", foo: "rab" }; // no exception, binds last declaration of variable
                printToConsole(obj);
                // Object { foo : "rab" }
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

                obj.value = false; // no exception

                printToConsole(obj.value);
                // true

                Object.defineProperty(obj, "value",
                    {
                        writeable: true,
                        configurable: false
                    });

                obj.value = false;

                printToConsole(obj.value);
                // false

                delete obj.value; // no exception
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