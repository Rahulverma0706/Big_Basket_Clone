const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// GET products with pagination
router.get('/productpage', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query; // Defaults: page 1, 20 items per page

    // Calculate the number of products to skip
    const skip = (page - 1) * limit;

    // Find all products and paginate
    const productsDocument = await Product.findOne();

    if (!productsDocument || productsDocument.Products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    const totalProducts = productsDocument.Products.length;
    const products = productsDocument.Products.slice(skip, skip + parseInt(limit));

    res.json({
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: parseInt(page),
      totalProducts,
      products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const productsDocument = await Product.findOne();  // Find the first document

    if (productsDocument && productsDocument.Products.length > 0) {
      res.json(productsDocument.Products);
    } else {
      res.status(404).json({ message: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

// POST new product
router.post('/', async (req, res) => {
  const product = new Product({
    category: req.body.category,
    subCategory: req.body.subCategory,
    product: req.body.product,
    skuId: req.body.skuId,
    image: req.body.image,
    brand: req.body.brand,
    skuName: req.body.skuName,
    skuSize: req.body.skuSize,
    mrp: req.body.mrp,
    sellingPrice: req.body.sellingPrice,
    itemLink: req.body.itemLink,
    inStock: req.body.inStock,
    outOfStock: req.body.outOfStock
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET product by SKU ID
// GET product by SKU ID
router.get('/:skuId', async (req, res) => {
  try {
    // Find the document that contains the Products array
    const productsDocument = await Product.findOne();
    
    if (!productsDocument || productsDocument.Products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    
    // Find the product by SKU ID inside the Products array
    const product = productsDocument.Products.find(p => p["SKU ID"] === parseInt(req.params.skuId));
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
