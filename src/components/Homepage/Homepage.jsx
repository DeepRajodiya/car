import React from 'react'
// import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar.jsx';
import './Homepage.css'
import mainimage from '../image/1.png'
import bmw from '../image/bmw.svg'
import audi from '../image/audi.svg'
import instagram from "../image/instagram.svg"
import twitter from "../image/twitter.svg"
import facebook from "../image/facebook.svg"
import appstore from '../image/app-store-badge.svg'
import playstore from '../image/google-play-badge.svg'
import rollsroyce from '../image/rolls-royce.svg'
import man from '../image/man.avif'
import man2 from '../image/man2.avif'
import man3 from '../image/man3.avif'
import man4 from '../image/man4.jpg'
import {Link} from 'react-router-dom'



const Home = () => {
   
    
    return (
        <div>
            <Navbar />
            <div className='maincontent'>
                <main className="hero container">
                    <div className="hero-content">
                        <marquee behavior="" direction="left">
                            <h1 className="book">BOOK PARKING SPACE!</h1>
                        </marquee>
                        <p>Whether you're heading to a busy event, catching a flight, or simply want peace of mind while you shop,
                            booking ahead ensures you'll have a guaranteed spot waiting for you. Avoid the stress of finding a space
                            on the fly and enjoy a seamless parking experience. Reserve now and make your journey smoother.
                        </p>

                        <div className="hero-btn">
                            <button ><Link className={"a"} to="/Country">Available country</Link> </button>
                        </div>

                        <div className="shopping">
                            <p>They already collaborate with us:</p>

                            <div className="brand-icons">
                                <img src={bmw} alt="" />
                                <img src={audi} alt="" />
                                <img src={rollsroyce} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img className="index-image" src={mainimage} alt="hero-image" />
                    </div>
                </main>
            </div>
                <section class="forth-section">
                    <div class="container">
                        <div class="item item1">
                        <p>100+</p>
                        <p>Team Member</p>
                    </div>
                    <div class="item item2">
                        <p>300+</p>
                        <p>Total Project</p>
                    </div>
                    <div class="item item3">
                        <p>1,300+</p>
                        <p>Happy clients</p>
                    </div>
                </div>
                </section>
                

            <div className="other">
                <div class="team">
                <div class="">
                    <h1>We're humans helping humans</h1>
                    <h1>meet their goals</h1>
                </div>
                
                <div class="team-info">
                    <div class="item item1">
                        <div class="image-section">
                           <img src={man}
                                alt=""/>
                        </div>
                        <p>Deep</p>
                        <p>DIRECTOR</p>
                    </div>
                    <div class="item item2">
                        <div class="image-section">
                            <img src={man2}
                                alt=""/>
                        </div>
                        <p>Divyesh</p>
                        <p>DIRECTOR</p>
                    </div>
                    <div class="item item3">
                        <div class="image-section">
                            <img src={man3}
                                alt=""/>
                        </div>
                        <p>Ruchit</p>
                        <p>COPYWRITER</p>
                    </div>
                    <div class="item item4">
                        <div class="image-section">
                            <img src={man4}
                                alt=""/>
                        </div>
                        <p>Dishant</p>
                        <p>COPYWRITER</p>
                    </div>
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
        </div>
    )
}

export default Home;