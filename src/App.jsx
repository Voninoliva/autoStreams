import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComposantAnnonce from './composants/ComposantAnnonce';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import Menu from './composants/Menu';
function App() {
  const ip="https://autostreamback-production-56ff.up.railway.app";
  return (
    <>
      <Menu/>
      <ComposantAnnonce ip={ip}/>
    </>
  )
}

export default App
