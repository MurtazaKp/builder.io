import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    content:
      "Our tour with this company was an amazing experience. The destinations were breathtaking, and the guides were knowledgeable and friendly. We'll definitely book with them again!",
    author: "Anna Smith",
    avatar: "https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png",
  },
  {
    content:
      "I can't recommend this tour company enough. They took care of all the details, and we had a fantastic journey. The memories will last a lifetime!",
    author: "Dany John",
    avatar: "https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png",
  },
  {
    content:
      "Our tour guide, Mike, was exceptional. He made our trip truly special. The places we visited were stunning, and we had a blast!",
    author: "Mike Blake",
    avatar: "https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png",
  },
];

export default function Testimonial() {
    const setting ={
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }


  return (
    <div className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 flex flex-col lg:items-center ">
      <div className="mb-14 xl:mb-0">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-10 text-gray-800 mb-10 pr-16 lg:pr-0">
          Our customers love what we do
        </h1>
      </div>
      <div className="w-full">
        <Slider {...setting}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="p-5">
              <div className="bg-white shadow rounded-2xl p-10 xl:p-8" style={{ height: "100%" }}>
                <img
                  src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
                  aria-hidden="true"
                />
                <div className=" pt-4 flex flex-col gap-6 justify-center items-center sm:justify-start gap-6 flex-grow" style={{ height: "100%" }}>
                  <div className=" text-center">
                    <p className="xl:text-xl xl:leading-loose text-gray-600">
                      {testimonial.content}
                    </p>
                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                      {testimonial.author}
                    </p>
                  </div>
                  <img
                    src={testimonial.avatar}
                    alt={`Display Avatar of ${testimonial.author}`}
                    role="img"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  );
}
