import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/categorycard";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12"
      style={{
        backgroundImage: "url('/backgrounds/home-bg.jpeg')",
      }}
    >
      {/* Hero Section */}
      <div className="text-center mb-16 mt-10">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-3">
          Welcome to <span className="text-blue-300">Clothes & Closet</span>
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
          Discover personalized fashion recommendations and try outfits
          virtually using advanced AI + AR technology.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/try-on"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition backdrop-blur-sm"
          >
            Try On Clothes
          </Link>

          <Link
            to="/closet"
            className="px-6 py-3 bg-black bg-opacity-60 text-white rounded-lg shadow-lg hover:bg-opacity-80 transition backdrop-blur-sm"
          >
            View Closet
          </Link>
        </div>
      </div>

      {/* Men's Section */}
      <h2 className="text-3xl font-bold mt-24 mb-5 text-white drop-shadow-lg">
        Men's Fashion
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <CategoryCard title="T-Shirts" image="/products/t3.png" link="/category/tshirts"/> 
        <CategoryCard title="Shirts" image="/products/shirts/shirt3.png" link="/category/shirts"/>
        <CategoryCard title="Hoodies" image="/products/hoodies/hoodie1.png" link="/category/hoodies"/>
        <CategoryCard title="Cargos" image="/products/cargos/cargo3.png" link="/category/cargos"/>
      </div>

      {/* Women's Section */}
      <h2 className="text-3xl font-bold mt-16 mb-5 text-white drop-shadow-lg">
        Women's Fashion
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-20">
        <CategoryCard title="Kurtis" image="/categories/womens-kurti.jpg" />
        <CategoryCard title="Dresses" image="/categories/womens-dress.jpg" />
        <CategoryCard title="Tops" image="/categories/womens-top.jpg" />
      </div>
    </div>
  );
}