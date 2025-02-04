import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// Removed axios import temporarily
// import axios from "axios";

const FrameComponent = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState({
    minLength: false,
    upperCase: false,
    number: false,
    specialChar: false,
  });
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    const errors = {
      minLength: password.length < 8,
      upperCase: !/[A-Z]/.test(password),
      number: !/[0-9]/.test(password),
      specialChar: !/[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordErrors(errors);
    return !Object.values(errors).includes(true); // Returns true if no errors
  };

  // Handle login, without calling the API for now
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Check if email or password is empty
    if (!email || !password) {
      setError("Both email and password are required.");
      setLoading(false);
      return;
    }

    // Validate email and password
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      setError("Please check the password requirements.");
      setLoading(false);
      return;
    }

    // Temporarily bypassing the API call, simulating a successful login response
    // Simulate success for now (you can mock based on your conditions)
    setTimeout(() => {
      setLoading(false);
      navigate("/home"); // Navigate to /home
    }, 1000); // Simulate a delay of 1 second
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleLogin}
      className={`m-0 flex flex-col items-start justify-start gap-4 min-w-[240px] max-w-[600px] w-full ${className}`}
    >
      {/* Email Field */}
      <div className="w-full flex flex-col items-start justify-start gap-2 max-w-full">
        <div className="self-stretch relative text-base leading-[24px] font-semibold font-sm-strong text-components-button-component-primarycolor text-left">
          Email Address
        </div>
        <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[15px] min-h-[56px] max-w-full">
          <img
            className="h-5 w-5"
            alt="Email Icon"
            src="/clip-path-group.svg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-transparent text-darkgray border-none outline-none px-2"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <div className="relative text-base leading-[24px] font-semibold font-sm-strong text-components-button-component-primarycolor text-left inline-block min-w-[70px]">
          Password
        </div>
        <div
          className="cursor-pointer text-xs leading-[20px] font-semibold font-sm-strong text-ripe-plum-500 text-left inline-block min-w-[96px]"
          onClick={() => {
            /* Forgot Password functionality */
          }}
        >
          Forgot Password?
        </div>
      </div>
      <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-[15px] gap-2.5 min-h-[56px] max-w-full">
        <img
          className="h-5 w-5"
          alt="Password Icon"
          src="/clip-path-group-1.svg"
        />
        <input
          type={showPassword ? "text" : "password"} // Toggle between password and text
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full bg-transparent text-darkgray border-none outline-none px-2"
          required
        />
        <div onClick={togglePasswordVisibility} className="cursor-pointer">
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </div>
      </div>

      {/* Dynamically Render Error Message Box */}
      {(passwordErrors.minLength ||
        passwordErrors.upperCase ||
        passwordErrors.number ||
        passwordErrors.specialChar) && (
        <div className="self-stretch rounded-lg bg-gray-300 overflow-hidden flex flex-col items-start justify-start p-4 gap-2">
          {passwordErrors.minLength && (
            <div className="flex flex-row items-start justify-start gap-1">
              <img
                className="w-5 relative h-5"
                alt=""
                src={
                  passwordErrors.minLength ? "/cancel.svg" : "/check-circle.svg"
                }
              />
              <div className="relative leading-[20px]">
                At least 8 characters
              </div>
            </div>
          )}
          {passwordErrors.upperCase && (
            <div className="flex flex-row items-start justify-start gap-1">
              <img
                className="w-5 relative h-5"
                alt=""
                src={
                  passwordErrors.upperCase ? "/cancel.svg" : "/check-circle.svg"
                }
              />
              <div className="relative leading-[20px]">
                Mix of uppercase & lowercase letters
              </div>
            </div>
          )}
          {passwordErrors.number && (
            <div className="flex flex-row items-start justify-start gap-1">
              <img
                className="w-5 relative h-5"
                alt=""
                src={
                  passwordErrors.number ? "/cancel.svg" : "/check-circle.svg"
                }
              />
              <div className="relative leading-[20px]">At least one number</div>
            </div>
          )}
          {passwordErrors.specialChar && (
            <div className="flex flex-row items-start justify-start gap-1">
              <img
                className="w-5 relative h-5"
                alt=""
                src={
                  passwordErrors.specialChar
                    ? "/cancel.svg"
                    : "/check-circle.svg"
                }
              />
              <div className="relative leading-[20px]">
                At least one special character
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Message (Invalid credentials) */}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      {/* Submit Button */}
      <button
        type="submit"
        className={`shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-950 flex flex-row items-center justify-center py-[18.5px] px-[30px] cursor-pointer w-full mq450:pl-5 mq450:pr-5 mq675:pl-[141px] mq675:pr-[141px] mq675:box-border ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        <span className="relative text-sm leading-[22px] font-sm-strong text-ripe-plum-50 text-center">
          {loading ? "Loading..." : "Login"}
        </span>
      </button>


      {/* Credentials Encryption Message */}
      <div className="self-stretch flex flex-row items-center justify-center gap-0 text-sm text-darkgray">
        <img
          className="w-[17.5px] relative h-[17.5px]"
          alt=""
          src="/group.svg"
        />
        <div className="relative leading-[22px]">
          Your credentials are securely encrypted
        </div>
      </div>
    </form>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
