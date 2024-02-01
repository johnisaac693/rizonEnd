

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
            <p class="price">$${product.price}</p>`;
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
    } 
 }
