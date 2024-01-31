//Product list for the product page
let products = [];
console.log(localStorage.getItem('cart'));
//Retrieves Cart Data
const getCartFromMemory = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
};

//Updates cart data
const updateCartInMemory = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`CART UPDATED!!! CART HAS ${getCartFromMemory().length} items`) ;
    console.log(localStorage.getItem('cart'));
};



const addDataToHTML = () => {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = ''; // Clear existing content

    if (products.length > 0) {
        console.log("Working!");
        products.forEach(product => {
            let listItem = document.createElement('li');
            listItem.dataset.id = product.id;
            listItem.classList.add('product-item');

            listItem.innerHTML = 
            `<img src="${product.image}" alt="${product.name}">
             <p>${product.name}</p>
             <button class="addToCart" onclick="addToCartButton('${product.id}')">Add To Cart</button>`;

            productContainer.appendChild(listItem);
            console.log("Done!");
        });
    } else {
        let emptyMessage = document.createElement('div');
        emptyMessage.classList.add('empty-message');
        emptyMessage.textContent = `This section is empty! Add some items to the cart to fill this up!`;
        productContainer.appendChild(emptyMessage);
    }
};

//For experimental purposes. Clear the local array storage
const clearCart = () => {
  localStorage.removeItem('cart');
  alert('CART CLEARED!!!');
};

//Add To Cart Button
const addToCartButton = (productID) => {
    addToCart(productID);
};

//Adds item to array after button click
const addToCart = (productId) => {
    cart = getCartFromMemory();
    const addProduct = products.find(product => product.id === productId);
    
    if (!cart) {
        cart = []; // Initialize cart as an empty array if it's null
    }

    if (addProduct) {
        cart.push({
            id: addProduct.id,
            name: addProduct.name,
            price: addProduct.price,
            image: addProduct.image
        });
    }
    updateCartInMemory(cart);
};

//Calls the Add products to html function on page load
const initApp = async () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(
        function(e) {
            const node = document.createElement("li");
            const itemNode = document.createTextNode("id: " + e.id + " name: " + e.name);
            node.appendChild(itemNode);

            document.getElementById("productContainer").appendChild(node);
        }
    )

    /* correct way to fetch json file
    return fetch('/JS/products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        json.forEach(e => {
            const node = document.createElement("li");
            const itemNode = document.createTextNode("id: " + e.id + " name: " + e.name);
            node.appendChild(itemNode);

            document.getElementById("productContainer").appendChild(node);
        });
    })
    .catch(function () {
        this.dataError = true;
    })*/


};

initApp();
