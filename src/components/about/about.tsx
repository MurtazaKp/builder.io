import React from "react";

const AboutUsProps = {
    section1: {
      title: "Discover the Journey of Wonderlust Travels",
      description: "Wanderlust is a passionate community of travelers, explorers, and adventure-seekers. Our mission is to inspire and empower people to explore the world, embrace new cultures, and create unforgettable memories. With Wanderlust, the journey is just as important as the destination, and we're here to guide you on your extraordinary adventures."
    },
    section2: {
      ourStory: "Our Story",
      ourStoryDescription: "Wanderlust was born from a deep love for travel and a desire to share the wonders of the world with others. It all began with a group of friends who embarked on a life-changing journey, and the experiences and connections made along the way inspired us to create something special. Since our humble beginnings, we've grown into a global community of like-minded individuals who value exploration, cultural exchange, and the thrill of discovery.",
      ourVision: "Our Vision",
      ourVisionDescription: "At Wanderlust, our vision is to make travel accessible, meaningful, and transformative. We believe that travel has the power to broaden horizons, connect people, and promote a deeper understanding of our diverse world. We're committed to providing resources, experiences, and insights that help travelers of all backgrounds embark on incredible adventures and return home with a greater appreciation for the beauty of our planet."
    }
  };

const About = () => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">{AboutUsProps.section1.title}</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">{AboutUsProps.section1.description}</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
               <img src="/assets/images/aboutImageOne.jpg"/>
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">{AboutUsProps.section2.ourStory}</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">{AboutUsProps.section2.ourStoryDescription}</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">{AboutUsProps.section2.ourStoryDescription}</p>
                    
                   
                </div>
                <div className="lg:flex items-start w-full lg:w-1/2 ">
                    <img className=" w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    
                </div>
            </div>
        </div>
    );
};

export default About;
