import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer.jsx';
import Navvar from './Components/Navvar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navvar/>
    <Footer />
  </React.StrictMode>
);