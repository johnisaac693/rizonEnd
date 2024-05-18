

let listProductHTML = document.querySelector('.itemlist'); //selects the itemlist class

let cartProducts = cartItem;


//const because the formula never changes
const putDataToHTML= () => {
    listProductHTML.innerHTML = '';
    if (cartProducts.length > 0) {
        cartProducts.forEach(product => {
            /*Creates a div class based based on the files from the json file
             */
            let newProduct = document.createElement('li');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = //here comes the literal that does the html magic
            ` <img src="${product.image}" alt="" class="itemimage">
            <div class = "productname"><h2>${product.name}</h2></div>
            <p class="quantity">${product.id}</p>
            <p class="price">$${product.price}</p>
            <button class = "removeFromCart" onclick = "removeFromCartButton('${product.id}')">Remove</button>`;
            listProductHTML.appendChild(newProduct); //Adds the generated div class inside the itemlist class
        });
    }
    else
    {
        let emptyMessage = document.createElement('div');
        emptyMessage.classList.add('empty-message');
        emptyMessage.textContent = `This section is empty! 
        Add some items to cart to fill this up!`;
        listProductHTML.appendChild(emptyMessage);
    }
    
    
}



const updateTotalPrice = () => {
    let totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);
    document.getElementById('price').innerHTML = `$${totalPrice.toFixed(2)}`;
    getNumberOfItems(); //CALLS THE getNumberOfItems function
}

//COUNTS THE ITEMS
const getNumberOfItems = () => {
    let productCount = cartProducts.length;
    document.getElementById('numberofitems').innerHTML = `${productCount}`;


}


//Remove From Cart Button
function removeFromCartButton(productId) {
    removeFromCart(productId);
}

//Removes item from array after button click
const removeFromCart = (productId) => {
    cartItem = getCartFromMemory();
    
    // Find the index of the item with the matching productId in the cart
    const index = cartItem.findIndex(item => item.id === productId);

    if (index !== -1) {
        // Remove the item at the found index
        cartItem.splice(index, 1);
        updateCartInMemory(cartItem); // Update the cart in memory
        cartProducts = cartItem;
    } else {
        alert('Item not found in the cart!');
    }

    putDataToHTML(); // Update the displayed cart contents
    updateTotalPrice(); // Update the total price displayed
    getNumberOfItems(); // Update the number of items displayed
};





const runOnStart = async () => {
    
        putDataToHTML(); // Call addDataToHTML after fetching the data
        updateTotalPrice();
        getNumberOfItems();
    
};

runOnStart();

//confirms purchase first before checkout
 function confirmPurchase() {
    console.log(cartProducts)
    if (confirm("Are you sure you want to proceed with your purchase? Double check your cart before proceeding with the transaction")) {
        clearCart();
        putDataToHTML();
        updateTotalPrice();
    } 
 }
