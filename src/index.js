import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/home.js';
import Pages from './Routes/index.js'
import { BrowserRouter } from 'react-router-dom';

import Footer from './Pages/HeaderandFooter/footer.js'
import Header from './Pages/HeaderandFooter/header.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Pages />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

