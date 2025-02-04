import PropTypes from "prop-types";

const InputBasic = ({
  className = "",
  size = "Default",
  state = "Default",
  status1 = "Default",
  suffixText = "Suffix",
  text = "Enter your full name",
  prefixText = "Prefix",
  suffix = false,
  prefix = false,
  iconRight = false,
  iconLeft = true,
}) => {
  return (
    <div
      className={`self-stretch h-[57px] rounded-components-input-global-borderradiussm bg-gray-100 border-darkslategray border-[1px] border-solid box-border flex flex-row items-center justify-start py-0 px-4 text-left text-sm text-components-input-global-colortext font-base-base-normal ${className}`}
      data-size={size}
      data-state={state}
      data-status={status1}
    >
      <div className="flex-1 h-components-input-global-controlheight flex flex-row items-center justify-start py-components-input-component-paddingblock px-0 box-border gap-2">
        {iconLeft && (
          <img className="w-4 relative h-4" alt="" src="/account-circle.svg" />
        )}
        {prefix && <div className="relative leading-[22px]">{prefixText}</div>}
        <div className="flex-1 relative leading-[22px] font-lg-normal text-darkgray inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[22px]">
          {text}
        </div>
        {suffix && (
          <div className="relative leading-[22px] text-right">{suffixText}</div>
        )}
        {iconRight && (
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/icon--infocircleoutlined.svg"
          />
        )}
      </div>
    </div>
  );
};

InputBasic.propTypes = {
  className: PropTypes.string,
  suffixText: PropTypes.string,
  text: PropTypes.string,
  prefixText: PropTypes.string,
  suffix: PropTypes.bool,
  prefix: PropTypes.bool,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,

  /** Variant props */
  size: PropTypes.number,
  state: PropTypes.number,
  status1: PropTypes.number,
};

export default InputBasic;
