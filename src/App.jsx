import React from 'react'

import './App.css'
import Services from './components/Services'

import Contact from './components/Contact'

import {Routes,Route} from 'react-router-dom'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'



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