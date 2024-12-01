// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch and display product details
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const product = data.find(p => p.id == productId);
    const productDetails = document.getElementById('product-details');
    if (product) {
      productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <h2>$${product.price}</h2>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    } else {
      productDetails.innerHTML = '<p>Product not found!</p>';
    }
  })
  .catch(error => console.error('Error loading product details:', error));
