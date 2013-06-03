(function () {

    var root = this;

    require.config({
        baseUrl: 'Scripts/app',
         urlArgs: "v=" +  (new Date()).getTime()
    });

    defineLibraries();
    debugger;
    boot();

    function defineLibraries() {
        define('jquery', [], function () { return root.jQuery; });
    };
    
    function boot() {
        require(['bootstrapper'], function(bs) {

            bs.run();
        });
    }

})();