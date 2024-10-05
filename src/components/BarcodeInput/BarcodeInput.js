import React, { useState } from 'react';

function BarcodeInput({ onSubmit }) {
  const [barcode, setBarcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(barcode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="Enter product barcode"
        required
      />
      <button type="submit">Check Sustainability</button>
    </form>
  );
}

export default BarcodeInput;
