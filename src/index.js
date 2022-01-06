import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import CadUser from './pages/CadUser/'
import Login from './pages/Login/Login';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CadFilme from './pages/CadFilme';
import Filme from './pages/Filme/Filme';
import EditFilm from './pages/EditFilm';


axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
      <Navbar
      image="https://www.apkmirror.com/wp-content/uploads/2021/05/28/609dd6c4933e6.png"
      altura="42px"
      largura="50px"
    />
    <Footer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme" element={<Filme />} />       
        <Route path="/editfilme/:id" element={<EditFilm />} />
        <Route path="/caduser" element={<CadUser />} />
        <Route path="/cadfilm" element={<CadFilme />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);