import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-200 w-1/2 mx-auto mt-10  flex items-center justify-center">
      <form action="" method="post">
        <div className="mb-4 mt-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-700 font-light"
            type="text"
            id="name"
            placeholder="full name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-700 font-light"
            type="email"
            id="email"
            placeholder="email address"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            passwaord
          </label>
          <input
            className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-700 font-light"
            type="password"
            id="passward"
            placeholder="passward"
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-normal"
          type="button "
        >
          LOG IN
        </button>
        <p className="w-full px-3 font-normal text-sm">
          are you a new customer?{" "}
          <a
            className="text-lg text-blue-500 hover:text-red-500"
            href="http://"
          >
            signup here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
