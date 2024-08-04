// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Homepage.jsx';
import Aboutus from './components/about/Aboutus.jsx';
import Country from './components/Country/Country.jsx';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Bookparking from './components/bookparking/Bookparking.jsx';
import Otp from './components/Paymant/Otp.jsx';
import { Yourbooking } from './components/Yourbooking/Yourbooking.jsx';



function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route
          exact path="/" element={<Home/>}/>
        <Route
          exact path="/about" element={<Aboutus/>}/>
        <Route
          exact path="/country" element={<Country/>}/>
        <Route
          exact path="/Bookparking" element={<Bookparking/>}/>
        <Route
          exact path="/Otp" element={<Otp/>}/>
        <Route
          exact path="/Yourbooking" element={<Yourbooking/>}/>
        <Route
          exact path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
