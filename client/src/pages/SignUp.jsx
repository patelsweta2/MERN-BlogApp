import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oauth } from "../components";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // setIsAdmin(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all details");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage("user already exists");
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  console.log(formData);
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl min-h-screen mx-auto flex-col md:flex-row md:items-center gap-5">
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
              <label className="block">Your username</label>
              <input
                className="w-full rounded-md mt-1 text-black"
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block">Your email</label>
              <input
                className="w-full rounded-md mt-1 text-black"
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block">Your password</label>
              <input
                className="w-full rounded-md mt-1 text-black"
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            {/* <div className="flex items-center gap-2">
              <Radio id="user" name="user" value="User" defaultChecked />
              <Label htmlFor="user">User</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="admin" name="admin" value="Admin" />
              <Label htmlFor="admin">Admin</Label>
            </div> */}

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
                "Sign Up"
              )}
            </button>
            <Oauth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
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

export default SignUp;
