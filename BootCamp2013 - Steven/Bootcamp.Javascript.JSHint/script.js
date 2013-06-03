var dummy = function() {
    x = 0;

    var increment = function() {
        if (x == 10) {
            x = 0;
        } else {
            x += 1;
        }
    };

    var getValue = function() {
        return x;
    };
    
    return
    {
        increment: increment,
        getValue: getValue
    };
};