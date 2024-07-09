import React, { useState } from "react";

const Register = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    const registerData = {firstNameState, lastNameState, emailState, phoneNumberState, passwordState}
    console.log(registerData)
  }
  return (
    <div>
      <form onSubmit={submitForm} action="" className="border rounded bg-slate-100 w-[400px] p-2">
        <div className="flex items-center gap-2">
          <label htmlFor="firstName">FirstName:</label>
          <input
           value={firstNameState}
           onChange={(e) => setFirstNameState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="firstName"
            id="email"
            placeholder="Please enter your firstName"
          />
        </div>

        <div className="flex items-center gap-2 ">
          <label htmlFor="lastName">lastName:</label>
          <input
           value={lastNameState}
           onChange={(e) => setLastNameState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="lastName"
            id="email"
            placeholder="Please enter your lastName"
          />
        </div>

        <div className="flex items-center gap-2 ">
          <label htmlFor="email">Email Address:</label>
          <input
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="email"
            id="email"
            placeholder="Please enter your email"
          />
        </div>

        <div className="flex items-center gap-2 ">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            value={phoneNumberState}
            onChange={(e) => setPhoneNumberState(e.target.value)}
            className="w-[250px] mb-2"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Please enter your phone Number"
          />
        </div>

        <div className="flex items-center gap-2 ">
          <label htmlFor="password">Password:</label>
          <input
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            className="w-[250px] mb-2"
            type="password"
            name="password"
            id="email"
            placeholder="Please enter your password"
          />
        </div>

        <button className="w-full bg-blue-900 text-white hover:bg-blue-600 rounded shadow">
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
