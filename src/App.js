import React, { useState } from 'react';
import BarcodeInput from './components/BarcodeInput/BarcodeInput';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { getProductInfo } from './utils/api';
import './App.css';

function App() {
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBarcodeSubmit = async (barcode) => {
    setLoading(true);
    setError(null);
    try {
      const info = await getProductInfo(barcode);
      setProductInfo(info);
    } catch (err) {
      setError('Failed to fetch product information. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Product Sustainability Checker</h1>
      <BarcodeInput onSubmit={handleBarcodeSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {productInfo && <ProductInfo info={productInfo} />}
    </div>
  );
}

export default App;
