// Importing React and useState hook from React library
import React, { useState } from "react";
// Importing the Header component
import Header from "./Header";

// SignIn component definition
const SignIn = () => {
  // State hook for managing sign-in and sign-up toggle
  const [isSignIn, setIsSignIn] = useState(true);

  // Event handler for toggling between sign-in and sign-up
  const handleSignInAndSignUp = (e) => {
    e.preventDefault(); // Event handler for toggling between sign-in and sign-up
    return setIsSignIn(!isSignIn); // Toggles the state between true and false
  };

  // Component return statement
  return (
    <div>
      {/* Renders the Header component */}
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background_Image"
        />
      </div>

      {/* Form for sign-in or sign-up */}
      <form className="w-3/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        {/* Dynamic heading based on sign-in or sign-up state */}
        <h1 className="font-bold text-2xl my-4">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {/* Conditional rendering for sign-up input field */}
        {isSignIn === false && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          />
        )}
        {/* Input fields for email/phone and password */}
        <input
          type="text"
          placeholder="Enter email/phone"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-3 my-3 w-full bg-red-600 rounded-lg">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        {isSignIn && (
          <>
            <p className="text-center">OR</p>
            <button className="p-3 my-3 w-full rounded-lg bg-gray-300 bg-opacity-20">
              Use a sign-in code
            </button>
          </>
        )}
        {/* Toggle link between sign-in and sign-up */}
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
