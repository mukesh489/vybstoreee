// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <p className="font-semibold text-h1">Login</p>
        </div>

        <div className="rounded-full border border-gray-100 h-10 px-4 my-8 mx-auto flex items-center justify-center">
          <div className="text-center">Sign up / Sign in Google</div>
        </div>
        <div className="flex items-center justify-center">
          <hr className="flex-grow border-t border-[#e0e0e0]" />
          <span className="mx-2 text-body1 text-[#e0e0e0] font-semibold">
            OR
          </span>
          <hr className="flex-grow border-t border-[#e0e0e0]" />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="my-4">
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
            <div className="my-4 text-body1 text-[#003c3c] font-semibold cursor-pointer">
              <p>Reset Password</p>
            </div>
            <div className="w-auto flex justify-center ">
              <button
                type="submit"
                className="w-auto rounded-full py-2 px-12 border-2 border-[#003c3c] bg-blue-500 text-white text-body2 font-semibold hover:shadow-lg "
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-t-2 border-[#e0e0e0]" />
            <span className="mx-2 text-body1 text-[#e0e0e0] font-semibold">
              Dont Have Account?
            </span>
            <hr className="flex-grow border-t-2 border-[#e0e0e0]" />
          </div>
        </div>
        <div className="w-auto flex justify-center ">
          <Link to="/signup">
            <button className="w-auto rounded-2xl pb-3 py-2 px-12 border-2 bg-[#003c3c] text-othertxt text-h4 font-semibold hover:shadow-lg ">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
