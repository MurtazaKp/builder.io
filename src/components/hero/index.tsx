import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const Hero = () => {
    const HeroProps = {
        heading:"Discover Your Next Adventure Explore the World with Wanderlust Adventures",
        buttonOne:{
            label:"Get Started",
            href:"/contact",
            target:"_blank"
        },
        buttonTwo:{
            label:"Learn More",
            href:"/services",
            target:"_blank"
        },
        heroImage:[{
            src:"/assets/images/bannerOne.jpg",
            alt:"Hero Image"
        },
        {
            src:"/assets/images/bannerTwo.jpg",
            alt:"Hero Image"
        },
        {
            src:"/assets/images/bannerThree.jpg",
            alt:"Hero Image"
        },
        {
            src:"/assets/images/bannerFour.jpg",
            alt:"Hero Image"
        },
        ]

        

      
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
  return (
 
        <div className="w-full px-6 mt-20">
                    <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">{HeroProps.heading}</h1>
                        </div>
                        <div className="flex justify-center items-center mb-10 sm:mb-20">
                          <Link href={HeroProps.buttonOne.href}><button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">{HeroProps.buttonOne.label}</button></Link>  
                       <Link href={HeroProps.buttonTwo.href}>  <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">{HeroProps.buttonTwo.label}</button></Link>   
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                        
                        <div className="relative sm:w-2/3 w-11/12">
                        <Slider {...settings} >
        {HeroProps.heroImage.map((image, index) => (
          <div key={index}>
            <img className='w-full' src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
                        </div>
                    </div>
                </div>
   
  )
}

export default Hero