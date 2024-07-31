import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { Oauth } from "../components";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("success");
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        console.log("success");
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  console.log(formData);
  return (
    <div className="mt-20 min-h-screen ">
      <div className="flex p-3 max-w-3xl mx-auto min-h-screen flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div>
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-lg text-white">
                NamasteNest
              </span>
              Blog
            </Link>
          </div>
          <p className="text-sm mt-5 italic font-semibold text-slate-600">
            Embark on a journey of words. Join our blogging community and let
            your thoughts take flight
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block">Your email</label>
              <input
                className="w-full p-2 rounded-md mt-1 text-black"
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block">Your password</label>
              <input
                className="w-full p-2 rounded-md mt-1 text-black"
                type="password"
                placeholder="*******"
                id="password"
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-orange-300 text-black hover:bg-orange-500 hover:text-white hover:shadow-lg outline transition duration-300 ease-in-out h-12 rounded-md"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  {/* <Spinner size="sm" /> */}
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
            <Oauth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <div className="mt-3">
              <span
                className="w-full block rounded-md p-1 bg-red-500 text-gray-300 text-center"
                color="failure"
              >
                {errorMessage}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
