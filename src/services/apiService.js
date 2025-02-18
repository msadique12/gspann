export const fetchProducts = async (page = 1, token) => {
    const response = await fetch(`http://localhost:5000/api/products?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };
  