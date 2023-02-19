import React from 'react'

import { care } from '../assets';
const Footer = () => {
  return (
    <div>
<footer class="p-4 bg-cyan-800 md:p-8 lg:p-10 ">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
    <img src={care} alt="" className='w-32S h-32'/>
          Water Resoucers
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Is the driving force of all nature
      <span className='font-bold bg-cyan-900 p-1 rounded-md text-white'> WATER! </span></p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
     
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Regions</a>
          </li>
   
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
       <a href="#" class="hover:underline"> Climate Worriors </a>. All Rights Reserved.</span>
  </div>
</footer>


    </div>
  )
}

export default Footer