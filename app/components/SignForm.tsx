import React from "react";
import ButtonBlue from "./Button/ButtonBlue";
import ButtonRed from "./Button/ButtonRed";

const SignForm = () => {
  return (
    <div>
      <div>
        <form className="flex flex-col items-center justify-center mx-auto pt-[5rem] pb-[3rem]">
          <h2 className="text-2xl mb-3 font-bold text-center">Sign Up</h2>
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
          <ButtonRed text="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default SignForm;
