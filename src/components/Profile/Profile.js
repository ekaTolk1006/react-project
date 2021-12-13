import './profile.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState()
    const fetchUser = async (token, id) => {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        .then(e => e.json())
        
        setUserData(response?.data)
        

    }
useEffect(() => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if(id && token) { 
        fetchUser(token, id)
    } else {
        navigate('/login')
    }
   

}, [])

    return(
        <div className="container">
            <h1>Profile</h1>
        <div className="card card-profile">

            <div className = "profile-photo">
            <img src={userData?.avatar} alt =""/>
            </div>
            <div className="profile-data">
                <div>
                    <span>{userData?.last_name} </span>
                    <span>{userData?.first_name} </span>

                </div>
                <div>
                    <span>{userData?.email}</span>
                </div>

            </div>
        </div>
        </div>


    )
}