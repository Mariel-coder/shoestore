// Load and display cart items in the checkout page
function loadCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutContainer = document.getElementById('checkout-container');
  
    if (cart.length === 0) {
      checkoutContainer.innerHTML = '<p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>';
      return;
    }
  
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        checkoutContainer.innerHTML = '';
        let totalPrice = 0;
  
        cart.forEach(productId => {
          const product = data.find(p => p.id == productId);
          if (product) {
            totalPrice += product.price;
            const checkoutItem = document.createElement('div');
            checkoutItem.classList.add('checkout-item');
            checkoutItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
            `;
            checkoutContainer.appendChild(checkoutItem);
          }
        });
  
        const total = document.createElement('div');
        total.innerHTML = `<h3>Total: $${totalPrice}</h3>`;
        checkoutContainer.appendChild(total);
      })
      .catch(error => console.error('Error loading cart:', error));
}
  
// Handle Order Confirmation
document.getElementById('confirm-order').addEventListener('click', function() {
    // You can implement the order confirmation logic here (e.g., sending data to a server).
    alert('Order Confirmed! Thank you for shopping with us.');
    localStorage.removeItem('cart'); // Clear the cart after order confirmation
    window.location.href = 'index.html'; // Redirect to the homepage or any other page
});

loadCheckout();

  