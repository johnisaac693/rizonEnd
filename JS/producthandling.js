//Product list for the product page
let products = [];

const getCartFromMemory = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
  };

let cartItem = getCartFromMemory() || [];




//Updates cart data
const updateCartInMemory = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
   
    console.log(localStorage.getItem('cart'));
};


//Ouputs the json files into the product container
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

//Clears the local array storage
const clearCart = () => {
    cartItem.length = 0;
  alert('CART CLEARED!!!');
  updateCartInMemory(cartItem);
};

//Add To Cart Button
function addToCartButton (productID)  {
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
    alert(`CART UPDATED!!! CART HAS ${getCartFromMemory().length} items`);
};

//Calls the Add products to html function on page load
const initApp = async () => {
    try {
        const response = await fetch('../JS/products.json');
        const data = await response.json();
        products = data;
        addDataToHTML(); // Call addDataToHTML after fetching the data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
initApp();
