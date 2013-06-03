var total = 0;

function addItemToCart() {
    total += 1;
}

function showNumberOfItemsInCart() {
    document.getElementById('shoppingCartTotal').value = total;
}