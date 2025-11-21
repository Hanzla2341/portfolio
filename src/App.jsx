import React from 'react'

import './App.css'
import Services from './components/Services'

import Contact from './components/Contact'

import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/portfolio'
import Profile from './components/profile'

const App = () => {

  return (
    <div>
    
<Routes>
  <Route path='/' element={<Profile/>}/>
  <Route path='/contact' element={<Contact/>}/>
  
  <Route path='/Portfolio' element={<Portfolio/>}/>
  <Route path='/services' element={<Services/>}/>
  



  
</Routes>

<Services/>
<Portfolio/>
<Contact/>

</div>

  )
}

export default App