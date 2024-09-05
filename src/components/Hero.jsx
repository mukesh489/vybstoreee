// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col h-auto container font-primarytxt my-8 items-center">
      <div className="flex w-full h-auto">
        <video
          autoPlay={true}
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/Videos/herowebvdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col mx-4 md:mx-8 shadow-2xl rounded-3xl lg:w-[75vw] md:w-[90vw] w-full">
        <div className="flex flex-col md:flex-row justify-around px-4 md:px-8 space-y-4 md:space-y-0 md:space-x-4 text-h3 font-semibold leading-tight">
          
          {/* Travel Itinerary Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              src="/Images/travel.png"
              alt="Travel Itinerary"
              className="mb-2 h-[80px] w-auto" // Adjust image size for mobile
            />
            <div className="text-center">
              <p>Travel</p>
              <p>Itinerary</p>
            </div>
          </div>
          
          {/* Custom Merchandise Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              src="/Images/merchandise.png"
              alt="Custom Merchandise"
              className="mb-2 h-[80px] w-auto" // Adjust image size for mobile
            />
            <div className="text-center">
              <p>Custom</p>
              <p>Merchandise</p>
            </div>
          </div>

          {/* Digital Content Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              src="/Images/digital.png"
              alt="Digital Content"
              className="mb-2 h-[80px] w-auto" // Adjust image size for mobile
            />
            <div className="text-center">
              <p>Digital</p>
              <p>Content</p>
            </div>
          </div>

          {/* Fashion Brand Section */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              src="/Images/fashion.png"
              alt="Fashion Brand"
              className="mb-2 h-[80px] w-auto" // Adjust image size for mobile
            />
            <div className="text-center">
              <p>Fashion</p>
              <p>Brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
