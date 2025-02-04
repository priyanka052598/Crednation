import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
 
  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[320px] text-left text-13xl text-ripe-plum-50 font-lg-normal">
    
      <Header/>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-16 px-8 box-border gap-20 min-w-[320px] text-19xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[250px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[46px] font-semibold">
                Get in touch
              </div>
              <div className="self-stretch relative text-xl leading-[28px] text-bunker-300">
                Have a question or want to work together? Leave us a message and
                we'll get back to you as soon as possible.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-base">
            <div className="flex-1 flex flex-col items-start justify-start gap-10">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <img
                  className="w-8 relative h-8"
                  alt=""
                  src="/contactus-icon-timings.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch relative text-xl leading-[28px] font-semibold">
                    Hours
                  </div>
                  <div className="self-stretch relative leading-[24px] text-bunker-300">
                    Open today 09:00 a.m. – 05:00 p.m.
                  </div>
                  <div className="w-[400px] relative [text-decoration:underline] leading-[150%] font-text-regular-link text-foundation-dark-blue-dark-blue-500 hidden">
                    hello@relume.io
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/contactus-icon-phone.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch relative text-xl leading-[28px] font-semibold">
                    Phone
                  </div>
                  <div className="self-stretch relative leading-[24px] text-bunker-300">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <a className="[text-decoration:none] self-stretch relative leading-[24px] text-[inherit]">
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xl">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/contactus-icon-location.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch relative leading-[28px] font-semibold">
                      Lorem Ipsum
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-bunker-300">
                      Vernon BC Canada V1H 2C3
                    </div>
                  </div>
                  <a
                    className="[text-decoration:none] flex flex-col items-start justify-start text-base text-[inherit]"
                    target="_blank"
                  >
                    <div className="w-[133px] flex flex-row items-center justify-center gap-2">
                      <div className="relative leading-[24px]">
                        Get Directions
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon--chevronright.svg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
     <Footer/>
    </div>
  );
};

export default ContactUs;
