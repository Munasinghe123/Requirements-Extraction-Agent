import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import UploadAudio from './UploadAudio'
import Header from './components/Header'
import StarBackground from './components/StartBackGround'

function App() {
  return (
    <BrowserRouter>
      <StarBackground />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/upload-audio' element={<UploadAudio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App