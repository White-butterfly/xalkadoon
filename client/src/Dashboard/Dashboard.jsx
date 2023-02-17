import React from 'react'
import { Routes, Route} from 'react-router-dom';
import {Navbar, Login} from './components';
import AllData from './Admin Deprt/AllData';
const Dashboard = () => {
  return (
    <div>
	     <Navbar/>
     
     <Routes>
 <Route path='/' element= {(<Login/>)} />
 <Route path='/AllData' element= {(<AllData/>)} />
</Routes>


    </div>
  )
}

export default Dashboard