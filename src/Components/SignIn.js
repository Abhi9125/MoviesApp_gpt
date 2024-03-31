// Importing React and useState hook from React library
import React, { useRef, useState } from "react";
// Importing the Header component
import Header from "./Header";
import checkValiditation from "../Utils/Validitation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import { auth } from "../Utils/firebase";

// SignIn component definition
const SignIn = () => {
  // State hook for managing sign-in and sign-up toggle
  const [isSignIn, setIsSignIn] = useState(true);

  const navigate = useNavigate();

  //  State hook for handle error message
  const [errorMessage, setErrorMessage] = useState("");

  // Creating refrence variable that hold the value of input field.
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // Event handler for toggling between sign-in and sign-up
  const handleSignInAndSignUp = (e) => {
    console.log(e);
    e.preventDefault(); // Event handler for toggling between sign-in and sign-up
    return setIsSignIn(!isSignIn); // Toggles the state between true and false
  };

  // Event Handler for submit for validitation
  const handleSubmitButtonForValiditation = () => {
    // console.log("handle");
    // console.log(email);
    // console.log(password);

    // Call function on bases of sign in and sign up.
    const response = isSignIn
      ? checkValiditation(email.current.value, password.current.value)
      : checkValiditation(
          email.current.value,
          password.current.value,
          name.current.value
        );
    // Update the state of errorMessage if validitation fail.
    setErrorMessage(response);

    // If form is valid then go for authentication.
    if (response === null) {
      //Sign up register user.
      if (isSignIn === false) {
        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        // Sign In user after authentication.
        const auth = getAuth();
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    }
  };

  /**
  //  ! This code for handle validitation by using state hook.
  *   const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmitButtonForValiditation = () => {
    // console.log("handle");
    // console.log(email);
    // console.log(password);

    // Call function on bases of sign in and sign up.
    const response = checkValiditation(emailInput, passwordInput);
    setErrorMessage(response);
  };
  * 
  */

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        {/* Dynamic heading based on sign-in or sign-up state */}
        <h1 className="font-bold text-2xl my-4">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {/* Conditional rendering for sign-up input field */}
        {isSignIn === false && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          />
        )}
        {/* Input fields for email/phone and password */}
        <input
          ref={email}
          // onChange={(e) => setEmailInput(e.target.value)}
          type="text"
          placeholder="Enter email/phone"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          // onChange={(e) => setPasswordInput(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="p-3 my-3 w-full bg-red-600 rounded-lg"
          onClick={handleSubmitButtonForValiditation}
        >
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
