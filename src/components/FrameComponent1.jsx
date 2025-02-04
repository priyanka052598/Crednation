import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  clipPathGroup,
  clipPathGroup1,
  clipPathGroup2,
  photoaddfd,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-center gap-8 min-w-[280px] max-w-[480px] text-left text-xl text-components-button-component-primarycolor font-lg-normal mq675:gap-4 mq675:max-w-full ${className}`}
    >
      <div className="self-stretch rounded-lg [background:linear-gradient(180deg,_#18181b,_#2c0c40_57.5%,_#3e065f)] flex flex-col items-start justify-center p-8 box-border gap-size-base-size max-w-full">
        <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
          Why Join Our Security Team?
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-base">
          <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
            <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
              <img className="h-6 w-6 relative" alt="" src={clipPathGroup} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[229px] max-w-full">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Professional Development
              </div>
              <div className="self-stretch relative text-xs leading-[20px]">
                Continuous training and career advancement opportunities
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
            <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
              <img className="h-6 w-6 relative" alt="" src={clipPathGroup1} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[229px] max-w-full">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Competitive Pay
              </div>
              <div className="self-stretch relative text-xs leading-[20px]">
                Industry-leading compensation and benefits package
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
            <div className="rounded-21xl bg-ripe-plum-50 flex flex-row items-center justify-start p-3">
              <img className="h-6 w-6 relative" alt="" src={clipPathGroup2} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[229px] max-w-full">
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
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={photoaddfd}
          />
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[24px] font-semibold">
              Michael Rodriguez
            </div>
            <div className="relative text-xs leading-[20px] text-bunker-300 inline-block min-w-[114px]">
              Senior Security Officer
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-bunker-300">
          <blockquote className="m-0 relative leading-[24px]">
            "Joining the team was one of the best career decisions I've made.
            The professional environment and growth opportunities are
            exceptional."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  clipPathGroup: PropTypes.string,
  clipPathGroup1: PropTypes.string,
  clipPathGroup2: PropTypes.string,
  photoaddfd: PropTypes.string,
};

export default FrameComponent1;
