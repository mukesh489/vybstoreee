// eslint-disable-next-line no-unused-vars
import React from "react";
import timeline from "../assets/timelineData.json";

const Section3 = () => {
  return (
    <section className="container mx-auto lg:w-[75vw] md:w-[90vw] h-full flex flex-row justify-center my-12">
      <div className="basis-2/5">
        <div className="w-auto h-auto flex flex-col bg-primary text-othertxt rounded-3xl p-4">
          <p className="text-h3 font-semibold">Start Vybing with us!</p>
          <p className="py-8 text-body1">
            &ldquo;We help influencers make money by monetizing their travel
            plans, merchandise, and digital goods and many more.&rdquo;
          </p>
          <button className="inline-block w-[150px] text-h3 bg-tertiary text-primarytxt rounded-xl p-2">
            Join Us
          </button>
        </div>
      </div>
      <div className="basis-3/5 relative max-w-4xl mx-auto p-8">
        {/* Container for vertical line and timeline items */}
        <div className="relative flex">
          {/* <div className="absolute inset-0 left-1/2 border-l-2 border-gray-300"></div> */}
          <div className="flex flex-col pl-10 space-y-8 w-full">
            {timeline.timelineData.map((event, index) => (
              <div key={index} className="relative flex flex-col items-start">
                {/* Numbered Box */}
                <div className="absolute -left-6 flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full font-semibold">
                  {index + 1}
                </div>
                {/* Timeline Event */}
                <div className="flex items-center mb-4 ml-8">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-500">{event.date}</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
