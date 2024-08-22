import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import instagram from "../image/instagram.svg"
import twitter from "../image/twitter.svg"
import facebook from "../image/facebook.svg"
import appstore from '../image/app-store-badge.svg'
import playstore from '../image/google-play-badge.svg'
import './aboutus.css'

const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <div className="about-us-content">
                <div className="item item1">
                    <h3>More convenient</h3>
                    <p>
                        Do it all from your mobile. Enter the app, find parking, and reserve. It's that easy. Oh, and if your
                        plans change, update your reservation.
                    </p>
                </div>
                <div className="item item2">
                    <h3>More convenient</h3>
                    <p>
                        Do it all from your mobile. Enter the app, find parking, and reserve. It's that easy. Oh, and if your
                        plans change, update your reservation.
                    </p>
                </div>
                <div className="item item3">
                    <h3>More convenient</h3>
                    <p>
                        Do it all from your mobile. Enter the app, find parking, and reserve. It's that easy. Oh, and if your
                        plans change, update your reservation.
                    </p>
                </div>
                <div className="item item4">
                    <h3>More convenient</h3>
                    <p>
                        Do it all from your mobile. Enter the app, find parking, and reserve. It's that easy. Oh, and if your
                        plans change, update your reservation.
                    </p>
                </div>
            </div>
            <footer>
                <div className="footer-icons">
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                </div>
                <div className="badge">
                    <img src={appstore} alt="" />
                    <img src={playstore} alt="" />
                </div>
                <p>&copy; 2024 Park+. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Aboutus;