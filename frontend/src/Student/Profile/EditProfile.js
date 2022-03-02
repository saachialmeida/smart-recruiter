import React, { useState, useEffect } from 'react'
import Base from '../Base';
import { getlocalstore, localStore } from '../../auth/helper';
import { updateProfile } from '../../auth/studenthelper/StudentIndex';
import { Redirect } from 'react-router-dom';

const EditProfile = () => {

    const [editStudent, setEditStudent] = useState({
        name: "",
        email: "",
        enrollment_id: "",
        branch: "",
        mobile_number: "",
        year_of_passing: "",
        error: false,
        redirect: false,
        loading: false,
        msg: "",
    });

    const { name, email, enrollment_id, branch, mobile_number, year_of_passing, error, redirect, loading, msg } = editStudent;
    const handleChange = (val) => (event) => {
        setEditStudent({ ...editStudent, error: false, success: false, loading: false, [val]: event.target.value });
    }

    const getStudentFromLocal = () => {
        if (getlocalstore("student")) {
            setEditStudent({
                ...editStudent,
                name: getlocalstore("student").name,
                email: getlocalstore("student").email,
                enrollment_id: getlocalstore("student").enrollment_id,
                branch: getlocalstore("student").branch,
                mobile_number: getlocalstore("student").mobile_number,
                year_of_passing: getlocalstore("student").year_of_passing,
            })
        }
    }

    const loadingmsg = () => {
        return (
            loading && (
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-success">Loading....<i class='bx bx-loader bx-spin' ></i></h5>
                    </div>
                </div>
            )
        )
    }
    const errormsg = () => {
        return (
            error && (
                <div className="row">
                    <div className="col-md-12 alert alert-danger">
                        <h4>
                            {msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }
    const redirectToProfile = () => {
        return (
            redirect && (
                <Redirect to="/Profile"></Redirect>
            )
        )
    }

    const OnSubmit = () => {
        if (name === "") {
            alert('please enter name');
        } else if (enrollment_id === "") {
            alert('please enter enrollment id');
        } else if (branch === "") {
            alert('please enter Branch');
        } else if (mobile_number.toString().length !== 10 || mobile_number.toString().length > 10) {
            alert('please enter valid mobile number');
        } else if (year_of_passing === "") {
            alert('please enter year of passing');
        } else {
            setEditStudent({ ...editStudent, loading: true })
            updateProfile({ email, name, enrollment_id, branch, mobile_number, year_of_passing })
                .then(data => {
                    if (data.status === true) {
                        localStore("student", data.student, () => {
                            alert(data.msg);
                            setEditStudent({ ...editStudent, loading: false, redirect: true })
                        })
                    } else {
                        setEditStudent({ ...editStudent, msg: data.msg, error: true, loading: false })
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }

    useEffect(() => {
        getStudentFromLocal()
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
                                        <li className="breadcrumb-item">Edit Profile</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container-fluid mt-1">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="card p-5">
                                        {loadingmsg()}
                                        {errormsg()}
                                        {redirectToProfile()}
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Name<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter new password" value={name} onChange={handleChange("name")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Email</span>
                                                    <input disabled className="input100" type="text" placeholder="Please enter new password" value={email} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Enrollment id</span>
                                                    <input disabled className="input100" type="text" placeholder="Please enter new password" value={enrollment_id} onChange={handleChange("enrollment_id")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Branch<span class="asteriskField">*</span></span>
                                                    <select className="select_input100" value={branch} onChange={handleChange("branch")}>
                                                        <option disabled>***select option***</option>
                                                        <option>CS</option>
                                                        <option>IT</option>
                                                        <option>EC</option>
                                                        <option>MECH</option>
                                                    </select>
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Mobile Number<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter new password" value={mobile_number} onChange={handleChange("mobile_number")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Year of passing</span>
                                                    <input disabled className="input100" type="text" placeholder="Please enter new password" value={year_of_passing} onChange={handleChange("year_of_passing")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-md btn-primary mt-2" onClick={OnSubmit}>Submit</button>
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

export default EditProfile;