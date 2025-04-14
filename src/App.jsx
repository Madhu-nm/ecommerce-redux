
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Homepage from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products'

import AboutUs from './pages/AboutUs'
import Signup from './pages/Signin'
import Cart from './pages/Cart';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div >
<BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Homepage/>}></Route> 
              <Route path="Contact" element={<Contact/>} />
              <Route path="Products" element={<Products/>} />
              <Route path="AboutUs" element={<AboutUs/>} />
              <Route path="Signup" element={<Signup/>} />
              <Route path="cart" element={<Cart/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={1500} />

    </div>
  );
}

export default App;
