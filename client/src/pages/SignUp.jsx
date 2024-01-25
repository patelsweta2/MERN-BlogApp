import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Label, TextInput } from "flowbite-react";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-lg text-white">
                NamasteNest
              </span>
              Blog
            </Link>
          </motion.div>
          <p className="text-sm mt-5">
            Embark on a journey of words. Join our blogging community and let
            your thoughts take flight
          </p>
        </div>
        <div className="flex-1">
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="text"
                  placeholder="name@gmail.com"
                  id="email"
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button gradientDuoTone="pinkToOrange" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
