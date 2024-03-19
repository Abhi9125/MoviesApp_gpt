import React, { useState } from "react";
import Header from "./Header";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInAndSignUp = (e) => {
    e.preventDefault();
    return setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background_Image"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Enter email/phone"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4 w-full bg-red-600 rounded-lg">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        {isSignIn && (
          <>
            <p className="text-center">OR</p>
            <button className="p-4 my-4 w-full rounded-lg bg-gray-300 bg-opacity-20">
              Use a sign-in code
            </button>
          </>
        )}

        <div>
          {isSignIn ? "New to Netflix? " : "Already a user? "}

          <button
            className="hover:bg-blue-400"
            onClick={(event) => handleSignInAndSignUp(event)}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
