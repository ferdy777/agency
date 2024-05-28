import React from "react";
import ButtonBlue from "./Button/ButtonBlue";

const Form = () => {
  return (
    <div>
      <div>
        <form className="flex flex-col items-center justify-center mx-auto ">
          <h2 className="text-2xl mb-3 font-bold text-center">Login</h2>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            className="mt-1 block text-center max-w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm"
            type="text"
            placeholder="Enter your name"
            required
          />
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            className="mt-1 block text-center max-w-full mb-2 p-2 border outline-none border-gray-300 rounded-md shadow-sm"
            type="text"
            placeholder="Enter your password "
            required
          />
          {/* <button className="py-2 px-20 text-center pl-2 border border-red-500 bg-blue-600 rounded mt-3 mx-auto">
            login
          </button> */}
          <ButtonBlue text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Form;
