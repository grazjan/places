import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Create from './pages/Create'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App