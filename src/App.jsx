import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Futurama from './pages/Futurama'
import Random from './pages/Random'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Futurama />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/random' element={<Random />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
