import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/testimonial";
import {
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineAppstore,
  AiOutlineCreditCard,
  AiOutlineSearch,
  AiOutlineTeam,
  AiOutlineSafetyCertificate,
  AiOutlineCheckCircle,
  AiOutlineDollarCircle,
  AiOutlineCustomerService,
} from "react-icons/ai";

const Home = () => {
  const [formData, setFormData] = useState({
    address: "",
    startDate: "",
    endDate: "",
    serviceType: "",
    minBudget: "",
    maxBudget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "minBudget" && value < 0) {
      return;
    }
    if (name === "maxBudget" && value < 0) {
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data (You can replace this with an API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[320px] text-left text-19xl text-bunker-50 font-lg-normal">
      <Header />
      <div className="self-stretch overflow-hidden flex flex-col md:flex-row items-start justify-start flex-wrap content-start py-8 md:py-16 px-4 md:px-8 box-border gap-4 md:gap-8 min-w-[320px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[256px]">
          <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="text-2xl font-semibold leading-[46px]">
                Find Trusted Security Guards Anytime, Anywhere
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-bunker-100">
                Connect with verified security professionals for your business
                or event needs. Available 24/7, nationwide coverage.
              </div>
            </div>

            {/* Input Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Address Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px]">
                <AiOutlineEnvironment className="text-darkgray text-xl" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full bg-transparent text-darkgray border-none outline-none px-2"
                />
              </div>

              {/* Start Date Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px]">
                <AiOutlineCalendar className="text-darkgray text-xl" />
                <input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-darkgray border-none outline-none px-2 [&::-webkit-calendar-picker-indicator] [&::-webkit-calendar-picker-indicator]:hover:bg-gray-300 [&::-webkit-calendar-picker-indicator]:rounded [&::-webkit-calendar-picker-indicator]:p-1"
                  style={{
                    colorScheme: "dark",
                  }}
                />
              </div>

              {/* End Date Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px]">
                <AiOutlineClockCircle className="text-darkgray text-xl" />
                <input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-darkgray border-none outline-none px-2 [&::-webkit-calendar-picker-indicator] [&::-webkit-calendar-picker-indicator]:hover:bg-gray-300 [&::-webkit-calendar-picker-indicator]:rounded [&::-webkit-calendar-picker-indicator]:p-1"
                  style={{
                    colorScheme: "dark",
                  }}
                />
              </div>

              {/* Service Type Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px]">
                <AiOutlineAppstore className="text-darkgray text-xl" />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-darkgray border-none outline-none px-2"
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Event Guard">Event Guard</option>
                  <option value="Patrol Guard">Patrol Guard</option>
                  <option value="VIP Protection">VIP Protection</option>
                </select>
              </div>

              {/* Min Budget Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px] relative">
                <AiOutlineCreditCard className="text-darkgray text-xl mr-2" />
                <span className="absolute left-12 text-darkgray text-sm font-medium">
                  $
                </span>
                <input
                  type="number"
                  name="minBudget"
                  value={formData.minBudget}
                  onChange={handleChange}
                  placeholder="Min. Budget"
                  className="w-full bg-transparent text-darkgray border-none outline-none pl-6" // Added padding-left
                />
              </div>

              {/* Max Budget Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[50px] md:h-[57px] relative">
                <AiOutlineCreditCard className="text-darkgray text-xl mr-2" />
                <span className="absolute left-12 text-darkgray text-sm font-medium">
                  $
                </span>
                <input
                  type="number"
                  name="maxBudget"
                  value={formData.maxBudget}
                  onChange={handleChange}
                  placeholder="Max. Budget"
                  className="w-full bg-transparent text-darkgray border-none outline-none pl-6" // Added padding-left
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 md:h-14 mt-4 md:mt-6 bg-ripe-plum-950 hover:bg-blue-500 transition-all duration-300 ease-in-out rounded-lg text-base text-white font-semibold p-3 md:p-4"
            >
              Search Guards
            </button>
          </form>
        </div>

        <img
          className="flex-1 rounded-lg max-w-full md:max-w-[560px] overflow-hidden h-auto md:h-[548px] object-cover min-w-[256px]"
          alt=""
          src="/image-1-1@2x.png"
        />
      </div>

      <div className="self-stretch [background:linear-gradient(5.34deg,_#1c032b,_#3e065f)] flex flex-col items-center justify-start py-16 px-8 box-border gap-16 min-w-[320px] text-center">
        <div className="relative leading-[46px] font-semibold">
          How it Works
        </div>
        <div className="flex justify-center">
          <div className="flex items-center justify-center flex-wrap content-center gap-x-8 gap-y-16 min-w-[320px] text-xl text-components-button-component-primarycolor mx-auto">
            <div className="flex flex-col items-center justify-center gap-size-base-size min-w-[256px] max-w-[440px]">
              <div className="rounded-45xl bg-ripe-plum-50 flex items-center justify-center p-6">
                <AiOutlineSearch
                  className="text-5xl text-purple-700"
                  style={{
                    filter:
                      "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                    width: "40px", // Directly controlling width
                    height: "40px", // Directly controlling height
                  }}
                />
              </div>
              <div className="w-[405.8px] flex flex-col items-center justify-center gap-4">
                <div className="self-stretch leading-[28px] font-semibold">
                  Search Guests
                </div>
                <div className="w-[257.3px] text-base leading-[24px] inline-block">
                  Browse through our network of verified security professionals
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-size-base-size min-w-[256px] max-w-[440px]">
              <div className="rounded-45xl bg-ripe-plum-50 flex items-center justify-center p-6">
                <AiOutlineTeam
                  className="text-5xl text-purple-700"
                  style={{
                    filter:
                      "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                    width: "40px", // Directly controlling width
                    height: "40px", // Directly controlling height
                  }}
                />
              </div>
              <div className="w-[405.8px] flex flex-col items-center justify-center gap-4">
                <div className="self-stretch leading-[28px] font-semibold">
                  Connect
                </div>
                <div className="w-[259.7px] text-base leading-[24px] inline-block">
                  Choose the right guard and discuss your requirements
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-size-base-size min-w-[256px] max-w-[440px]">
              <div className="rounded-45xl bg-ripe-plum-50 flex items-center justify-center p-6">
                <AiOutlineSafetyCertificate
                  className="text-5xl text-purple-700"
                  style={{
                    filter:
                      "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                    width: "40px", // Directly controlling width
                    height: "40px", // Directly controlling height
                  }}
                />
              </div>
              <div className="w-[405.8px] flex flex-col items-center justify-center gap-4">
                <div className="self-stretch leading-[28px] font-semibold">
                  Secure Your Space
                </div>
                <div className="w-[273.1px] text-base leading-[24px] inline-block">
                  Get professional security service with complete peace of mind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-200 flex flex-col items-start justify-start py-16 px-8 box-border gap-8 min-w-[320px] text-center">
        <div className="self-stretch relative leading-[46px] font-semibold">
          Why Choose US
        </div>
        <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-8 text-left text-xl text-components-button-component-primarycolor">
          <div className="flex-1 rounded-lg bg-bunker-950 flex flex-col items-start justify-center p-8 box-border gap-size-base-size min-w-[256px]">
            <AiOutlineCheckCircle
              className="text-4xl text-purple-500 mb-4"
              style={{
                filter:
                  "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                width: "40px", // Directly controlling width
                height: "40px", // Directly controlling height
              }}
            />

            <div className="self-stretch flex flex-col items-center justify-center gap-4">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Vetted Professionals
              </div>
              <div className="self-stretch relative text-base leading-[24px]">
                All guards are thoroughly background checked and certified
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-border-radius-borderradiuslg bg-bunker-950 flex flex-col items-start justify-center p-8 box-border gap-size-base-size min-w-[256px]">
            <AiOutlineClockCircle
              className="text-4xl text-purple-500 mb-4"
              style={{
                filter:
                  "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                width: "40px", // Directly controlling width
                height: "40px", // Directly controlling height
              }}
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-4">
              <div className="self-stretch relative leading-[28px] font-semibold">
                24/7 Availability
              </div>
              <div className="self-stretch relative text-base leading-[24px]">
                Round-the-clock service to meet your security needs
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-bunker-950 flex flex-col items-start justify-center p-8 box-border gap-size-base-size min-w-[256px]">
            <AiOutlineDollarCircle
              className="text-4xl text-purple-500 mb-4"
              style={{
                filter:
                  "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                width: "40px", // Directly controlling width
                height: "40px", // Directly controlling height
              }}
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-4">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Competitive Pricing
              </div>
              <div className="self-stretch relative text-base leading-[24px]">
                Transparent pricing with no hidden charges
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-bunker-950 flex flex-col items-start justify-center p-8 box-border gap-size-base-size min-w-[256px]">
            <AiOutlineCustomerService
              className="text-4xl text-purple-500 mb-4"
              style={{
                filter:
                  "drop-shadow(0.5px 0 0 ripe-plum) drop-shadow(-0.5px 0 0 ripe-plum) drop-shadow(0 0.5px 0 ripe-plum) drop-shadow(0 -0.5px 0 ripe-plum)",
                width: "40px", // Directly controlling width
                height: "40px", // Directly controlling height
              }}
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-4">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Dedicated Support
              </div>
              <div className="self-stretch relative text-base leading-[24px]">
                Expert assistance available whenever you need it
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
