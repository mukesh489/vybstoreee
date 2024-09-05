// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Section4 = () => {
  const [followers, setFollowers] = useState(100);
  const [products, setProducts] = useState(1);

  const handleFollowersChange = (e) => {
    setFollowers(e.target.value);
  };

  const handleProductsChange = (e) => {
    setProducts(e.target.value);
  };

  const calculateMonthlyEarning = () => {
    // Estimate monthly earning based on followers
    return (followers * 2.85).toLocaleString();
  };

  const calculateYearlyEarning = () => {
    // Estimate yearly earning based on products
    return (products * 73000).toLocaleString();
  };

  return (
    <section className="w-full h-auto flex bg-[#e5f0f1]">
      <div className="container mx-auto lg:w-[75vw] md:w-[90vw] h-full flex flex-col my-8">
        {/* Heading */}
        <div className="flex w-full h-auto justify-center items-center text-h3 font-bold my-16">
          <p>ESTIMATE EARNING POTENTIAL</p>
        </div>

        {/* Followers Section */}
        <div className="flex flex-col md:flex-row justify-around my-8 items-center">
          <div className="flex flex-col w-full md:w-1/2 gap-4 items-center">
            <p className="text-body1 font-semibold">
              How many followers do you have?
            </p>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={followers}
              onChange={handleFollowersChange}
              className="slider w-full bg-gray-200 appearance-none cursor-pointer range-lg dark:bg-gray-700"
            />
            <button className="w-16 py-2 px-4 bg-white text-[#003c3c] rounded-2xl shadow-xl">
              {followers.toLocaleString()}k
            </button>
          </div>

          {/* Monthly Earning */}
          <div className="flex flex-col justify-center items-center my-8 md:my-0">
            <p className="text-h4 font-semibold">Monthly Earning</p>
            <p className="text-h1 font-bold">
              ₹{calculateMonthlyEarning()}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col md:flex-row justify-around my-8 items-center">
          <div className="flex flex-col w-full md:w-1/2 gap-4 items-center">
            <p className="text-body1 font-semibold">
              How many products do you list monthly?
            </p>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={products}
              onChange={handleProductsChange}
              className="slider w-full bg-gray-200 appearance-none cursor-pointer range-lg dark:bg-gray-700"
            />
            <button className="w-16 py-2 px-4 bg-white text-[#003c3c] rounded-2xl shadow-xl">
              {products}
            </button>
          </div>

          {/* Yearly Earning */}
          <div className="flex flex-col justify-center items-center my-8 md:my-0">
            <p className="text-h4 font-semibold">Yearly Earning</p>
            <p className="text-h1 font-bold">₹{calculateYearlyEarning()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
