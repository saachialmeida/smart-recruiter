import React, { useState, useEffect } from 'react'
import Base from '../Base';

import profilebg from '../../images/profilebg.jpg';
import profileImg from '../../images/profile.png';
import { getlocalstore } from '../../auth/helper';
import { Link } from 'react-router-dom';

const Profile = () => {

    const [userProfile, setUserProfile] = useState([]);

    const getUserProfileFromLocal = () => {
        if (getlocalstore("student"))
            setUserProfile(getlocalstore("student"));
    }
    useEffect(() => {
        getUserProfileFromLocal()
    }, []);

    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Profile</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container-fluid mt-1">
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2">
                                    <div className="card card-profile">
                                        <img src={profilebg} alt="Background Img" className="card-img-top" height="200px"/>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-3 order-lg-2">
                                                <div className="card-profile-image">
                                                    <img src={profileImg} className="rounded-circle" alt="profile pic"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-header text-center border-0">
                                            <div className="d-flex justify-content-between">
                                                <Link to="/EditProfile"><button className="btn btn-sm btn-primary mr-4">Edit Profile</button></Link> 
                                                <Link to="/ChangePassword"><button className="btn btn-sm btn-default float-right">Change Password</button></Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row offset-md-3">
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Name</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.name}</h4>
                                                </div>
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Email</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.email}</h4>
                                                </div>
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Enrollment id</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.enrollment_id}</h4>
                                                </div>
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Branch</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.branch}</h4>
                                                </div>
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Mobile Number</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.mobile_number}</h4>
                                                </div>
                                                <div className="col-md-5 card-userprofile">
                                                    <h4>Year of passing</h4>
                                                </div>
                                                <div className="col-md-7 card-userprofile">
                                                    <h4>{userProfile.year_of_passing}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Profile;