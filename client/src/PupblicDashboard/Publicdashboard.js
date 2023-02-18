import React from 'react'
import { Routes, Route} from 'react-router-dom';
import DetailedRegion from './DetailedRegion';
import Footer from './Footer';
import Hero from './Hero';
import Login from './Login';
import Navbar from './Navbar';
import Region from './Region';


const Publicdashboard = () => {
  return (
	<div className='bg-blue-200'>
	<Navbar/>

<Routes>
<Route path='/' element= {(<Hero/>)} />
<Route path='/Regions' element= {(<Region/>)} />
<Route path='/DetailedRegion' element= {(<DetailedRegion/>)} />
<Route path='/Login' element= {(<Login/>)} />
</Routes>
<Footer/>

</div>
  )
}

export default Publicdashboard