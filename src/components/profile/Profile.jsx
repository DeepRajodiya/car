import React from 'react'
import Navbar from '../Navbar/Navbar'

const Profile = () => {
    // fetch('http://localhost:5000/showprofile')
    //     .then(response => response.json())
    //     .then(user => {
    //         console.log(user.email)
    //         console.log(user.username)
    //         console.log(user.password)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    return (
        <div>
            <Navbar/>
        </div>
    )
}
export default Profile