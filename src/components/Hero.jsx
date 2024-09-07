// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center h-auto my-8 font-primarytxt">
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
        <div className="flex flex-col justify-around px-4 space-y-4 font-semibold leading-tight md:flex-row md:px-8 md:space-y-0 md:space-x-4 text-h3">
          
          {/* Travel Itinerary Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <img
              src="/Images/travel.png"
              alt="Travel Itinerary"
              className="mb-2 h-[80px] w-auto md:h-[120px] lg:h-[150px]" // Adjust image size for mobile, tablet, and desktop
            />
            <div className="text-center">
              <p>Travel</p>
              <p>Itinerary</p>
            </div>
          </div>
          
          {/* Custom Merchandise Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <img
              src="/Images/merchandise.png"
              alt="Custom Merchandise"
              className="mb-2 h-[80px] w-auto md:h-[120px] lg:h-[150px]" // Adjust image size for mobile, tablet, and desktop
            />
            <div className="text-center">
              <p>Custom</p>
              <p>Merchandise</p>
            </div>
          </div>

          {/* Digital Content Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <img
              src="/Images/digital.png"
              alt="Digital Content"
              className="mb-2 h-[80px] w-auto md:h-[120px] lg:h-[150px]" // Adjust image size for mobile, tablet, and desktop
            />
            <div className="text-center">
              <p>Digital</p>
              <p>Content</p>
            </div>
          </div>

          {/* Fashion Brand Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <img
              src="/Images/fashion.png"
              alt="Fashion Brand"
              className="mb-2 h-[80px] w-auto md:h-[120px] lg:h-[150px]" // Adjust image size for mobile, tablet, and desktop
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