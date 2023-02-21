import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, History } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<About />}>
        <Route path= 'history' element = {<History/>}></Route>
      </Route>
      
    </Routes>
  </BrowserRouter>

);


