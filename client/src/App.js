import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App