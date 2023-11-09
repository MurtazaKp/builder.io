import services from '@/pages/services';
import Link from 'next/link';
import React from 'react';

const servicesDataProps = {
mainHeading:"Services We Offer",
    services:[
  {
    title: 'City Tours',
    description: 'Explore the vibrant cities with our guided city tours. Discover the hidden gems and historical landmarks of bustling metropolises as you immerse yourself in the local culture and history.',
  },
  {
    title: 'Adventure Tours',
    description: 'Embark on thrilling adventures in the great outdoors. From hiking through rugged mountains to white-water rafting in untamed rivers, our adventure tours are designed for adrenaline seekers and nature enthusiasts.',
  },
  {
    title: 'Cultural Tours',
    description: 'Discover the rich cultural heritage of different regions. Immerse yourself in the traditions, arts, and cuisines of diverse cultures as you journey through historical sites and engage with local communities.',
  },
  {
    title: 'Beach Getaways',
    description: 'Relax on the worlds most beautiful beaches. Unwind on pristine shores with crystal-clear waters, soak up the sun, and enjoy the serenity of beachside paradises.',
  },
  {
    title: 'Wildlife Safaris',
    description: 'Get up close with amazing wildlife on our safaris. Experience the thrill of encountering wild animals in their natural habitats, from majestic lions on the savannah to elusive dolphins in the deep blue sea.',
  },
  {
    title: 'Cruise Excursions',
    description: 'Enjoy the luxury of cruises with our exclusive excursions. Set sail on a cruise ship and explore exotic destinations, with guided excursions that offer unique insights and experiences at each port of call.',
  },
],
cta:{
    label:"Book Now",
    href:"/contact"
}
}

const TourServicesCard = () => {
  return (
    <>
    <div className='my-10'>
    <div> <h1 className='text-center text-5xl font-semibold my-10'>{servicesDataProps.mainHeading}</h1></div>
    <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:px-0 mb-5 lg:grid-cols-3 gap-10 container mx-auto'>
      {servicesDataProps.services.map((service, index) => (
        <div key={index} className="block rounded-lg bg-white p-6 border hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
          <div className="mb-4">
            <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {service.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {service.description}
            </p>
            
          </div>
        </div>
      ))}
    </div>
    <div>
        <Link href={servicesDataProps.cta.href}>
    <button type="submit" className="focus:outline-none bg-indigo-700 hover:bg-indigo-600 text-white text-base w-3/12 mt-10 mx-auto block py-3 px-6 rounded">
    {servicesDataProps.cta.label}
                                </button>
                                </Link>
    </div>
    </div>
    </>
  );
};

export default TourServicesCard;
