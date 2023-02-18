import React from 'react'
import { Routes, Route} from 'react-router-dom';
import {Navbar, Login} from './components';
import AllData from './Admin Deprt/AllData';
import AdminHome from './Admin Deprt/AdminHome';
import Dash from './Dashboard/Dashboard';
import Regions from './Admin Deprt/Regions';

const Dashboard = () => {
  return (
    <div>
	     <Navbar/>
     
     <Routes>
 <Route path='/' element= {(<Dash/>)} />
 <Route path='/AllData' element= {(<AllData/>)} />
 <Route path= '/AdminHome' element={(<AdminHome/>)}/>
 <Route path= '/Regions' element={(<Regions/>)}/>
</Routes>


    </div>
  )
}

export default Dashboard