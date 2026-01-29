import React, { useContext } from "react";
import { ClosetContext } from "../../context/ClosetContext";

const tshirts = [
  { id: 1, name: "Black T-Shirt", image: "/products/t1.jpg" },
  { id: 2, name: "White Tee", image: "/products/t2.png" },
  { id: 3, name: "Graphic Tee", image: "/products/t3.png" },
];

export default function TShirts() {
  const { addToCloset } = useContext(ClosetContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Men's T-Shirts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {tshirts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={item.image} className="rounded mb-2" />
            <h2 className="font-semibold">{item.name}</h2>

            <button
              onClick={() => addToCloset(item)}
              className="mt-2 w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
            >
              Add to Closet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}