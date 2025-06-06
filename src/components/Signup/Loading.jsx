import React from 'react'
import './loading.css'

const Loading = () => {
    return (
        <>
            <div className="error-image"></div>
            <div className="error-image2"></div>
            <div className="loading">
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                    <div className="bar10"></div>
                    <div className="bar11"></div>
                    <div className="bar12"></div>
                </div>
                <h3>server currently loading...</h3>
            </div>
        </>
    )
}

export default Loading