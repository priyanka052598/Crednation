


import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaDollarSign } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import "../../src/global.css"
import axios from 'axios'; // Add axios for making API calls
import { toast } from "react-toastify";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const RegisterAsAGuard1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    userType:"guard"
  });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    if (name === "fullName" && !value.trim()) {
      error = "Full name is required.";
    } else if (
      name === "email" &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    ) {
      error = "Invalid email format.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters.";
    }
    return error;
  };

  const handleChange = (e) => {
    console.log("e",e)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });
    // setErrors(newErrors);
    if (!Object.values(newErrors).some((error) => error)) {
      try {
        // Send data to API
        const response = await axios.post(
          "http://185.142.34.143:5001/execute-flow/flow_284908e8-a001-43a1-bf25-e1f74e06f5af",
          formData
        );
        console.log("Response:", response.data);

        // Navigate to the next page if API call is successful
        navigate("/register2", { state: response?.data });
      } catch (error) {
        // console.error("Error during API call:", error.response ? error.response.data : error.message);
        // Optionally, display an error message to the user, for example:
        // alert("An error occurred while submitting the form. Please try again.");
        toast.error("Please fill all fields properly")
      }

    } else {
      // Handle the case where there are form validation errors
      console.log("Validation errors:", newErrors);
      // Optionally, display validation error messages to the user
    }

  };
  return (
    <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-center justify-start min-w-[300px] text-left text-base text-ripe-plum-50 font-lg-normal">
      <Header />
      <div className=" bg-gradient-to-b from-[#19191C] to-[#22142C] flex flex-row items-start justify-start flex-wrap content-start py-10 px-8 gap-4 text-11xl text-components-button-component-primarycolor">
        <div className="flex-col flex  items-center justify-start g min-w-[280px]">
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col items-start justify-start gap-7 text-base">
            <div className="flex flex-col ">
              <div className="self-stretch relative text-[30px] font-semibold">Guard Registration</div>
              <img className="w-[100px] relative h-1" alt="" src="/vector2.svg" />
            </div>
            {Object.keys(formData).map((field, index) => (
              <div key={index} className="self-stretch flex flex-col items-start justify-start gap-1">
                <label className="self-stretch relative leading-[24px] font-semibold">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className={`self-stretch rounded-components-input-global-borderradiussm bg-gray-250 border-[1px] border-solid box-border h-[50px] flex flex-row items-center justify-start py-0 px-4 text-sm ${errors[field] ? "border-red-500" : "border-darkslategray"}`}>
                {
                  field==="phoneNumber"?  <PhoneInput
                  className="phone-input-container outline-none"
                  placeholder="Enter phone number"
                  value={formData[field]}
                  onChange={(e)=>{
                    console.log("e")
                  }}
                  defaultCountry="IN"
  international


                  />:
               
                  <input
                    className="peer bg-transparent outline-none font-lg-normal text-sm flex-1 leading-[22px] text-darkgray text-left autofill:bg-red-300"
                    placeholder={`Enter your ${field}`}
                    type={field === "password" ? "password" : field === "email" ? "email"  : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                }
                </div>
                {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
              </div>
            ))}
            <button type="submit" className="cursor-pointer [border:none] py-[15px] px-12 bg-ripe-plum-950 self-stretch shadow rounded-lg h-[59px] flex flex-row items-center justify-center">
              <div className="relative text-base leading-[24px] font-lg-normal text-ripe-plum-50 text-center">Next</div>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAsAGuard1;
