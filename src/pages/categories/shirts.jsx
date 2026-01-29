import React, { useContext } from "react";
import { ClosetContext } from "../../context/ClosetContext";

const shirts = [
  { id: 201, name: "Formal Shirt", image: "/products/shirts/shirt1.png" },
  { id: 202, name: "Casual Shirt", image: "/products/shirts/shirt2.png" },
  { id: 203, name: "Checked Shirt", image: "/products/shirts/shirt3.png" },
];

export default function Shirts() {
  const { addToCloset } = useContext(ClosetContext);

  return (
    <div className="p-6">      
      <h1 className="text-3xl font-bold mb-6">Men's Shirts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {shirts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.name} className="rounded mb-2" />
            <h2 className="font-semibold">{item.name}</h2>

            <button
              onClick={() => addToCloset(item)}
              className="mt-2 w-full bg-blue-600 text-white px-3 py-2 rounded"
            >
              Add to Closet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}