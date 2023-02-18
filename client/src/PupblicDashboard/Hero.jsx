import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
	<section className=" dark:bg-cyan-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">In a drought, every drop counts.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
	Drought is a natural disaster caused by prolonged periods of dry weather that can have significant impacts on ecosystems, agriculture, and communities. It results in water scarcity, crop failure, soil erosion, and can lead to economic and social instability. Droughts are becoming more frequent and severe due to climate change and unsustainable water management practices. Conservation and efficient use of water 
	resources are essential to mitigate the impacts of drought and ensure the sustainability of our water supply.
	</p>
	<Link to = '/regions'>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" 
	    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Regions
	    </a>
        </div>
	</Link>
      
    </div>
</section>
    </div>
  )
}

export default Hero