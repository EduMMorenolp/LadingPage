import React from 'react';
import ReactDOM from 'react-dom/client';
// Componentes
import Footer from './Components/Footer.jsx';
import Navvar from './Components/Navvar.jsx';
import Main from './Components/Main.jsx';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navvar/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);