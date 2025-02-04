import { useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {

  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[360px] text-left text-base text-ripe-plum-50 font-lg-normal">
     <Header/>
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center py-16 px-8 gap-x-8 gap-y-16 text-19xl text-components-button-component-primarycolor">
        <div className="flex-1 flex flex-row items-center justify-start flex-wrap content-center gap-8 min-w-[220px]">
          <div className="w-[188px] rounded-[100px] bg-components-button-component-primarycolor border-ripe-plum-500 border-[4px] border-solid box-border h-[188px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-1-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[220px]">
            <div className="self-stretch relative leading-[46px] font-semibold">
              James Anderson
            </div>
            <div className="self-stretch relative text-xl leading-[28px]">
              Elite Security Professional
            </div>
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-4 min-w-[220px] text-center text-sm text-bunker-50">
              <div className="flex flex-row items-center justify-start flex-wrap content-center gap-2 min-w-[220px]">
                <div className="flex flex-row items-center justify-start gap-1">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/emptystar.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[22px] font-semibold">
                    (128 Reviews)
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-1">
                <div className="w-4 h-4 flex flex-row items-center justify-center">
                  <img
                    className="w-2.5 relative h-3.5"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="relative leading-[22px]">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-950 h-14 flex flex-row items-center justify-center py-[15px] px-12 box-border text-center text-base text-ripe-plum-50">
          <div className="relative leading-[24px]">Hire Now</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start p-8 gap-10 text-ripe-plum-100">
        <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[280px]">
          <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center p-8 gap-8">
            <div className="flex flex-row items-center justify-start text-11xl">
              <div className="flex flex-col items-start justify-center">
                <div className="relative leading-[38px] font-semibold">
                  About
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center text-bunker-300">
              <div className="self-stretch relative leading-[24px]">
                Elite security professional with over 15 years of experience in
                high-profile security operations. Specialized in executive
                protection and event security management. Proven track record in
                handling sensitive situations with discretion and
                professionalism. Former military background with extensive
                training in modern security protocols and emergency response
                procedures.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center text-ripe-plum-500">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Read more
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center p-8 gap-8 text-xl text-ripe-plum-50">
            <div className="flex flex-row items-center justify-start text-11xl text-ripe-plum-100">
              <div className="flex flex-col items-start justify-center">
                <div className="relative leading-[38px] font-semibold">
                  Experience
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-12 rounded-13xl bg-ripe-plum-400 h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start p-3 box-border">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[28px] font-semibold">
                    Senior Security Manager
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                    Elite Protection Services
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px] text-bunker-300">
                    2019 - Present
                  </div>
                </div>
                <div className="self-stretch relative text-sm leading-[22px] text-bunker-50">
                  Leading high-profile security operations and team management
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-12 rounded-13xl bg-ripe-plum-400 h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start p-3 box-border">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[28px] font-semibold">
                    Senior Consultant
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                    Global Security Solutions
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px] text-bunker-300">
                    2015-2019
                  </div>
                </div>
                <div className="self-stretch relative text-sm leading-[22px] text-bunker-50">
                  Leading high-profile security operations and team management
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-12 rounded-13xl bg-ripe-plum-400 h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start p-3 box-border">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[28px] font-semibold">
                    Senior Team KEad
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                    Premium Guard Services
                  </div>
                  <div className="self-stretch relative text-xs leading-[20px] text-bunker-300">
                    2013-2015
                  </div>
                </div>
                <div className="self-stretch relative text-sm leading-[22px] text-bunker-50">
                  Leading high-profile security operations and team management
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-col items-start justify-center py-8 px-0 gap-8 text-11xl">
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-8">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[38px] font-semibold">
                  Client Reviews
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px] text-xs text-bunker-300">
              <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center">
                <div className="self-stretch rounded-lg flex flex-col items-start justify-center p-8 gap-size-base-size">
                  <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center">
                    <div className="flex flex-row items-start justify-start gap-4">
                      <img
                        className="w-16 relative h-16 object-cover"
                        alt=""
                        src="/photo15070032111690a1dd7228f2d-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <div className="relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                          Michael Thompson
                        </div>
                        <div className="relative leading-[20px]">
                          Event Director
                        </div>
                        <div className="relative leading-[20px]">
                          Global Events Inc.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-2">
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base text-bunker-50">
                    <div className="self-stretch relative leading-[24px]">
                      James provided exceptional security services for our
                      high-profile corporate event. His professionalism
                      andattention to detail were outstanding.
                    </div>
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      December 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center">
                <div className="self-stretch rounded-lg flex flex-col items-start justify-center p-8 gap-size-base-size">
                  <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center">
                    <div className="flex flex-row items-start justify-start gap-4">
                      <img
                        className="w-16 relative h-16 object-cover"
                        alt=""
                        src="/photo15070032111690a1dd7228f2d-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <div className="relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                          Michael Thompson
                        </div>
                        <div className="relative leading-[20px]">
                          Event Director
                        </div>
                        <div className="relative leading-[20px]">
                          Global Events Inc.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-2">
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base text-bunker-50">
                    <div className="self-stretch relative leading-[24px]">
                      James provided exceptional security services for our
                      high-profile corporate event. His professionalism
                      andattention to detail were outstanding.
                    </div>
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      December 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center">
                <div className="self-stretch rounded-lg flex flex-col items-start justify-center p-8 gap-size-base-size">
                  <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center">
                    <div className="flex flex-row items-start justify-start gap-4">
                      <img
                        className="w-16 relative h-16 object-cover"
                        alt=""
                        src="/photo15070032111690a1dd7228f2d-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <div className="relative text-base leading-[24px] font-semibold text-ripe-plum-300">
                          Michael Thompson
                        </div>
                        <div className="relative leading-[20px]">
                          Event Director
                        </div>
                        <div className="relative leading-[20px]">
                          Global Events Inc.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-2">
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className="w-[14.9px] relative h-[14.2px]"
                        alt=""
                        src="/star.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-4 text-base text-bunker-50">
                    <div className="self-stretch relative leading-[24px]">
                      James provided exceptional security services for our
                      high-profile corporate event. His professionalism
                      andattention to detail were outstanding.
                    </div>
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      December 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[280px] max-w-[480px] text-center text-19xl text-ripe-plum-50">
          <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#18181b,_#2c0c40_57.5%,_#3e065f)] border-bunker-600 border-[1px] border-solid flex flex-col items-center justify-center p-8 gap-8">
            <div className="flex flex-col items-center justify-start gap-2">
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative leading-[46px] font-semibold">
                    $35
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative leading-[46px] font-semibold">-</div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-center">
                  <div className="relative leading-[46px] font-semibold">
                    $45
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-center text-5xl">
                  <div className="relative leading-[32px] font-semibold">
                    /hour
                  </div>
                </div>
              </div>
              <div className="relative text-base leading-[24px] text-components-button-component-primarycolor">
                Professional Security Services
              </div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-500 h-14 flex flex-row items-center justify-center py-[15px] px-12 box-border text-base">
              <div className="relative leading-[24px]">Hire Now</div>
            </div>
          </div>
          <div className="self-stretch rounded-lg border-bunker-600 border-[1px] border-solid flex flex-col items-start justify-center p-8 gap-8 text-left text-11xl text-ripe-plum-100">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-col items-start justify-center">
                <div className="relative leading-[38px] font-semibold">
                  Skills
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-2 text-sm text-ripe-plum-50">
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">Access Control</div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">
                    Emergency Response
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">
                    Conflict Resolution
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">Report Writing</div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">Surveillance</div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">First Aid</div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">
                    Physical Security
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-bunker-900 border-ripe-plum-400 border-[1px] border-solid box-border h-8 overflow-hidden flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-center justify-center py-1.5 px-4 box-border">
                  <div className="relative leading-[22px]">
                    Customer Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default ProfilePage;
