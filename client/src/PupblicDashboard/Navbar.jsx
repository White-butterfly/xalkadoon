import React from 'react'
import {useState} from 'react';
import { close,  menu, care , } from '.././assets';

import {navLinks } from '.././constants';

import { Link } from 'react-router-dom';
 
 import {motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
   
   <div className=' dark:bg-cyan-900'>
    <nav className={` w-full flex py-4 justify-between items-center navbar  bg-yellow/30 mx-[4%] `}>
<Link to ='/'>
{/* <Link to = '/DetailedRegion'> */}
    <span class=" flex self-center text-2xl font-extrabold  Class
Properties
font-sans whitespace-nowrap dark:text-white">
            <img src={care} className="m-auto  h-32 w-32 "/>
             <span className="dark:text-gradient text-indigo-gradient m-auto  "> Water Resoucers</span>
            </span>
            </Link>
    <ul 
    className= 'list-none sm:flex hidden justify-end items-center flex-1'>
        
{navLinks.map((nav, index )=> (
    
<li
className={`${index === navLinks.length -1 ? 'mr-20 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-gradient bg-blue-400 ml-5' :
 'mr-10 ' 
} text-black dark:text-white
font-poppins font-normal cursor-pointer text-[16px] 
`}
key={nav.id}
>
<a href >
  {<Link to ={`${nav.id}`}> {nav.title}</Link>}

</a>


</li>

))}
    </ul>
      
      <div className='sm:hidden flex flex-1 justify-end items-centerrounded-md'>
        <img src={toggle ? "close.png": "menu.png"}
        alt= 'menu'
        className='w-[28px] h-[28px] object-contain  '
        onClick={() => setToggle((prev) => !prev)}
        />

<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>


<ul 
    className= 'list-none flex flex-col justify-end items-center flex-1'>
{navLinks.map((nav, index )=> (
<li
key={nav.id}
className={`font-poppins font-normal cursor-pointer text-[16px] 
${index === navLinks.length -1 ? 'mr-0' : 'mb-4' } dark:text-white text-black`}
>


<a href >
  {<Link to ={`${nav.id}`}> {nav.title}</Link>}

</a>

</li>

))}
    </ul>
      </div>
</div>
      </nav>
      </div>
  )
}

export default Navbar






 