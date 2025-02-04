import React from "react";

// Default testimonials array
const testimonials = [
  {
    imgSrc: "/photo15070032111690a1dd7228f2d-1@2x.png",
    name: "Michael Thompson",
    position: "Event Director",
    company: "Global Events Inc.",
    testimonial: `"Exceptional service and highly professional guards. Made our event security seamless."`,
  },
  {
    imgSrc: "/photo15070032111690a1dd7228f2d-1@2x.png",
    name: "Michael Thompson",
    position: "Event Director",
    company: "Global Events Inc.",
    testimonial: `"Exceptional service and highly professional guards. Made our event security seamless."`,
  },
  {
    imgSrc: "/photo15070032111690a1dd7228f2d-1@2x.png",
    name: "Michael Thompson",
    position: "Event Director",
    company: "Global Events Inc.",
    testimonial: `"Exceptional service and highly professional guards. Made our event security seamless."`,
  },
];

const Testimonials = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-16 px-8 box-border gap-8 min-w-[320px] text-center">
      <div className="self-stretch relative leading-[46px] font-semibold">
        What Our Clients Say
      </div>
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-8 text-left text-xs text-bunker-900">
        {/* Map through the testimonials array */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 rounded-lg bg-ripe-plum-50 flex flex-col items-start justify-center p-8 box-border gap-size-base-size min-w-[256px]"
          >
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <img
                className="w-16 relative h-16 object-cover"
                alt={testimonial.name}
                src={testimonial.imgSrc}
              />
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch relative text-base leading-[24px] font-semibold text-ripe-plum-950">
                  {testimonial.name}
                </div>
                <div className="self-stretch relative leading-[20px]">{testimonial.position}</div>
                <div className="self-stretch relative leading-[20px]">{testimonial.company}</div>
              </div>
            </div>
            {/* <div className="flex flex-row items-start justify-start gap-2">
              <img
                className="w-[14.9px] relative h-[14.2px]"
                alt="Rating Star"
                src="/vector3.svg"
              />
              <img
                className="w-[14.9px] relative h-[14.2px]"
                alt="Rating Star"
                src="/vector4.svg"
              />
              <img
                className="w-[14.9px] relative h-[14.2px]"
                alt="Rating Star"
                src="/vector5.svg"
              />
              <img
                className="w-[14.9px] relative h-[14.2px]"
                alt="Rating Star"
                src="/vector6.svg"
              />
              <img
                className="w-[14.9px] relative h-[14.2px]"
                alt="Rating Star"
                src="/vector7.svg"
              />
            </div> */}
            <div className="self-stretch flex flex-col items-center justify-center text-base text-bunker-950">
              <div className="self-stretch relative leading-[24px]">
                <p className="m-0">{testimonial.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
