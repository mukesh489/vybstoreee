// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <section className="w-full h-full flex flex-row">
      <div className="bg-[#e5f0f1] h-[100vh] flex-shrink-0 w-[60vw] flex items-center justify-end px-16 pt-32">
        <img
          src="/Images/login.svg"
          alt="Login"
          className="object-contain w-4/5 mt-2"
        />
      </div>
      <div className="bg-othertxt w-full h-full text-primarytxt flex flex-col mt-32 mr-32 px-16">
        <div className="flex justify-center">
          <p className="font-semibold text-h1">Sign Up</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="my-4">
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-h3 font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003c3c]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-h3 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003c3c]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-h3 font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003c3c]"
              />
            </div>
            <div className="my-8 text-body1 text-[#003c3c] font-semibold cursor-pointer flex flex-col items-center">
              <p className="flex">Are You A Creator?</p>
              <div className="flex flex-row justify-around">
                <div className="w-12 h-auto flex items-center justify-center border border-[#003c3c] rounded-sm cursor-pointer hover:bg-gray-200 mr-4 text-[#003c3c] text-h4 font-bold">
                  Yes
                </div>
                <div className="w-12 h-auto flex items-center justify-center border border-[#003c3c] rounded-sm cursor-pointer hover:bg-gray-200 text-[#003c3c] text-h4 font-bold">
                  No
                </div>
              </div>
            </div>
            <div className="w-auto flex justify-center ">
              <button
                type="submit"
                className="w-auto rounded-full py-2 px-12 border-2 border-[#003c3c] bg-blue-500 text-white text-body2 font-semibold hover:shadow-lg "
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <p className="flex ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#003c3c] text-body1 mx-1  cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
