import React, { useState } from "react";

const Form = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {emailState, passwordState}
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={submitForm} action="" className="border rounded bg-slate-100 w-[400px] p-2">
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email Address:</label>
          <input
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            className="w-[270px] mb-2"
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email address"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="password">Password:</label>
          <input
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            className="w-[270px] mb-2"
            type="password"
            name="password"
            id="password"
            placeholder="Please enter your password"
          />
        </div>

        <button className="w-full bg-black text-white hover:bg-gray-900 rounded shadow">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
