import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RegisterAsAGuard1 from "./pages/RegisterAsAGuard1";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage"
import ContactUs from "./pages/ContactUs";
import ProfilePage from "./pages/ProfilePage";
import BookingPage from "./pages/BookingPage";
import RegisterAsAGuard from "./pages/Register2";
import ShowModal from "./pages/ShowModal";
import ShowModalAfterBooking from "./pages/ShowModalAfterBooking";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AllCustomers from "./pages/Admin/AllCustomers";
import Dashboard from "./pages/dashboard";
import AllGuards from "./pages/Admin/AllGuards";
import AllJobs from "./pages/Admin/AllJobs";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
          title = "";
          metaDescription = "";
          break;  
      // case "/home":
      //     title = "";
      //     metaDescription = "";
      //     break;  
      case "/search":
            title = "";
            metaDescription = "";
          break; 
      case "/contactUs":
            title = "";
            metaDescription = "";
          break;  
      case "/profile":
            title = "";
            metaDescription = "";
          break; 
      case "/booking":
            title = "";
            metaDescription = "";
          break;  
      case "/register1":
            title = "";
            metaDescription = "";
          break;  
      case "/register2":
            title = "";
            metaDescription = "";
          break;                                   
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Elements stripe={stripePromise}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/register1" element={<RegisterAsAGuard1 />} />
      <Route path="/register2" element={<RegisterAsAGuard />} />
      <Route path="/ShowModal" element={<ShowModal />}/>
      <Route path="/ShowModalAfterBooking" element={<ShowModalAfterBooking />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/AllCustomers" element={<AllCustomers/>}/>
      <Route path="/AllGuards" element={<AllGuards/>}/>
      <Route path="/AllJobs" element={<AllJobs/>}/>
    </Routes>
    </Elements>
  );
}
export default App;
