import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Buynow from './Buynow';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Form from './Form';
import Table from './Table';
import View_products from './View_products';
import Editproduct from './Editproduct';
import HashLoader from "react-spinners/HashLoader";
import Menwatch from './Menwatch';
import Womenwatch from './Womenwatch';
import Login from './Login'
import Register from './Register';
import Addtocart from './Addtocart';
// https://optimal-demos.myshopify.com/?_ab=0&_fd=0&_sc=1

function App() {

  return (
    <>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buynow/:id" element={<Buynow />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/form/Addproduct" element={<Form />} />
          <Route path="/Dashboard/form/viewproduct" element={<View_products />} />
          <Route path="/Dashboard/Table" element={<Table />} />
          <Route path="/men" element={< Menwatch />} />
          <Route path="/women" element={< Womenwatch />} />
          <Route path="/Dashboard/form/editproduct/:id" element={<Editproduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Addtocart />} />
        </Routes>

      </div>

    </>

  );
}

export default App;