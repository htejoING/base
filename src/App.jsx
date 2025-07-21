import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componentes/Product';
import Home from "./componentes/Home";
import Info from "./componentes/Info";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/info" >Info</Link>
              </li>
            </ul>
          </div>         
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;