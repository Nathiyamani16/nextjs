export const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?page=1&limit=10');
    const data = await response.json();
    return data;
  };
  

  export const fetchProductById = async (id) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await response.json();
    return data;
  };
  