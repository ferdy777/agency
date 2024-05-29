"use client";
import { FormEvent, useState } from "react";
import ButtonRed from "./Button/ButtonRed";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: FormEvent) => {
    e.target;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="text-center">
        <ButtonRed text="Sign up" />
      </div>
    </form>
  );
};

export default SignUpForm;
