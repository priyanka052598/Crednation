import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
// import axios from "axios"; // Commented out for now
import { useState } from "react";

const RegisterAsAGuard = () => {
  const location = useLocation();
  const register1Data = location.state || {};

  const [formData, setFormData] = useState({
    profilePicture: null,
    skills: [],
    profileSummary: "",
    minRate: "",
    maxRate: "",
    experience: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = (name, value) => {
    let error = "";
    if (name === "profilePicture" && !value) {
      error = "Profile picture is required.";
    }
    if (name === "skills" && value.length === 0) {
      error = "Please select at least one skill.";
    }
    if (name === "profileSummary" && value.trim() === "") {
      error = "Profile summary is required.";
    }
    if (name === "minRate" && !value) {
      error = "Minimum rate is required.";
    }
    if (name === "maxRate" && !value) {
      error = "Maximum rate is required.";
    }
    if (name === "experience" && value.trim() === "") {
      error = "Experience is required.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Handle change
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      validate(name, files[0]); // Validate file input
    } else if (type === "checkbox") {
      setFormData((prev) => {
        const newSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        validate("skills", newSkills); // Validate skills
        return { ...prev, skills: newSkills };
      });
    } else {
      setFormData({ ...formData, [name]: value });
      validate(name, value); // Validate other inputs
    }
  };

  // Handle submit
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const combinedData = { ...register1Data, ...formData };

    let validationErrors = {};
    Object.keys(formData).forEach((key) => validate(key, formData[key]));

    if (Object.values(errors).some((err) => err !== "")) {
      console.log("Validation errors:", errors);
      return;
    }

    console.log("Combined Data:", combinedData);
  };

  return (
    <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[360px] text-left text-base text-ripe-plum-50 font-lg-normal">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-16 px-8 gap-8 text-11xl text-components-button-component-primarycolor">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[320px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch relative leading-[38px] font-semibold whitespace-pre-wrap">
              Guard Registration
            </div>
            <img className="w-[100px] relative h-1" alt="" src="/vector2.svg" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-12 text-base">
            <div className="self-stretch flex flex-col items-end justify-start relative gap-8">
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[0]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Profile Picture*
                </div>
                <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-250 border-darkslategray border-[1px] border-dashed flex flex-row items-center justify-center py-6 px-4 text-sm text-darkgray">
                  <label className="cursor-pointer" for="file-163:2655">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center justify-start gap-2">
                        <div className="flex flex-col items-center justify-start gap-2">
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/clip-path-group9.svg"
                          />
                          <div className="relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                            Drag and drop your photo here
                          </div>
                        </div>
                        <div className="relative text-base leading-[24px] font-semibold text-ripe-plum-50 overflow-hidden text-ellipsis whitespace-nowrap">
                          Browse files
                        </div>
                      </div>
                    </div>
                  </label>
                  <input className="hidden" type="file" id="file-163:2655" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[1]">
                <div className="self-stretch relative leading-[24px] font-semibold">{`Skills & Expertise *`}</div>
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 text-sm text-darkgray">
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Access Control
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Surveillance
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Emergency Response
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">First Aid</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Conflict Resolution
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Physical Security
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Report Writing
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-0 pl-4 pr-2 gap-2.5 min-w-[320px]">
                    <input className="w-5 h-4" type="checkbox" />
                    <div className="flex flex-row items-center justify-center py-1.5 px-0">
                      <div className="relative leading-[22px]">
                        Customer Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[2]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Profile Summary
                </div>
                <textarea
                  className="border-darkslategray border-[1px] border-solid bg-gray-250 font-lg-normal text-sm [outline:none] self-stretch rounded-components-input-global-borderradiussm box-border h-[121px] flex flex-row items-start justify-start py-5 px-4 text-darkgray"
                  placeholder="Write a bio about yourself"
                />
              </div>
              <div className="w-[786.6px] absolute !m-[0] top-[0px] right-[0.4px] text-xs leading-[20px] text-right inline-block z-[3]">
                * Indicates mandatory fields
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[4]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Rate
                </div>
                <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-size-base-size text-sm text-components-button-component-defaultcolor font-base-base-normal">
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[320px]">
                    <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/icon--creditcardoutlined.svg"
                      />
                      <div className="relative leading-[22px] hidden">
                        Prefix
                      </div>
                      <input
                        className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                        placeholder="Min. Rate"
                        type="number"
                      />
                      <div className="relative leading-[22px] text-right hidden">
                        Suffix
                      </div>
                      <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[320px]">
                    <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/icon--creditcardoutlined.svg"
                      />
                      <div className="relative leading-[22px] hidden">
                        Prefix
                      </div>
                      <input
                        className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]"
                        placeholder="Max. Rate"
                        type="number"
                      />
                      <div className="relative leading-[22px] text-right hidden">
                        Suffix
                      </div>
                      <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[5]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Experience
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-4 text-sm text-components-button-component-defaultcolor font-base-base-normal">
                  <div className="self-stretch flex-1 rounded-components-input-global-borderradiussm bg-gray-250 border-darkslategray border-[1px] border-solid flex flex-row items-center justify-start py-0 px-4">
                    <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/clip-path-group10.svg"
                      />
                      <div className="relative leading-[22px] hidden">
                        Prefix
                      </div>
                      <input
                        className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]"
                        placeholder="Enter past working experience"
                        type="text"
                      />
                      <div className="relative leading-[22px] text-right hidden">
                        Suffix
                      </div>
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon--infocircleoutlined.svg"
                      />
                    </div>
                  </div>
                  <div className="w-12 rounded-[75px] border-ripe-plum-50 border-[1px] border-dashed box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2">
                    <img
                      className="w-[15.5px] relative h-[16.2px]"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[320px] z-[6]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Additional Info
                </div>
                <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-250 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 text-sm text-components-button-component-defaultcolor font-base-base-normal">
                  <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                    <img
                      className="w-4 relative h-4"
                      alt=""
                      src="/vector4.svg"
                    />
                    <div className="relative leading-[22px] hidden">Prefix</div>
                    <input
                      className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] flex-1 relative leading-[22px] text-darkgray text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]"
                      placeholder="Write extra information you would like to be displayed"
                      type="text"
                    />
                    <div className="relative leading-[22px] text-right hidden">
                      Suffix
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/icon--infocircleoutlined.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[15px] px-12 bg-ripe-plum-950 self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg h-[59px] flex flex-row items-center justify-center box-border">
              <div className="relative text-base leading-[24px] font-lg-normal text-ripe-plum-50 text-center">
                Submit
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-8 min-w-[280px] max-w-[480px] text-xl">
          <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#18181b,_#2c0c40_57.5%,_#3e065f)] flex flex-col items-start justify-center p-8 gap-size-base-size">
            <div className="self-stretch relative leading-[28px] font-semibold">
              Why Join Our Security Team?
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start ">
                  <img
                    className=" relative"
                    alt=""
                    src="/professional-development.svg"
                  />
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
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start ">
                  <img
                    className=" relative"
                    alt=""
                    src="/competitive-pay.svg"
                  />
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
                <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start ">
                  <img
                    className="relative "
                    alt=""
                    src="/flexible-schedule.svg"
                  />
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

export default RegisterAsAGuard;
