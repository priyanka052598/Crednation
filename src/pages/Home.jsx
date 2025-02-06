import React, { forwardRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/testimonial";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
import Select from 'react-select';
import "../../src/global.css"
import { useNavigate } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Home = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState(null);
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

  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    ),
  );




  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const defaultOption = options[0];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#252538", // Background color of the input box
      color: "white", // Change text color for visibility
      fontSize:"16px",
      borderColor:"transparent",
      width:window.innerWidth > 500 ? "310px":"280px",
      border: "none", // Remove border if needed
    boxShadow: "none", // Remove focus outline
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#252538", // Background color of dropdown menu
      fontSize: "16px",
      color:"white"
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      backgroundColor: isSelected ? "#252538" : isFocused ? "#3e065f" : "#252538",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Ensure selected text remains white
    }),
  };

  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[320px] text-left text-19xl text-bunker-50 font-lg-normal">
      <Header />
      <div className="self-stretch overflow-hidden bg-[#181818] flex flex-col md:flex-row items-start justify-start flex-wrap content-start py-8 md:py-16 px-4 md:px-8 box-border gap-4 md:gap-8 min-w-[320px]">
        <div className="flex-1 flex   flex-  items-start justify-start gap-8 min-w-[256px]">
          <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
            <div className="self-stretch  flex flex-col items-start justify-start gap-4">
              <div className={` ${window.innerWidth < 500 ? "text-[30px]" : "text-2xl"} font-semibold leading-[46px]`}>
                Find Trusted Security Guards Anytime, Anywhere
              </div>
              <div className={` ${window.innerWidth < 500 ? "text-[19px]" : "text-xl"} relative  leading-[28px] text-bunker-100`}>
                Connect with verified security professionals for your business
                or event needs. Available 24/7, nationwide coverage.
              </div>
            </div>

            {/* Input Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-6">
  {/* Address Input */}
  <div className="flex items-center text-[#9CA3AF] h-[40px] bg-gray-100 border  border-darkslategray rounded-lg py-2 px-4">
    <AiOutlineEnvironment className="text-[#9CA3AF] text-[22px]" />
    <textarea
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Address"
      rows="1"
      className="w-full bg-transparent text-[16px] text-[#9CA3AF] border-none outline-none px-2 resize-none overflow-hidden text-left"
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}
    />
  </div>









       


              {/* End Date Input */}

              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[60px] md:h-[57px]">
                <AiOutlineCalendar className="text-[#9CA3AF]  text-xl" />
                  <DatePicker
      customInput={<ExampleCustomInput className="example-custom-input text-left text-[16px] text-[#9ca3af] bg-transparent pl-4 w-[280px] h-[50px] pt-[-2px]"  />}
      selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd HH:mm"
                    showTimeSelect
                    // className="bg-red-300 pt-[-4px] text-[16px] text-[#9CA3AF] flex-1 outline-none w-full"
                    calendarClassName="custom-calendar" // Apply custom styles
                  />
              </div>

              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4 h-[60px] md:h-[57px]">
                <AiOutlineCalendar className="text-[#9CA3AF]  text-xl" />
                  <DatePicker
      customInput={<ExampleCustomInput className="example-custom-input text-left text-[16px] text-[#9ca3af] bg-transparent pl-4 w-[280px] h-[50px] pt-[-2px]"  />}
      selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd HH:mm"
                    showTimeSelect
                    // className="bg-red-300 pt-[-4px] text-[16px] text-[#9CA3AF] flex-1 outline-none w-full"
                    calendarClassName="custom-calendar" // Apply custom styles
                  />
              </div>


              {/* Service Type Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray rounded-lg px-4  h-[35px] py-3">
                <AiOutlineAppstore className="text-darkgray text-[18px]" />

                <Select
                isSearchable={false}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
      />

                
               
              </div>

              {/* Min Budget Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray h-[35px] rounded-lg px-5 py-3">
                <span className=" text-[#9CA3AF] text-[18px] font-medium">
                  $
                </span>
                <input
                  type="number"
                  name="minBudget"
                  value={formData.minBudget}
                  onChange={handleChange}
                  placeholder="Min. Budget"
                  className="w-full bg-transparent text-[16px] text-[#9CA3AF] border-none outline-none pl-3" // Added padding-left
                />
              </div>

              {/* Max Budget Input */}
              <div className="flex items-center bg-gray-100 border border-darkslategray h-[35px] rounded-lg px-5  py-3">
                <span className=" text-[#9CA3AF] text-[18px] font-medium">
                  $
                </span>
                <input
                  type="number"
                  name="maxBudget"
                  value={formData.maxBudget}
                  onChange={handleChange}
                  placeholder="Max. Budget"
                  className="w-full bg-transparent text-[16px] text-[#9CA3AF] border-none outline-none pl-3" // Added padding-left
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => {
                navigate("/search")
              }}
              type="submit"
              className="w-full h-12 md:h-14 mt-4 md:mt-6 bg-ripe-plum-950  transition-all duration-300 ease-in-out rounded-lg text-base text-white font-semibold p-3 md:p-4"
            >
              Search Guards
            </button>
          </form>
        </div>





       

        <img
          className="hidden md:block flex-1 rounded-lg max-w-full md:max-w-[560px] overflow-hidden h-auto md:h-[548px] object-cover min-w-[256px]"
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
