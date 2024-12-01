// Fetch products from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <a href="product.html?id=${product.id}">View Details</a>
      `;
      productList.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error loading products:', error));

// Add product to cart
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
