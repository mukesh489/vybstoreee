// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <section className="mt-32 flex justify-center h-auto w-full ">
      <div className="flex flex-row justify-center gap-4  container mx-auto lg:w-[75vw] md:w-[90vw] h-auto ">
        <div className="flex basis-2/6 flex-col items-center text-[#003c3c] rounded-lg border-2 w-full h-auto border-primarytxt py-2 px-8">
          <div>
            <img src="/Images/profile.svg" alt="Profile photo" />
          </div>
          <div className="">
            <p>Change Profile Picture</p>
          </div>
          <div className="text-h2 text-primarytxt font-bold my-2">
            <p>Samira Hadid</p>
          </div>
          <div className="text-body1 font-semibold rounded-lg border-2 w-full h-auto border-[#003c3c] flex py-2 justify-center my-2">
            Profile
          </div>
          <div className="text-body1 font-semibold bg-[#003c3c]  text-othertxt rounded-lg border-2 w-full h-auto border-[#003c3c] flex py-2 justify-center my-2">
            My Store
          </div>
          <div className="text-body1 font-semibold rounded-lg border-2 w-full h-auto border-[#003c3c] flex py-2 justify-center my-2">
            Earnings
          </div>
          <div className="text-body1 font-semibold rounded-lg border-2 w-full h-auto border-[#003c3c] flex py-2 justify-center my-2">
            Address
          </div>
          <div className="text-body1 font-semibold bg-[#003c3c] text-othertxt rounded-lg border-2 w-full h-auto border-[#003c3c] flex py-2 justify-center my-2">
            Logout
          </div>
        </div>
        <div className="flex basis-4/6 flex-col items-left  rounded-lg border-2 w-full h-auto border-primarytxt py-2 px-8">
          <div className="text-h2 text-primarytxt font-bold my-2">
            <p>Profile</p>
          </div>
          <form onSubmit={handleSubmit} className="my-4">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-body1 font-bold text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003c3c]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-body1 font-bold text-gray-700"
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
                className="block text-body1 font-bold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
