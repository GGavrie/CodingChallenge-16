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
  