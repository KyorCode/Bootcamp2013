var app = window.app || {};
var shoppingCart = app.shoppingCart || {};

shoppingCart.total = 0;

shoppingCart.addItemToCart = function() {
    // Get tweets from twitter
    shoppingCart.total += 1;
};

shoppingCart.showNumberOfItemsInCart = function() {
    document.getElementById('shoppingCartTotal').value = shoppingCart.total;
};