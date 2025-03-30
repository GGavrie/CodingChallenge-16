// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(products => {
        console.log('Products fetched with .then():');
        // Log each product's name to the console as required in Task 2
        products.slice(0, 5).forEach(product => {
          console.log(product.fields.name);
        });
        displayProducts(products);
      })
      .catch(error => {
        console.error('Error fetching products with .then():', error);
      });
  }
  
  // This function will be called when the script loads
  //fetchProductsThen();

  // Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const products = await response.json();
      console.log('Products fetched with async/await:');
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  // Task 4: Display the Products
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    
    // Display only the first 5 products
    const productsToShow = products.slice(0, 5);
    
    productsToShow.forEach(product => {
      const { fields } = product;
      const { name, price } = fields;
      const image = fields.image[0].url;
      
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      
      productElement.innerHTML = `
        <img src="${image}" alt="${name}" class="product-img">
        <h3 class="product-name">${name}</h3>
        <p class="product-price">$${price}</p>
      `;
      
      productContainer.appendChild(productElement);
    });
  }
  // Task 5: Reusable Error Handler
  function handleError(error) {
    console.error('An error occurred:', error.message);
  }
  //Task 6 
  // This function will be called when the script loads
  fetchProductsThen();
  fetchProductsAsync();