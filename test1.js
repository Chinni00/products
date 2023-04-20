
function addProduct() {
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    axios.post('https://crudcrud.com/api/c7657e0764e649b8a0ad41bedca7f7bd/products', {
        price,
        description,
        category
    }).then(response => {
        // update UI
        const product = response.data;
        const block = document.getElementById(`${product.category}-block`);
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `${product.description} - ${product.price} <button onclick="deleteProduct('${product._id}')">Delete</button>`;
        block.appendChild(productDiv);
    }).catch(error => {
        console.log(error);
    });
}

function deleteProduct(productId) {
    axios.delete(`https://crudcrud.com/api/c7657e0764e649b8a0ad41bedca7f7bd/products/${productId}`).then(response => {
        // update UI
        const productDiv = document.getElementById(productId);
        productDiv.remove();
    }).catch(error => {
        console.log(error);
    });
}

function getProducts(){
  axios.get('https://crudcrud.com/api/c7657e0764e649b8a0ad41bedca7f7bd/products').then(response => {
    const products = response.data;
    products.forEach(product => {
        const block = document.getElementById(`${product.category}-block`);
        const productDiv = document.createElement("div");
        productDiv.id = product._id;
        productDiv.innerHTML = `${product.description} - ${product.price} <button onclick="deleteProduct('${product._id}')">Delete</button>`;
        block.appendChild(productDiv);
    });
}).catch(error => {
    console.log(error);
});
}
getProducts();
