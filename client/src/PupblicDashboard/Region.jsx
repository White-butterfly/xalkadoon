import React from 'react'
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
const Region = () => {
  return (
    <div>
	<section className="bg-cyan-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
		Our Country </h2>
          <p className="font-light text-gray-200 lg:mb-16 sm:text-xl dark:text-gray-400 bg-cyan-800 p-1 
	  rounded-md">
		The beauty of the natural world lies in the details, and the details are in the water."</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
               
		
		  {/* className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg' */}
		  <Iframe 
		    className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg'
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2009280.7044943823!2d47.94816987338554!3d10.391651587901046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d966c5491ecf55b%3A0x5be3a724828cfe48!2sAisemoh!5e0!3m2!1sen!2sso!4v1676711715447!5m2!1sen!2sso" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

		  </Iframe>
              </a>
	      <Link to = '/DetailedRegion'>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Xaysimo</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Type: District</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Poppulation: 5,700</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                         <p className='text-white bg-red-500 p-1 rounded-md 
			 cursor-pointer'>Donate!</p>
                      </li>
                  
                  </ul>
              </div>
	      </Link>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                
		  <Iframe 
		  className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg'
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.662993715894!2d44.518876073941236!3d9.857435637182936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1627d04396e27e07%3A0x67d2799b8a46938f!2sDaarbuduq!5e0!3m2!1sen!2sso!4v1676712741942!5m2!1sen!2sso" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
	      </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Daarbuduq</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">type:town</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">population:500</p>
                  <ul className="flex space-x-4 sm:mt-0">
		  <li>
                         <p className='text-white bg-yellow-500 p-1 rounded-md 
			 cursor-pointer'>Donate!</p>
                      </li>
                  
                  </ul>
              </div>
          </div> 
	  <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                
	      <Iframe 
	 className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg'   
	      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7882.80388103792!2d46.616964323402605!3d8.935058224344127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d84710860243519%3A0x4a898a1187da628f!2sOog!5e0!3m2!1sen!2sso!4v1676713355497!5m2!1sen!2sso" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

	      </Iframe>
	      </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Oog</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">type:town</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">population:7000</p>
                  <ul className="flex space-x-4 sm:mt-0">
		  <li>
                         <p className='text-white bg-green-500 p-1 rounded-md 
			 cursor-pointer'>Downpour!</p>
                      </li>
                  
                  </ul>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
               
		
		  {/* className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg' */}
		  <Iframe 
		  className='w-full h-32 m-2 rounded-lg sm:rounded-none sm:rounded-l-lg'
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.937780678003!2d46.40564912382047!3d8.95053164720429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d8411c4bbfba285%3A0x61c05cc1f653aee7!2sAinabo!5e0!3m2!1sen!2sso!4v1676717486390!5m2!1sen!2sso" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

		  </Iframe>
              </a>
	      <Link to = '/DetailedRegion'>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Caynabo</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Type: District</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Poppulation: 5,700</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                         <p className='text-white bg-red-500 p-1 rounded-md 
			 cursor-pointer'>Donate!</p>
                      </li>
                  
                  </ul>
              </div>
	      </Link>
          </div> 
      </div>  
  </div>
</section>
    </div>
  )
}

export default Region