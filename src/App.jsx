import { useState } from 'react'
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ComposantAnnonce from './composants/ComposantAnnonce';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import Menu from './composants/Menu';
import 'bulma-list/css/bulma-list.css';
import { DetailAnnonce } from './composants/enfants/DetailAnnonce';
import Login from './composants/Login';
function App() {
  const ip = "https://back-autostream-production.up.railway.app";
  return (
    <>
      <Router>
        <Menu ip={ip}/>
        <Routes>
          <Route exact path='/' element={<ComposantAnnonce ip={ip} />} />
          <Route path="/detailAnnonce/:idannonce" element={<DetailAnnonce ip={ip} />} />
          <Route path="/login" element={<Login ip={ip} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
