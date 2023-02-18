import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';


const Publicdashboard = () => {
  return (
	<div>
	<Navbar/>

<Routes>
<Route path='/' element= {(<Hero/>)} />

</Routes>


</div>
  )
}

export default Publicdashboard