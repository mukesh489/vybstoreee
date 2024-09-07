// eslint-disable-next-line no-unused-vars
import React from "react";
import timeline from "../assets/timelineData.json";

const Section3 = () => {
  return (
    <section className="container mx-auto lg:w-[75vw] md:w-[90vw] h-full flex flex-col justify-center my-12 px-6">
      <div className="flex flex-col flex-wrap lg:flex-row " style={{ maxWidth: '100vw' }}>
        <div className="basis-2/5 lg:basis-2/5 md:basis-full sm:basis-full">
          <div className="flex flex-col w-auto h-auto p-4 bg-primary text-othertxt rounded-3xl">
            <p className="font-semibold text-h3">Start Vybing with us!</p>
            <p className="py-8 text-body1">
              &ldquo;We help influencers make money by monetizing their travel
              plans, merchandise, and digital goods and many more.&rdquo;
            </p>
            <button className="inline-block w-[150px] text-h3 bg-tertiary text-primarytxt rounded-xl p-2">
              Join Us
            </button>
          </div>
        </div>
        <div className="relative max-w-4xl p-8 mx-auto basis-3/5 lg:basis-3/5 md:basis-full sm:basis-full">
          {/* Container for vertical line and timeline items */}
          <div className="relative flex">
            {/* <div className="absolute inset-0 border-l-2 border-gray-300 left-1/2"></div> */}
            <div className="flex flex-col w-full pl-10 space-y-8">
              {timeline.timelineData.map((event, index) => (
                <div key={index} className="relative flex flex-col items-start">
                  {/* Numbered Box */}
                  <div className="absolute flex items-center justify-center w-6 h-6 font-semibold text-white bg-blue-500 rounded-full -left-6">
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
      </div>
    </section>
  );
};

export default Section3;