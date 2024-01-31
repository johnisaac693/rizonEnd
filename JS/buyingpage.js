

let listProductHTML = document.querySelector('.itemlist'); //selects the itemlist class
var localCart = localStorage.getItem('cart');
console.log(localCart);
var cartProducts = JSON.parse(localCart);
console.log(cartProducts);


//const because the formula never changes
const addDataToHTML= () => {
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
    

function openSideBar(){
    var showsidebar = document.getElementById("sidebar");
    

if (showsidebar.style.display === "none") 
{
showsidebar.style.display = "flex";
document.getElementById("sidebarlogo").innerHTML = "✖";


} else 

{
showsidebar.style.display = "none";
document.getElementById("sidebarlogo").innerHTML = "☰";
}

}

/*Today I learned, functions do not activate automatically
You want this function to activate automatically? Put it in the initapp function! */
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

addDataToHTML();

    
}
//confirms purchase first before checkout
 function confirmPurchase() {
    if (confirm("Are you sure you want to proceed with your purchase? Double check your cart before proceeding with the transaction")) {
        
    } 
 }
