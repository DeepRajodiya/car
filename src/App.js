import "./App.css";
import Home from "./components/Homepage/Homepage.jsx";
import Login from "./components/login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Aboutus from "./components/about/Aboutus.jsx";
import Country from "./components/Country/Country.jsx";
import Bookparking from "./components/bookparking/Bookparking.jsx";
import Profile from "./components/profile/Profile.jsx";
import Otp from "./components/Paymant/Otp.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Yourbooking } from "./components/Yourbooking/Yourbooking.jsx";
import Subscribe from "./components/subscribe/Subscribe.jsx";
import Payment from "./components/Paymant/Payment.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/country" element={<Country />} />
          <Route exact path="/Bookparking" element={<Bookparking />} />
          <Route exact path="/Otp" element={<Otp />} />
          <Route exact path="/Yourbooking" element={<Yourbooking />} />
          <Route exact path="/Subscribe" element={<Subscribe />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
