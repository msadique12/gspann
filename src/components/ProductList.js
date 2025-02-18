import React, { useState, useEffect, useContext } from 'react';
import { fetchProducts } from '../services/apiService';
import { AuthContext } from '../context/AuthContext';

const ProductList = () => {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(page, token);
        // Assuming data format: { products: [...], totalPages: n }
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      }
    };
    loadProducts();
  }, [page, token]);

  return (
    <div className="product-list">
      <h2>Products</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>{page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
