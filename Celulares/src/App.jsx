import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Footer/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import QuienesSomos from './componentes/QuienesSomos';
import Productos from './componentes/Productos';
import Contacto from './componentes/Contacto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
