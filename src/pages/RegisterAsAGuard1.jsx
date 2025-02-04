import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaDollarSign } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";



const RegisterAsAGuard1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!/^[0-9]{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      navigate("/register2", { state: formData });
    }
  };
  

  return (
    <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[360px] text-left text-base text-ripe-plum-50 font-lg-normal">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-16 px-8 gap-8 text-11xl text-components-button-component-primarycolor">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px]">
          <form
            onSubmit={handleSubmit}
            className="self-stretch flex flex-col items-start justify-start gap-12 text-base"
          >
            <div className="flex flex-col gap-3">
            <div className="self-stretch relative text-[30px] font-semibold whitespace-pre-wrap">
              Guard Registration
            </div>
            <img className="w-[100px] relative h-1" alt="" src="/vector2.svg" />
            </div>
         

            {["full name", "phone number", "email", "password"].map(
              (field, index) => (
                <div
                  key={index}
                  className="self-stretch flex flex-col items-start justify-start gap-2"
                >
                  <label className="self-stretch relative leading-[24px] font-semibold">
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                    *
                  </label>
                  <div
                    className={`self-stretch rounded-components-input-global-borderradiussm bg-gray-250 border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm ${
                      errors[field] ? "border-red-500" : "border-darkslategray"
                    }`}
                  >
                    <input
                      className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left"
                      placeholder={`Enter your ${field}`}
                      type={
                        field === "password"
                          ? "password"
                          : field === "email"
                          ? "email"
                          : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors[field] && (
                    <p className="text-red-500 text-xs">{errors[field]}</p>
                  )}
                </div>
              )
            )}

            <p className="w-full text-xs leading-[20px] text-right">
              * Indicates mandatory fields
            </p>

            <button
              type="submit"
              className="cursor-pointer [border:none] py-[15px] px-12 bg-ripe-plum-950 self-stretch shadow rounded-lg h-[59px] flex flex-row items-center justify-center"
            >
              <div className="relative text-base leading-[24px] font-lg-normal text-ripe-plum-50 text-center">
                Next
              </div>
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-8 min-w-[280px] max-w-[480px] text-xl">
          <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#18181b,_#2c0c40_57.5%,_#3e065f)] flex flex-col items-start justify-center p-8 gap-size-base-size">
            <div className="self-stretch relative leading-[28px] font-semibold">
              Why Join Our Security Team?
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
                <RiGraduationCapFill className="text-[#3E065F] text-[26px]"/>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-1">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Professional Development
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px]">
                    Continuous training and career advancement opportunities
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
                  <FaDollarSign className="text-[#3E065F] text-[26px]"/>
                  {/* <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/clip-path-group3.svg"
                  /> */}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-1">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Competitive Pay
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px]">
                    Industry-leading compensation and benefits package
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
                <FaClock className="text-[#3E065F] text-[26px]"/>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-1">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Flexible Schedule
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px]">
                    Various shift options to fit your lifestyle
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-bunker-950 flex flex-col items-start justify-center p-8 gap-size-base-size text-base text-ripe-plum-100">
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="w-12 relative h-12 object-cover"
                alt=""
                src="/photo15070032111690a1dd7228f2d-1@2x.png"
              />
              <div className="flex flex-col items-start justify-center">
                <div className="relative leading-[24px] font-semibold">
                  Michael Rodriguez
                </div>
                <div className="relative text-xs leading-[20px] text-bunker-300">
                  Senior Security Officer
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center text-bunker-300">
              <div className="self-stretch relative leading-[24px]">
                "Joining the team was one of the best career decisions I've
                made. The professional environment and growth opportunities are
                exceptional."
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterAsAGuard1;
