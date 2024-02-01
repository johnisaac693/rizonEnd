

let listProductHTML = document.querySelector('.itemlist'); //selects the itemlist class
let cartProducts = [ {
    "id": "NCKLC01",
    "name":"Mystic Moonstone Cascade Necklace",
    "type": "necklace",
    "price": 100,
    "image" : "/necklace/Mystic Moonstone Cascade Necklace.jpg"
  

},
{
    "id": "NCKLC02",
    "name":"Regal Orchid Pearl Strand",
    "type": "necklace",
    "price": 100,
    "image" : "/necklace/Regal Orchid Pearl Strand.jpg"
    
  
},
{
    "id": "NCKLC03",
    "name":"Sapphire Serenade Collar",
    "type": "necklace",
    "price": 100,
    "image" : "/necklace/Sapphire Serenade Collar.jpg"
    
},
{
    "id": "NCKLC04",
    "name":"Whispering Willow Pendant",
    "type": "necklace",
    "price": 100,
    "image" : "/necklace/Whispering Willow Pendant.jpg"
},

{
    "id": "BRCLTC01",
    "name":"Aurora Borealis Beaded Bracelet",
    "type": "bracelet",
    "price": 100,
    "image" : "/Bracelet/Aurora Borealis Beaded Bracelet.png" 
},
{
    "id": "BRCLTC02",
    "name":"Charm of Prosperity Chain",
    "type": "bracelet",
    "price": 100,
    "image" : "/Bracelet/Charm of Prosperity chain Bracelet.png" 
},
{
    "id": "BRCLTC03",
    "name":"Eternal Love Knot Cuff",
    "type": "bracelet",
    "price": 100,
    "image" : "/Bracelet/eternal love knot cuff.png" 
},
{
    "id": "BRCLTC04",
    "name":"Luminescent Sea Glass Bangle",
    "type": "bracelet",
    "price": 100,
    "image" : "/Bracelet/Luminescent Sea Glass Bangle.png" 
},

{
    "id": "EARNG01",
    "name":"Crimson Cascade Drop Earrings",
    "type": "earring",
    "price": 100,
    "image" : "/earring/Crimson Cascade Drop Earrings.png" 
},
{
    "id": "EARNG02",
    "name":"Golden Hour Hoop Earrings",
    "type": "earring",
    "price": 100,
    "image" : "/earring/Golden-Hour-Hoop-Earrings.png" 
},
{
    "id": "EARNG03",
    "name":"Opulent Orchid Chandelier Earrings",
    "type": "earring",
    "price": 100,
    "image" : "/earring/Opulent-Orchid-Chandelier-Earrings.png" 
},
{
    "id": "EARNG04",
    "name":"Starry Night Stud Earrings",
    "type": "earring",
    "price": 100,
    "image" : "/earring/Starry night Stud earrings.png" 
},

{
    "id": "RING01",
    "name":"Eternal Embrace Diamond Ring",
    "type": "earring",
    "price": 100,
    "image" : "/Ring/Eternal-Embrace-Diamond-Ring.png" 
},

{
    "id": "RING02",
    "name":"Mystic Topaz Halo Ring",
    "type": "earring",
    "price": 100,
    "image" : "/Ring/Mystic-Topaz-Halo-Ring.png" 
},
{
    "id": "RING03",
    "name":"Regal Sapphire Crown Ring",
    "type": "earring",
    "price": 100,
    "image" : "/Ring/regal Sapphire crown ring.png" 
},

{
    "id": "RING04",
    "name":"Whispering Wind Rose Gold Stack",
    "type": "earring",
    "price": 100,
    "image" : "/Ring/whispering wind rose gold stack.png" 
}];



//const because the formula never changes
const addDataToHTML= () => {
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




initApp = async () => {
    
        addDataToHTML(); // Call addDataToHTML after fetching the data
        updateTotalPrice();
        getNumberOfItems();
    
};

initApp();
//confirms purchase first before checkout
 function confirmPurchase() {
    console.log(cartProducts)
    if (confirm("Are you sure you want to proceed with your purchase? Double check your cart before proceeding with the transaction")) {
        cartProducts.length = 0;
        console.log(cartProducts)
        addDataToHTML();
    } 
 }
