// Load and display cart items
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        cartContainer.innerHTML = '';
        let totalPrice = 0;
  
        cart.forEach(productId => {
          const product = data.find(p => p.id == productId);
          if (product) {
            totalPrice += product.price;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button onclick="removeFromCart(${product.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
          }
        });
  
        const total = document.createElement('div');
        total.innerHTML = `<h3>Total: $${totalPrice}</h3>`;
        cartContainer.appendChild(total);
      })
      .catch(error => console.error('Error loading cart:', error));
  }
  
  // Remove item from cart
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id != productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
  
  // Redirect to checkout page
  document.getElementById('checkout-button').addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      window.location.href = 'checkout.html'; // Redirect to checkout page
    } else {
      alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
    }
  });

loadCart();
