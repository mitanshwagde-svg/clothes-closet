import React, { useState } from "react";

export default function PriceFilter({ onPriceChange }) {
  const [price, setPrice] = useState(5000);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setPrice(value);
    onPriceChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md mb-6">
      <h3 className="font-semibold mb-2">Filter by Price</h3>

      <input
        type="range"
        min="0"
        max="15000"
        value={price}
        onChange={handleChange}
        className="w-full"
      />

      <p className="mt-2 text-gray-700">
        Selected Price: <span className="font-bold">₹{price}</span>
      </p>
    </div>
  );
}