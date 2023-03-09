import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

//https://www.youtube.com/watch?v=bmpI252DmiI
function App(){
  return(
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<Layout />} />
      <Route path="/contract" element={<Layout />} />
    </Routes>
  )
}

export default App