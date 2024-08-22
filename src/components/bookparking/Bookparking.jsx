import React from 'react'
import './Bookparking.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Bookparking = () => {
    return (
        <div>
            <Navbar />
            <div >
                <div className="back">
                    <div className="country-container">
                        <div className="form-container">
                            <h1>Book Parking Slot</h1>
                            <form action="your-booking.html">
                                <div className="form-group">
                                    <label for="name">Full Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email Address:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label for="car_number">vahical Number:</label>
                                    <input type="number" maxlength="10" id="car_number" name="car_number" required />
                                </div>
                                <div className="form-group">
                                    <label for="date">Booking Date:</label>
                                    <input type="date" id="date" name="date" min="<?php echo $today; ?>" required />
                                </div>
                                <div className="form-group">
                                    <label for="time">Booking Time:</label>
                                    <input type="time" id="time" name="time" required />
                                </div>
                                <div className="form-group">
                                    <label for="location">Parking Location:</label>
                                    <select id="location" name="location" required>
                                        <option value="" disabled selected>Select a location</option>
                                        <option value="city_center">City Center</option>
                                        <option value="airport">Airport</option>
                                        <option value="train_station">Train Station</option>
                                        <option value="shopping_mall">Shopping Mall</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="parking-time">Parking Time:</label>
                                    <select id="parking_time" name="parking_time" required>
                                        <option value="" disabled selected>Select a parking time</option>
                                        <option value="1hr">1 Hours</option>
                                        <option value="2hr">2 Hours</option>
                                        <option value="3hr">3 Hours</option>
                                        <option value="4hr">4 Hours</option>
                                        <option value="4hr">5 Hours</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="parking-time">Parking Time:</label>
                                    <select id="country" name="country" required>
                                        <option value="" disabled selected>Select country</option>
                                        <option value="India">India</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maxico">Maxico</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Singapor">Singapor</option>
                                        <option value="South koria">South koria</option>
                                        <option value="Uk">Uk</option>
                                        <option value="US">US</option>
                                        <option value="Vietnam">Vietnam</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="parking-slot">Parking slot:</label>
                                    <select id="parking_slot" name="parking_slot" required>
                                        <option value="" disabled selected>Select a parking slot</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4r">5</option>
                                    </select>
                                </div>
                                <button className="btn_booking"><Link className='a' to="/Payment">Book now</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookparking