const dummyProducts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
  }));
  
  export const getProducts = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    const paginatedProducts = dummyProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(dummyProducts.length / limit);
  
    res.json({ products: paginatedProducts, totalPages });
  };
  