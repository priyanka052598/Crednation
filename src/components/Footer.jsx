import Header from "../components/Header";
import InputBasic from "../components/InputBasic";
import FrameComponent1 from "../components/FrameComponent1";

const Footer = () => {
    return (
      <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-start justify-start  leading-[normal] tracking-[normal]">
      <footer className="self-stretch bg-bunker-950 overflow-hidden flex flex-col md:flex-row items-center justify-between flex-wrap content-center p-8 gap-5 text-left text-base text-ripe-plum-50 font-lg-normal">
        <div className="relative leading-[24px] text-center md:text-left">
          © 2024 Crednation. All rights reserved.
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-[15px] text-center md:text-left mt-4 md:mt-0">
          <div className="rounded-components-button-global-borderradiuslg flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2 px-0 gap-components-button-global-marginxs">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--searchoutlined.svg"
              />
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="rounded-components-button-global-borderradiuslg flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2 px-0 gap-components-button-global-marginxs">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--searchoutlined.svg"
              />
              <div className="relative leading-[24px] inline-block min-w-[115px]">
                Terms Of Service
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-start gap-2 mt-4 md:mt-0">
          <img
            className="h-10 w-10 relative object-cover"
            loading="lazy"
            alt=""
            src="/group-4@2x.png"
          />
          <img
            className="h-10 w-10 relative object-cover"
            loading="lazy"
            alt=""
            src="/group-5@2x.png"
          />
          <img
            className="h-10 w-10 relative object-cover"
            loading="lazy"
            alt=""
            src="/group-6@2x.png"
          />
          <img
            className="h-10 w-10 relative object-cover"
            loading="lazy"
            alt=""
            src="/group-7@2x.png"
          />
        </div>
      </footer>
    </div>
    
    )
}

export default Footer