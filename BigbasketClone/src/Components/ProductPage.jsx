import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products?page=${page}&limit=20`);
      setProducts(response.data.products || []);  // Default to empty array if no data
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error("Error fetching products", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products.length > 0 ? (
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.Image} alt={product.Product} />
                <h2>{product.Product}</h2>
                <p>{product.Brand}</p>
                <p>{product.Selling_Price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )
      )}

      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`pagination-btn ${page + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
