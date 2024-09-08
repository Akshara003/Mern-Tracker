import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({
      email: "",
      password: "",
    });

    const res = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.errors) {
      setError(data.errors);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      props.closeModalLogin();
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="p-6 bg-white text-black rounded-xl font-lexend shadow-lg">
        <h1 className="font-bold text-2xl text-blue-600">Log In</h1>
        <p className="text-gray-600">Please log in to manage your expenses</p>
        <hr className="my-4 border-gray-300"></hr>
        <div className="grid grid-cols-12">
          <label
            htmlFor="email"
            className="font-bold flex items-center col-span-4 text-blue-600"
          >
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.email = e.target.value;
              setUser(tempUser);
            }}
            placeholder="Enter Email"
            className="p-2 m-2 inline-block outline-none col-span-8 bg-blue-100 rounded-sm placeholder-gray-500"
          />
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.email}
          </span>
        </div>

        <div className="grid grid-cols-12 ">
          <label
            htmlFor="password"
            className="font-bold flex items-center col-span-4 text-blue-600"
          >
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => {
              const tempUser = { ...user };
              tempUser.password = e.target.value;
              setUser(tempUser);
            }}
            placeholder="Enter Password"
            name="password"
            className="p-2 m-2 inline-block outline-none col-span-8 bg-blue-100 rounded-sm placeholder-gray-500"
          ></input>
          <span className="text-sm text-red-500 col-start-5 col-span-8">
            {error.password}
          </span>
        </div>
        <div className="mt-4">
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#007BFF"
              height={50}
              width={50}
            />
          ) : (
            <button
              onClick={handleLogin}
              className="font-bold py-3 px-6 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
            >
              Login
            </button>
          )}
        </div>
        <span className="flex justify-center py-2">
          <span className="pr-1">Don't have an account?</span>
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => {
              props.closeModalLogin();
              props.openModalSignup();
            }}
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
}
