import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Utils/AuthProvider";

const Login = () => {
  const { user, signIn, signInGoogle, setLoading } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");

  // const navigate = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Successfully signed in");
        navigate(from, { replace: true });
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          setEmailError("Invalid email or password. Please try again.");
        } else {
          setPasswordError(errorMessage);
        }
      });
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        toast("successfully signed in");

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else if (!/[a-z]/.test(passwordInput)) {
      setPasswordError("Password must contain a lowercase letter");
    } else if (!/[A-Z]/.test(passwordInput)) {
      setPasswordError("Password must contain a uppercase letter");
    } else if (!/\d/.test(passwordInput)) {
      setPasswordError("Password must contain at least one number");
    } else {
      setPasswordError("");
    }
  };
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className=" md:flex justify-center my-10 ">
      <div className="w-full p-6 h-3/4 bg-white rounded-md shadow-2xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-cyan-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleForm} className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
              required
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handlePassword}
              className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <a
            href="#"
            className="text-xs from-cyan-500 to-cyan-500 hover:underline"
          >
            Forget Password?
          </a>
          <div>
            <div>
              {" "}
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <div>
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide transition-colors duration-200 transform bg-cyan-500   focus:outline-none focus:bg-cyan-600">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600 bg-cyan-50 hover:bg-cyan-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-md font-normal text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-lg text-cyan-500 to-cyan-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
