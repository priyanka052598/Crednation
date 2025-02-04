import { useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BookingPage = () => {
  

  const onButtonContainerClick1 = useCallback(() => {
    // Please sync "Sign up errors" to the project
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[320px] text-left text-base text-ripe-plum-50 font-lg-normal">
    <Header/>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start p-8 gap-x-8 gap-y-10 text-xl text-components-button-component-primarycolor">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[256px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 min-w-[256px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Booking Details
              </div>
              <img className="w-10 relative h-1" alt="" src="/vector6.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-12 text-base">
              <div className="self-stretch flex flex-col items-end justify-start gap-8">
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8">
                  <div className="flex-1 h-[82px] flex flex-col items-start justify-start gap-2 min-w-[256px]">
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      Date
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center text-sm text-components-input-global-colortext font-base-base-normal">
                      <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                        <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                          <img
                            className="w-4 relative h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/icon--calendaroutlined.svg"
                          />
                          <div className="relative leading-[22px] hidden">
                            Prefix
                          </div>
                          <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                            Enter start date
                          </div>
                          <div className="relative leading-[22px] text-right hidden">
                            Suffix
                          </div>
                          <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[82px] flex flex-col items-start justify-start gap-2 min-w-[256px]">
                    <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[256px]">
                      Time
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center min-w-[256px] text-sm text-components-input-global-colortext font-base-base-normal">
                      <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                        <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                          <img
                            className="w-4 relative h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/icon--clockcircleoutlined.svg"
                          />
                          <div className="relative leading-[22px] hidden">
                            Prefix
                          </div>
                          <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                            Choose start time
                          </div>
                          <div className="relative leading-[22px] text-right hidden">
                            Suffix
                          </div>
                          <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[82px] flex flex-col items-start justify-start gap-2 min-w-[256px]">
                    <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[256px]">
                      Duration
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center min-w-[256px] text-sm text-components-input-global-colortext font-base-base-normal">
                      <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                        <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/hourglass.svg"
                          />
                          <div className="relative leading-[22px] hidden">
                            Prefix
                          </div>
                          <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                            Total duration
                          </div>
                          <div className="relative leading-[22px] text-right hidden">
                            Suffix
                          </div>
                          <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[82px] flex flex-col items-start justify-start gap-2 min-w-[256px]">
                    <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[256px]">
                      Number of Guards
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center min-w-[256px] text-sm text-components-input-global-colortext font-base-base-normal">
                      <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[51px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                        <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/guardian.svg"
                          />
                          <div className="relative leading-[22px] hidden">
                            Prefix
                          </div>
                          <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                            Number of guards
                          </div>
                          <div className="relative leading-[22px] text-right hidden">
                            Suffix
                          </div>
                          <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Location
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-sm text-components-input-global-colortext font-base-base-normal">
                    <div className="flex-1 rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                      <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/location-on.svg"
                        />
                        <div className="relative leading-[22px] hidden">
                          Prefix
                        </div>
                        <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]">
                          Location of service
                        </div>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
                  <div className="self-stretch relative leading-[24px] font-semibold">
                    Additional Requirements
                  </div>
                  <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4 min-w-[256px] text-sm text-components-input-global-colortext font-base-base-normal">
                    <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/vector7.svg"
                      />
                      <div className="relative leading-[22px] hidden">
                        Prefix
                      </div>
                      <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]">
                        Write extra information you want to add
                      </div>
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
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-950 h-[59px] flex flex-row items-center justify-center py-[15px] px-12 box-border text-center text-ripe-plum-50">
                <div className="relative leading-[24px]">Next</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[357px] flex flex-col items-start justify-start gap-4 min-w-[256px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
              <div className="self-stretch relative leading-[28px] font-semibold inline-block min-w-[256px]">
                Payment Method
              </div>
              <img className="w-10 relative h-1" alt="" src="/vector6.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 min-w-[256px] text-sm text-darkgray">
              <div className="self-stretch rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden shrink-0 flex flex-row items-center justify-start flex-wrap content-center py-0 px-x4 gap-2.5 min-w-[256px]">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/radio-button-checked.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group1.svg"
                />
                <div className="flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[22px]">
                    Debit/Credit Card
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden shrink-0 flex flex-row items-center justify-start flex-wrap content-center py-0 px-x4 gap-2.5 min-w-[256px]">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/radio-button-unchecked.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group2.svg"
                />
                <div className="flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[22px]">Paypal</div>
                </div>
              </div>
              <div className="self-stretch rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden shrink-0 flex flex-row items-center justify-start flex-wrap content-center py-0 px-x4 gap-2.5 min-w-[256px]">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/radio-button-unchecked.svg"
                />
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/clip-path-group3.svg"
                />
                <div className="flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[22px]">Apple Pay</div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-950 h-[59px] flex flex-row items-center justify-center py-[15px] px-12 box-border min-w-[256px] text-center text-base text-ripe-plum-50">
                <div className="relative leading-[24px]">Next</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 min-w-[256px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
              <div className="self-stretch relative leading-[28px] font-semibold inline-block min-w-[256px]">
                Card Details
              </div>
              <img className="w-10 relative h-1" alt="" src="/vector6.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start min-w-[256px] text-base">
              <div className="self-stretch flex flex-col items-end justify-start gap-8 min-w-[256px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
                  <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[256px]">
                    Card Number
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start min-w-[256px] text-sm text-components-input-global-colortext font-base-base-normal">
                    <div className="flex-1 rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-4">
                      <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                        <div className="relative leading-[22px] hidden">
                          Prefix
                        </div>
                        <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]">
                          Enter Card Number
                        </div>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-8">
                  <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-8">
                    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[256px]">
                      <div className="relative leading-[24px] font-semibold">
                        Expiry Date
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start text-sm text-darkgray">
                        <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                          <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border">
                            <div className="flex-1 relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                              MM/YY
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[256px]">
                      <div className="self-stretch relative leading-[24px] font-semibold">
                        CVV
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center text-sm text-components-input-global-colortext font-base-base-normal">
                        <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                          <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                            <div className="relative leading-[22px] hidden">
                              Prefix
                            </div>
                            <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                              Enter CVV
                            </div>
                            <div className="relative leading-[22px] text-right hidden">
                              Suffix
                            </div>
                            <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-2 min-w-[256px]">
                    <div className="self-stretch relative leading-[24px] font-semibold">
                      Name on Card
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center text-sm text-components-input-global-colortext font-base-base-normal">
                      <div className="flex-1 rounded bg-gray-100 border-darkslategray border-[1px] border-solid box-border h-[57px] overflow-hidden flex flex-row items-center justify-start py-0 px-4 min-w-[256px]">
                        <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
                          <div className="relative leading-[22px] hidden">
                            Prefix
                          </div>
                          <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">
                            Name on the card
                          </div>
                          <div className="relative leading-[22px] text-right hidden">
                            Suffix
                          </div>
                          <div className="w-[12.2px] h-2 [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[256px] max-w-[400px] text-base">
          <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid flex flex-col items-start justify-start p-4 gap-4 text-xs text-bunker-300">
            <div className="self-stretch flex flex-col items-start justify-start text-base text-components-button-component-primarycolor">
              <div className="relative leading-[24px] font-semibold">
                Booking Summary
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-4 text-center text-xl text-ripe-plum-50">
              <div className="w-16 rounded-81xl bg-components-button-component-primarycolor h-16 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image-1-21@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="w-[101px] flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[28px] font-semibold">
                    John Smith
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-1 text-xs">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="flex flex-row items-center justify-start gap-1">
                    <div className="relative leading-[20px] font-semibold">
                      4.8
                    </div>
                    <div className="relative leading-[20px] text-bunker-50">
                      (213)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Date
                </div>
                <div className="relative leading-[20px] font-semibold">
                  March 15, 2024
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Time
                </div>
                <div className="relative leading-[20px] font-semibold">
                  9:00 AM
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Duration
                </div>
                <div className="relative leading-[20px] font-semibold">
                  8 Hours
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Location
                </div>
                <div className="relative leading-[20px] font-semibold">
                  New York, NY
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[0.4px] shrink-0"
              alt=""
              src="/vector-10.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Hourly Rate
                </div>
                <div className="relative leading-[20px] font-semibold">$45</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Hours
                </div>
                <div className="relative leading-[20px] font-semibold">8</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  Service Fee
                </div>
                <div className="relative leading-[20px] font-semibold">$25</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-base">
                <div className="relative leading-[24px] font-semibold">
                  Total
                </div>
                <div className="relative leading-[24px] font-semibold">
                  $385
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#18181b,_#2c0c40_57.5%,_#3e065f)] border-bunker-600 border-[1px] border-solid flex flex-col items-center justify-center p-8 gap-4">
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-5xl">
              <div className="relative leading-[32px] font-semibold">
                Order Summary
              </div>
              <img
                className="w-[100px] relative h-1"
                alt=""
                src="/vector8.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-bunker-300">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[24px] font-semibold">
                  Subtotal
                </div>
                <div className="relative leading-[24px] font-semibold">
                  $360
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[24px] font-semibold">
                  Service Fee
                </div>
                <div className="relative leading-[24px] font-semibold">$25</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-components-button-component-primarycolor">
                <div className="relative leading-[24px] font-semibold">
                  Total
                </div>
                <div className="relative leading-[24px] font-semibold">
                  $385
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[0.4px] shrink-0"
              alt=""
              src="/vector-101.svg"
            />
            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.03),_0px_1px_6px_-1px_rgba(0,_0,_0,_0.02),_0px_2px_4px_rgba(0,_0,_0,_0.02)] rounded-lg bg-ripe-plum-500 h-14 flex flex-row items-center justify-center py-[15px] px-12 box-border text-center text-ripe-plum-50">
              <div className="relative leading-[24px] font-semibold">
                Confirm Booking
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-2 text-sm text-darkgray">
              <img
                className="w-[17.5px] relative h-[17.5px]"
                alt=""
                src="/group.svg"
              />
              <div className="flex-1 relative leading-[22px]">
                Secure payments processed by Stripe
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid flex flex-col items-start justify-start p-4 gap-4">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">
                Booking Protection
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-darkgray">
              <div className="self-stretch flex flex-row items-start justify-start gap-2">
                <img
                  className="w-5 relative h-5"
                  alt=""
                  src="/check-circle.svg"
                />
                <div className="relative leading-[20px]">
                  At least 8 characters
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2">
                <img
                  className="w-5 relative h-5"
                  alt=""
                  src="/check-circle.svg"
                />
                <div className="relative leading-[20px]">{`Mix of uppercase & lowercase letters`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2">
                <img className="w-5 relative h-5" alt="" src="/cancel.svg" />
                <div className="relative leading-[20px]">
                  At least one number
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

export default BookingPage;
