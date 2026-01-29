import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, link }) {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <p className="mt-2 font-semibold text-gray-800">{title}</p>
      </div>
    </Link>
  );
}