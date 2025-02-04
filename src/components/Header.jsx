import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({
  className = "",
  layer2,
  iconSearchOutlined,
  iconSearchOutlined1,
  iconSearchOutlined2,
  iconSearchOutlined3,
  iconSearchOutlined4,
}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHeaderClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonCompactItemClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onButtonCompactItemClick1 = useCallback(() => {
    navigate("/register1");
  }, [navigate]);

  const onButtonCompactItemClick2 = useCallback(() => {
    navigate("/contactUs");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`self-stretch bg-gray-200 flex justify-between overflow-hidden  md:flex-row items-center  flex-wrap content-center p-4 md:p-8 top-[0] z-[99] sticky gap-5 cursor-pointer text-left text-base text-ripe-plum-50 font-lg-normal ${className}`}
      
    >
      {/* Logo Section */}
      <div className="w-full md:w-auto flex flex-row items-center justify-between md:justify-start gap-2 min-w-[216px] max-w-full md:max-w-[300px] cursor-pointer text-13xl text-components-button-component-primarycolor font-urbanist">
        <div onClick={onHeaderClick} className="flex items-center gap-2">
          <img
            className="w-8 md:w-12 relative h-8 md:h-12 overflow-hidden shrink-0"
            alt=""
            src="/layer-2.svg"
          />
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.02em] font-bold text-[inherit]">
            CredNation
          </a>
        </div>
        <button
          className="md:hidden flex justify-center items-center p-2 rounded-md bg-gray-700 bg-opacity-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Cross Icon (×) when the menu is open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              className="rounded-md"
            >
              <g strokeWidth="2">
                <path d="M6 18L18 6" stroke="#B1A0D7" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="#B1A0D7" strokeLinecap="round" />
              </g>
            </svg>
          ) : (
            // Hamburger Icon (three horizontal lines)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              className="rounded-md"
            >
              <g strokeWidth="2">
                <path d="M4 6h16" stroke="#B1A0D7" strokeLinecap="round" />
                <path d="M4 12h16" stroke="#B1A0D7" strokeLinecap="round" />
                <path d="M4 18h16" stroke="#6C5B7B" strokeLinecap="round" />
              </g>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto items-center justify-center md:justify-between gap-4 md:gap-0`}
      >
        {/* Button Group for Find Guards, Register, and Contact Us */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {/* Find Guards Button */}
          <div
            className="cursor-pointer"
            onClick={onButtonCompactItemClick}
          >
            <div className="bg-gray-200 py-2 px-6 rounded-md text-center">
              <a className="text-[inherit] leading-[24px]">Find Guards</a>
            </div>
          </div>

          {/* Register as a Guard Button */}
          <div
            className="cursor-pointer"
            onClick={onButtonCompactItemClick1}
          >
            <div className="bg-gray-200 py-2 px-6 rounded-md text-center">
              <a className="text-[inherit] leading-[24px]">Register as a Guard</a>
            </div>
          </div>

          {/* Contact Us Button */}
          <div
            className="cursor-pointer"
            onClick={onButtonCompactItemClick2}
          >
            <div className="bg-gray-200 py-2 px-6 rounded-md text-center">
              <a className="text-[inherit] leading-[24px]">Contact Us</a>
            </div>
          </div>
        </div>
        </div>


        {/* Login and Get Started Section */}
        <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto items-center justify-center md:justify-between gap-4 md:gap-0`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div
            className="cursor-pointer w-[68px] flex items-center justify-center py-2"
            onClick={onButtonContainerClick}
          >
            <a className="text-[inherit] leading-[24px]">Login</a>
          </div>

          <div
            className="bg-ripe-plum-950 text-components-button-component-primarycolor rounded-lg flex items-center justify-center py-2 px-6 cursor-pointer"
            onClick={onButtonContainerClick1}
          >
            <a className="text-[inherit] leading-[24px]">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  layer2: PropTypes.string,
  iconSearchOutlined: PropTypes.string,
  iconSearchOutlined1: PropTypes.string,
  iconSearchOutlined2: PropTypes.string,
  iconSearchOutlined3: PropTypes.string,
  iconSearchOutlined4: PropTypes.string,
};

export default Header;
