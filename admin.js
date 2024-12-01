// Load admin product list
function loadAdminProducts() {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const adminContainer = document.getElementById('admin-container');
        adminContainer.innerHTML = `
          <button onclick="showAddProductForm()">Add Product</button>
          <div id="product-table"></div>
          <div id="product-form-container" style="display: none;">
            <h3>Add/Edit Product</h3>
            <form id="product-form">
              <label>Name: <input type="text" id="product-name"></label>
              <label>Price: <input type="number" id="product-price"></label>
              <label>Image URL: <input type="text" id="product-image"></label>
              <label>Description: <textarea id="product-description"></textarea></label>
              <button type="submit">Save</button>
            </form>
          </div>
        `;
        displayProductTable(data);
      })
      .catch(error => console.error('Error loading products:', error));
  }
  
  // Display products in admin table
  function displayProductTable(products) {
    const productTable = document.getElementById('product-table');
    productTable.innerHTML = '<table><thead><tr><th>Name</th><th>Price</th><th>Actions</th></tr></thead><tbody></tbody></table>';
    const tbody = productTable.querySelector('tbody');
  
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>
          <button onclick="editProduct(${product.id})">Edit</button>
          <button onclick="deleteProduct(${product.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Show add product form
  function showAddProductForm() {
    document.getElementById('product-form-container').style.display = 'block';
  }
  
  // Placeholder: Add or edit product
  function editProduct(productId) {
    alert('Edit functionality to be implemented!');
  }
  
  // Placeholder: Delete product
  function deleteProduct(productId) {
    alert('Delete functionality to be implemented!');
  }
  
  loadAdminProducts();

  
  