import { useEffect, useState } from 'react'
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ComposantAnnonce from './composants/ComposantAnnonce';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import Menu from './composants/Menu';
import 'bulma-list/css/bulma-list.css';
import { DetailAnnonce } from './composants/enfants/DetailAnnonce';
import Login from './composants/Login';
import Message from './composants/Message';
import Profil from './composants/Profil';
import 'swiper/css';
import "swiper/css/navigation"

import MessageEntreUser from './composants/MessageEntreUser';
function App() {
  const ip = "https://back-autostream-production.up.railway.app";
  // localStorage.removeItem('token');
  const token = localStorage.getItem('token');
  console.log("token   ",token);
  return (
    <>
      <Router>
        <Menu ip={ip}/>
        <Routes>
          <Route exact path='/' element={<ComposantAnnonce ip={ip} />} />
          <Route path="/detailAnnonce/:idannonce" element={<DetailAnnonce ip={ip} />} />
          <Route path="/profil" element={<Profil ip={ip} />} />
          <Route path="/login" element={<Login ip={ip} />} />
          <Route path='/messages' element={<Message data={null}/>}/>
          <Route path="/message" element={<MessageEntreUser />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
