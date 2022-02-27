
import React,{useState} from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sales from './pages/Sales';
import Average from './pages/Average';
import Top3sales from './pages/Top3sales';
import Nopage from './pages/Nopage';


function App() {
  return (
    <div>
      < BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='sales' element={<Sales />}></Route>
        <Route path='top3sales' element={<Top3sales />}></Route>
        <Route path='average' element={<Average />}></Route>
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
