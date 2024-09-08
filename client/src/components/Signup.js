import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Signup(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const res = await fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
      setError(data.errors);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      props.closeModalSignup();
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="p-6 bg-white text-blue-900 rounded-xl font-sans shadow-md">
        <h1 className="font-bold text-2xl text-center">Sign Up</h1>
        <p className="text-center mb-4">Create your account</p>
        <hr className="my-4"></hr>
        <div className="grid grid-cols-12 mb-4">
          <label
            htmlFor="name"
            className="font-bold flex items-center col-span-4"
          >
            Name
          </label>
          <input
            value={user.name}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.name = e.target.value;
              setUser(tempUser);
            }}
            type="text"
            placeholder="Enter Name"
            className="p-2 m-2 inline-block outline-none bg-blue-50 col-span-8 rounded-sm placeholder-blue-400"
          />
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.name}
          </span>
        </div>

        <div className="grid grid-cols-12 mb-4">
          <label
            htmlFor="email"
            className="font-bold flex items-center col-span-4"
          >
            Email
          </label>
          <input
            value={user.email}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.email = e.target.value;
              setUser(tempUser);
            }}
            type="text"
            placeholder="Enter Email"
            className="p-2 m-2 inline-block outline-none bg-blue-50 col-span-8 rounded-sm placeholder-blue-400"
          />
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.email}
          </span>
        </div>

        <div className="grid grid-cols-12 mb-4">
          <label
            htmlFor="password"
            className="font-bold flex items-center col-span-4"
          >
            Password
          </label>
          <input
            value={user.password}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.password = e.target.value;
              setUser(tempUser);
            }}
            type="password"
            placeholder="Enter Password"
            className="p-2 m-2 inline-block outline-none bg-blue-50 col-span-8 rounded-sm placeholder-blue-400"
          ></input>
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.password}
          </span>
        </div>

        <div className="grid grid-cols-12 mb-4">
          <label
            htmlFor="confirm-password"
            className="font-bold flex items-center col-span-4"
          >
            Confirm Password
          </label>
          <input
            value={user.confirmPassword}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.confirmPassword = e.target.value;
              setUser(tempUser);
            }}
            type="password"
            placeholder="Confirm Password"
            className="p-2 m-2 inline-block outline-none bg-blue-50 col-span-8 rounded-sm placeholder-blue-400"
          ></input>
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.confirmPassword}
          </span>
        </div>

        

        <div className="mt-4 text-center">
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#007BFF"
              height={50}
              width={50}
            />
          ) : (
            <button
              onClick={handleSignup}
              className="font-bold p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition delay-150 duration-200"
            >
              Sign Up
            </button>
          )}
        </div>

        <span className="flex justify-center py-4">
          <span className="pr-1">Already have an account? </span>
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={() => {
              props.closeModalSignup();
              props.openModalLogin();
            }}
          >
            Log In
          </span>
        </span>
      </div>
    </div>
  );
}
