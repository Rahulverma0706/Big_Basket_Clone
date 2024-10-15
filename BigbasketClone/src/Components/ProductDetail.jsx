import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // 'id' will be the SKU ID passed via route params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product data based on SKU ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data); // Set the product state with the data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state until data is fetched
  }

  if (!product) {
    return <p>Product not found</p>; // If no product is found, display this message
  }

  // Display product details
  return (
    <div className="product-detail">
      <img src={product.Image} alt={product.SKU_Name} className="product-image"/>
      <h1>{product.SKU_Name}</h1>
      <p><strong>Category:</strong> {product.Category}</p>
      <p><strong>Sub-Category:</strong> {product.SubCategory}</p>
      <p><strong>Brand:</strong> {product.Brand}</p>
      <p><strong>SKU Size:</strong> {product.SKU_Size}</p>
      <p><strong>MRP:</strong> {product.MRP}</p>
      <p><strong>Selling Price:</strong> {product.Selling_Price}</p>
      <p><strong>Stock:</strong> {product.In_Stock === "Yes" ? "In Stock" : "Out of Stock"}</p>
      <a href={product.Item_Link} target="_blank" rel="noopener noreferrer" className="buy-now">Buy Now</a>
    </div>
  );
};

export default ProductDetail;
