let products = [];
let listProductHTML = document.querySelector('.itemlist'); //selects the itemlist class

const initApp = () =>{
    // fetching data from json file and puts them into the list products
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        updateTotalPrice();
    })
}

//initApp is the GIVEN NAME for a function that activates when the app starts
initApp(); 

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
    let totalPrice = products.reduce((total, product) => total + product.price, 0);
    document.getElementById('price').innerHTML = `$${totalPrice.toFixed(2)}`;
    getNumberOfItems(); //CALLS THE getNumberOfItems function
}

//COUNTS THE ITEMS
const getNumberOfItems = () => {
    let productCount = products.length;
    document.getElementById('numberofitems').innerHTML = `${productCount}`;


}






//const because the formula never changes
const addDataToHTML= () => {
    if (products.length > 0) {
        products.forEach(product => {
            /*Creates a div class based based on the files from the json file
             */
            let newProduct = document.createElement('div');
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

    
}

