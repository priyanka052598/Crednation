import PropTypes from "prop-types";

const ContactForm = ({ className = "" }) => {
  return (
<div className={`flex-1 flex flex-col items-start justify-start gap-8 min-w-[250px] text-left text-xl text-ripe-plum-50 font-lg-normal ${className}`}>
  
  {/* Name Fields */}
  <div className="self-stretch flex flex-row flex-wrap gap-8 mt-1 lg:mt-2">
    {/* First Name */}
    <div className="min-w-[280px] flex-1 flex flex-col items-start justify-start gap-4">
      <label className="leading-[28px] font-semibold">First Name</label>
      <input
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium font-poppins bg-transparent leading-[20px] text-bunker-600 pb-2"
        placeholder="John"
        type="text"
      />
    </div>

    {/* Last Name */}
    <div className="min-w-[280px] flex-1 flex flex-col items-start justify-start gap-4">
      <label className="leading-[28px] font-semibold">Last Name</label>
      <input
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium font-poppins bg-transparent leading-[20px] text-bunker-600 pb-2"
        placeholder="Doe"
        type="text"
      />
    </div>
  </div>

  {/* Email & Phone Fields */}
  <div className="self-stretch flex flex-row flex-wrap gap-8 mt-6 lg:mt-10">
    {/* Email */}
    <div className="min-w-[280px] flex-1 flex flex-col items-start justify-start gap-4">
      <label className="leading-[28px] font-semibold">Email</label>
      <input
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium font-poppins bg-transparent leading-[20px] text-bunker-600 pb-2"
        placeholder="johndoes@example.com"
        type="email"
      />
    </div>

    {/* Phone Number */}
    <div className="min-w-[280px] flex-1 flex flex-col items-start justify-start gap-4">
      <label className="leading-[28px] font-semibold">Phone Number</label>
      <input
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium font-poppins bg-transparent leading-[20px] text-bunker-600 pb-2"
        placeholder="+1 012 3456 789"
        type="tel"
      />
    </div>
  </div>

  {/* Subject Selection */}
  <div className="self-stretch flex flex-col items-start justify-start gap-4 mt-6 lg:mt-10">
    <label className="leading-[28px] font-semibold">Select Subject?</label>
    <div className="flex flex-wrap gap-8 text-base text-bunker-300">
      {["General Inquiry", "Technical Support", "Billing Issue", "Other"].map((subject, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="subject" className="w-4 h-4 cursor-pointer accent-blue-500" />
          {subject}
        </label>
      ))}
    </div>
  </div>

  {/* Message Field with Corrected Underline Color */}
  <div className="self-stretch flex flex-col items-start justify-start gap-4 mt-6 lg:mt-10">
    <label className="leading-[28px] font-semibold">Message</label>
    <textarea
      className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base font-medium font-poppins bg-transparent leading-[20px] text-bunker-600 pb-2"
      placeholder="Write your message.."
      rows="3"
    />
  </div>

  {/* Submit Button */}
  <button className="w-full bg-ripe-plum-950 text-white text-sm font-medium py-[15px] rounded-lg shadow-md hover:bg-purple-800 transition mt-6 lg:mt-10">
    Send Message
  </button>
  
</div>

  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
