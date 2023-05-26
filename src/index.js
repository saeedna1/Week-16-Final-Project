import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar} from './Component/Navbar';
import {Home} from "./Component/Home";
import {About} from "./Component/About"
import {Products} from "./Component/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './Component/Contacts';
import { Footer } from './Component/Footer';
import "./Component/Home.css"


function App() {
    return (
        <>
      
        <BrowserRouter>
  
            <Navbar/>
         
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Products" element={<Products/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Contacts" element={<Contacts/>}/>
            </Routes>  
  
            <Footer/>
  
        </BrowserRouter>
        </>
      
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




