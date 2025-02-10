import { useCallback, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Country, State, City } from 'country-state-city';
import { MenuItem, Select } from "@mui/material";
const countries = Country.getAllCountries('');
const states = State.getStatesOfCountry("US");
// const cities = shippingInfo.state ? City.getCitiesOfState(shippingInfo.country.isoCode, shippingInfo.state.isoCode) : [];

const SignUp = () => {
  const navigate = useNavigate();

  const onRegisterButtonRegisterClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

      const [selectedState, setSelectedState] = useState("");
      const [selectedCity, setSelectedCity] = useState("");
      const [cities, setCities] = useState([])
  

  // State for errors
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      evaluatePasswordStrength(value);
    }
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid  phone number";
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Enter strong password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // alert("Please correct the highlighted errors.");
      return false;
    }

    return true;
  };


  const handleChangeState = (event) => {
    console.log(" aaaaaaaaaaaaaaaaaaaaa ", event.target)
    setSelectedState(event.target.value);
    const extractedCities = City.getCitiesOfState("US", event.target.value)
    console.log(extractedCities)
    setCities(extractedCities)
  };

  const handleChangeCity = (event) => {
    console.log(" ddddddddddddddddddddddd ", event.target)
    console.log(event.target)
    setSelectedCity(event.target.value);
  };

  const validatePassword = (password) => {
    let newErrors = { ...errors };

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.";
    } else {
      delete newErrors.password;
    }

    setErrors(newErrors);
  };

  // Handle form submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //  setLoading(true);
  //   console.log(formData)

  //   if (!validateForm()) return;

  //   formData['userType'] = "Customer"

  //   const response = await axios.post(
  //     "https://engine.flashbuild.ai/execute-flow/flow_e9af1788-2ab2-4b41-a9cc-fa1da6fc1013",
  //     formData
  //   );
    
  //   let result = JSON.parse(response.data)
    
  //   console.log("Response:", result);
  //   localStorage.setItem("userId", result?.result?.userId)

  //   // Simulating a successful registration without an API call
  //   toast.success("Registration Successful!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  //   navigate("/home");
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // Step 2: Start loading

    try {
        formData['userType'] = "Customer";

        const response = await axios.post(
            "https://engine.flashbuild.ai/execute-flow/flow_e9af1788-2ab2-4b41-a9cc-fa1da6fc1013",
            formData
        );

        let result = JSON.parse(response.data);
        console.log("Response:", result);
        localStorage.setItem("userId", result?.result?.userId);

        toast.success("Registration Successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        navigate("/home");
    } catch (error) {
        console.error("Error:", error);
        toast.error("Registration Failed. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } finally {
        setLoading(false); 
    }
};
  return (
    <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] h-[1157px] overflow-hidden text-center text-11xl text-ripe-plum-50 font-lg-normal">
      <ToastContainer />
      <div className="absolute top-[calc(50%_-_500.5px)] left-[50%] transform -translate-x-1/2 w-full max-w-[400px] h-auto sm:max-w-[90%] sm:h-auto md:h-[929px] flex flex-col items-center justify-start gap-10">
        <div className="w-full max-w-[296px] flex flex-col items-center justify-center gap-4">
          <img
            className="w-20 relative h-20"
            alt=""
            src="/vector-register.svg"
            onClick={onRegisterButtonRegisterClick}
          />
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="relative leading-[38px] font-semibold">
              Register
            </div>
            <div className="relative text-sm leading-[22px] text-darkgray text-left">
              Create your account
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col items-start justify-start gap-4 text-left text-base text-components-button-component-primarycolor">
            <div className=" h-[88px] w-full flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Full Name*
              </div>
              <div className="w-full  rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
                <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/clip-path-group2.svg"
                  />
                  <input
                    className="outline-none font-lg-normal text-sm bg-transparent flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis p h-[22px]"
                    placeholder="Enter your full name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                 
                </div>
             
              </div>
             
            </div>
            {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon--infocircleoutlined.svg"
                  />

            <div className="self-stretch h-[88px] flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Email Address*
              </div>
              <div className="w-full sm:w-[401px] md:w-[600px] lg:w-[800px] xl:w-[450px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
                <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/clip-path-group3.svg"
                  />
                  <input
                    className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon--infocircleoutlined.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Phone Number*
              </div>
              <div className="w-full sm:w-[401px] md:w-[600px] lg:w-[800px] xl:w-[450px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
                <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/clip-path-group4.svg"
                  />
                  <input
                    className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]"
                    placeholder="Enter your phone number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon--infocircleoutlined.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-darkgray">
              <div className="self-stretch flex flex-row items-start justify-start text-base text-components-button-component-primarycolor">
                <div className="relative leading-[24px] font-semibold">
                  Password*
                </div>
              </div>
              <div className="w-full sm:w-[401px] md:w-[600px] lg:w-[800px] xl:w-[450px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
              <div className="w-full h-[57px] flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                  <img className="w-5 h-5" alt="" src="/clip-path-group5.svg" />
                  <input
                    className="[border:none] [outline:none] text-sm bg-[transparent] flex-1 leading-[22px] text-darkgray text-left h-[22px]"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <img
                    className="w-5 h-5 cursor-pointer"
                    alt="Toggle Password"
                    src="/clip-path-group6.svg"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ opacity: showPassword ? 0.5 : 1 }} // Optional: Reduce opacity when password is visible
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-darkgray">
              <div className="self-stretch flex flex-row items-start justify-start text-base text-components-button-component-primarycolor">
                <div className="relative leading-[24px] font-semibold">
                  State
                </div>
              </div>
              <div className="w-full sm:w-[401px] md:w-[600px] lg:w-[800px] xl:w-[450px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
              <div className="w-full h-[57px] flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">

              <Select
                    id="state"
                    name="state"
                    value={selectedState}
                    onChange={handleChangeState}
                    // required
                    displayEmpty
                    sx={{
                      width: "100%",
                      height: "100%",
                      color: "white",
                      outline: "none"
                    }}
                  >
                    <MenuItem value="" disabled>Select a state</MenuItem>
                    {console.log(states)}
                    {states.map((state) => (
                      <MenuItem key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-darkgray">
              <div className="self-stretch flex flex-row items-start justify-start text-base text-components-button-component-primarycolor">
                <div className="relative leading-[24px] font-semibold">
                  City
                </div>
              </div>
              <div className="w-full sm:w-[401px] md:w-[600px] lg:w-[800px] xl:w-[450px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-input-global-colortext font-base-base-normal">
              <div className="w-full h-[57px] flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
              <Select
  id="city"
  name="city"
  value={selectedCity}
  onChange={handleChangeCity}
  displayEmpty
  sx={{
    width: "100%",
    height: "100%",
    color: "white",
    outline: "none"
  }}
>
  <MenuItem value="" disabled>Select a City</MenuItem>

  {cities.map((city) => (
    // Use something unique for the value, such as city.name or city.isoCode:
    <MenuItem key={city.name} value={city.name}>
      {city.name}
    </MenuItem>
  ))}
</Select>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="font-lg-normal text-ripe-plum-50 text-center [border:none] py-[15px] px-12 bg-ripe-plum-950 self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg h-[59px] flex flex-row items-center justify-center box-border"
              disabled={loading}
            >
              {loading ? (
                              <AiOutlineLoading3Quarters className="animate-spin text-white text-xl" />
                            ) : (
                              " Register"
                            )}
             
            </button>
            <div className="self-stretch flex flex-row items-center justify-center gap-2 text-sm text-darkgray">
              <img
                className="w-[17.5px] relative h-[17.5px]"
                alt=""
                src="/group.svg"
              />
              <div className="relative leading-[22px]">
                Your credentials are securely encrypted
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-1 text-darkgray">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[24px]">
                  Already have an account?
                </div>
              </div>
              <Link
                to="/login" // Update the path as needed
                className="cursor-pointer text-base underline leading-[24px] font-lg-normal text-ripe-plum-500 text-left"
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
