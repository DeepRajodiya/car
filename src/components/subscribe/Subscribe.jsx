import React from 'react'
import './subscribe.css'
import { Link } from 'react-router-dom'

const Subscribe = () => {
    return (
        <div className='black'>
            <div className="wrapper">
                <div className="card">
                    <input className="inputs" type="radio" name="card" value="basic" />
                    <span className="check"></span>
                    <label className="label">
                        <div className="title">BASIC</div>
                        <div className="price">
                            <span className="span">$</span>
                            15
                            <span className="span">/month</span>
                        </div>
                    </label>
                </div>
                <div className="card">
                    <input className="inputs" type="radio" name="card" value="standart" />
                    <span className="check"></span>
                    <label className="label">
                        <div className="title">STANDART</div>
                        <div className="price">
                            <span className="span">$</span>
                            30
                            <span className="span">/month</span>
                        </div>
                    </label>
                </div>
                <div className="card">
                    <input className="inputs" type="radio" name="card" value="premium" />
                    <span className="check"></span>
                    <label className="label">
                        <div className="title">PREMIUM</div>
                        <div className="price">
                            <span className="span">$</span>
                            60
                            <span className="span">/month</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="shadow-div" style={{ marginTop: "60px" }}>
                <Link style={{ textDecoration: "none" }} to={'/home'}>
                    <button class="shadow__btn" >
                        uiverse
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Subscribe