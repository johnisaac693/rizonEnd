let products = [];

const addDataToHTML = () => {
    if (products.length > 0) {
        console.log("Working!");
        products.forEach(product => {
            let listItem = document.createElement('li');
            listItem.dataset.id = product.id;
            listItem.classList.add('product-item');

            listItem.innerHTML = 
            `<img src="${product.image}" alt="${product.name}">
             <p>${product.name}</p>`;

            document.querySelector('.product-container').appendChild(listItem);
            console.log("Done!");
            

        });
    }
};


const initApp = () =>{
    // fetching data from json file and puts them into the list products
    fetch('../JS/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })
}
initApp();
