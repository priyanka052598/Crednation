import { useState } from "react";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Example API endpoint for login (adjust the URL as necessary)
    const loginUrl = "/api/login";

    try {
      const response = await axios.post(loginUrl, { email, password });
      console.log(response.data);
      // Redirect to dashboard or handle successful login here
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
          <div className="w-full relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[390px] leading-[normal] tracking-[normal]">
            <main className="self-stretch flex flex-row items-center justify-center py-[143.5px] px-8 box-border max-w-full mq450:pt-[60px] mq450:pb-[60px] mq450:box-border mq800:pt-[93px] mq800:pb-[93px] mq800:box-border">
              <section className="flex-1 flex flex-col items-center justify-start py-0 px-5 box-border gap-10 max-w-full text-center text-11xl text-ripe-plum-50 font-sm-strong mq675:gap-5">
                <div className="flex flex-col items-center justify-center py-0 px-[19px] gap-4">
                  <img
                    className="w-20 h-20 relative"
                    loading="lazy"
                    alt="logo"
                    src="/vector-register.svg"
                  />
                  <div className="flex flex-col items-center justify-start gap-2">
                    <h1 className="m-0 relative text-inherit leading-[38px] font-semibold font-[inherit] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[30px]">
                      Login
                    </h1>
                    <div className="relative text-sm leading-[22px] text-darkgray text-left">
                      Enter your credentials to access the platform
                    </div>
                  </div>
                </div>
                <FrameComponent />
              </section>
            </main>
            <Footer />
          </div>
  );
};

export default Login;
