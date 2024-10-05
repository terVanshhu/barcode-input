const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/api/product-info/:barcode', async (req, res) => {
  const { barcode } = req.params;

  try {
  
    const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const productData = response.data.product;

    if (!productData) {
      return res.status(404).json({ error: 'Product not found' });
    }


    const productInfo = {
      name: productData.product_name,
      reusable: Math.random() < 0.5,
      recyclable: Math.random() < 0.5,
      reducible: Math.random() < 0.5,
      description: productData.generic_name,
    };

    res.json(productInfo);
  } catch (error) {
    console.error('Error fetching product info:', error);
    res.status(500).json({ error: 'Failed to fetch product information' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
