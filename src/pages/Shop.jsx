import React, { useState } from "react";
import PriceFilter from "../components/PriceFilter";

const items = [
  { id: 1, name: "T-Shirt", price: 599 },
  { id: 2, name: "Hoodie", price: 1299 },
  { id: 3, name: "Cargo Pants", price: 1599 },
  { id: 4, name: "Kurti", price: 799 },
  { id: 5, name: "Dress", price: 1999 },
  { id: 6, name: "Jeans", price: 2499 },
];

export default function Shop() {
  const [maxPrice, setMaxPrice] = useState(15000);

  const filteredItems = items.filter((item) => item.price <= maxPrice);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>

      <PriceFilter onPriceChange={(value) => setMaxPrice(value)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-xl">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}