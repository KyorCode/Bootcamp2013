var app = window.app || {};

app.pubsub = (function () {
    var 
        publish = function(message, data) {
            return publishCore(message, data, true);
        },   
        
        publishAsync = function(message, data) {
            return publishCore(message, data, false);
        },
        
        lastUid = -1,
        subscribe = function(message, func) {
            var token = (++lastUid).toString();
            if (!registry.hasOwnProperty(message)) {
                registry[message] = [];
            }
            
            registry[message].push({ token: token, func: func });

            return token;
        },
        
        unsubscribe = function(token) {
            for (var m in registry) {
                if (registry.hasOwnProperty(m)) {
                    for (var i = 0, j = registry[m].length; i < j; i++) {
                        if (registry[m][i].token === token) {
                            registry[m].splice(i, 1);
                            return token;
                        }
                    }
                }
            }
            return false;
        },
        
        registry = {},
        publishCore = function(message, data, sync) {
            // if there are no subscribers to this message, just return here
            if (!registry.hasOwnProperty(message)) {
                return false;
            }

            var deliverMessage = function() {
                var subscribers = registry[message];
                for (var i = 0, j = subscribers.length; i < j; i++) {
                    subscribers[i].func(data);
                }
            };

            if (sync === true) {
                deliverMessage();
            } else {
                setTimeout(deliverMessage, 0);
            }
            return true;
        };

    return {
        publish: publish,
        publishAsync: publishAsync,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
}());