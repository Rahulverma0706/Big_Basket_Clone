const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
  Category: String,
  SubCategory: String,
  Product: String,
  SKU_ID: Number,
  Image: String,
  Brand: String,
  SKU_Name: String,
  SKU_Size: String,
  MRP: String,
  Selling_Price: String,
  Item_Link: String,
  In_Stock: String,
  Out_of_Stock: String,
});

const productSchema = new mongoose.Schema({
  Products: [sheetSchema], // Ensure this matches your document structure
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
