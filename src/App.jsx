import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Starter, Card, Refresher} from './particles';


function App() {

  return (
    <Router>
          <Routes>
              <Route path="/" element={<Starter/>}/>
              <Route path="/:name" element={<Card/>}/>
              <Route path="/refresh/:name" element={<Refresher/>}/>
            </Routes>
    </Router>
  )
}

export default App
