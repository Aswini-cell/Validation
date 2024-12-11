import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
