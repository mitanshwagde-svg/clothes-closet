import TShirt from "./pages/categories/TShirt.jsx";
import Shirts from "./pages/categories/shirts.jsx";
import Hoodies from "./pages/categories/Hoodies";
import Cargos from "./pages/categories/Cargos";
import Shop from "./pages/Shop.jsx";
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TryOn from './pages/TryOn.jsx';
import Closet from './pages/Closet.jsx';


export default function App() {
  return (
    <div className='min-h-screen'>
      <nav className='p-4 shadow-md flex gap-4'>
        <Link to='/' className='font-bold text-lg'>Clothes & Closet</Link>
        <Link to='/try-on'>Try On</Link>
        <Link to='/closet'>Closet</Link>
        <Link to='/shop'></Link> 
      </nav>

      <main className='p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/try-on' element={<TryOn />} />
          <Route path='/closet' element={<Closet />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/category/tshirts' element={<TShirt/>}/>
          <Route path="/category/shirts" element={<Shirts />} /> 
          <Route path="/category/hoodies" element={<Hoodies />} /> 
          <Route path="/category/cargos" element={<Cargos />} />  


        </Routes>
        <nav className="p-4 shadow-md flex items-center justify-between">
  {/* Left side - Logo */}
  <Link to="/" className="font-bold text-xl">
    Clothes & Closet
  </Link>

  {/* Right side - Menu */}
  <div className="flex gap-4 items-center">
    <Link to="/try-on" className="hover:text-blue-600">Try On</Link>
    <Link to="/closet" className="hover:text-blue-600">Closet</Link>

    {/* SHOP BUTTON */}
    <Link
      to="/shop"
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      Shop
    </Link>
  </div>
</nav>
      </main>
    </div>
  );
}
<h1 className="text-4xl font-bold text-blue-600">Tailwind Works!
</h1>