import React, { useState, useEffect } from 'react'
import Base from '../Base';
import { getlocalstore } from '../../auth/helper';
import { AddInterviewExp } from '../../auth/studenthelper/StudentIndex';

const InterviewExp = () => {

    const [interviewDetails, setInterviewDetails] = useState({
        email: "",
        Student_name: "",
        Company_Name: "",
        Stpackage: "",
        Date_of_interview: "",
        Student_exp: "",
        loading: false,
        success: false,
        error: false,
        msg: ""
    });

    const { email, Student_name, Company_Name, Stpackage, Date_of_interview, Student_exp, loading, success, error, msg } = interviewDetails;

    const handleChange = (val) => (event) => {
        setInterviewDetails({ ...interviewDetails, error: false, success: false, loading: false, [val]: event.target.value })
    }
    const getDataFromLocalStore = () => {
        setInterviewDetails({
            ...interviewDetails,
            email: getlocalstore('student').email
        })
    }

    const successmsg = () => {
        return (
            success && (
                <div className="row mt-2 ml-1">
                    <div className="col-md-10 alert alert-success">
                        <h4>
                            {msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }

    const loadingmsg = () => {
        return (
            loading && (
                <div className="row m-2 mt-2 ml-1">
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
                <div className="row mt-2 ml-1">
                    <div className="col-md-10 alert alert-danger">
                        <h4>
                            {msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        if (email === "") {
            alert('server Error Please try later....!');
        } else if (Student_name === "") {
            alert('Name field cannot be empty');
        } else if (Company_Name === "") {
            alert('Company Name field cannot be empty');
        } else if (Stpackage === "") {
            alert('package field cannot be empty');
        } else if (Date_of_interview === "") {
            alert('Please select Date');
        } else if (Student_exp === "") {
            alert('Please type your interview experience');
        } else {
            setInterviewDetails({ ...interviewDetails, loading: true })
            AddInterviewExp({ email, Student_name, Company_Name, Stpackage, Date_of_interview, Student_exp })
                .then(res => {
                    console.log(res);
                    if (res.status === true) {
                        setInterviewDetails({
                            ...interviewDetails,
                            loading: false,
                            msg: res.msg,
                            success: true,
                            Student_name: "",
                            Company_Name: "",
                            Stpackage: "",
                            Date_of_interview: "",
                            Student_exp: ""
                        })
                    } else {
                        setInterviewDetails({
                            ...interviewDetails,
                            loading: false,
                            msg: res.msg,
                            error: true,
                            Student_name: "",
                            Company_Name: "",
                            Stpackage: "",
                            Date_of_interview: "",
                            Student_exp: ""
                        })
                    }
                })
        }
    }

    useEffect(() => {
        getDataFromLocalStore()
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
                                        <li className="breadcrumb-item">Student Company experience</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container-fluid mt-1">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="card p-5">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Name<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter Student Name" value={Student_name} onChange={handleChange("Student_name")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Company Name<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter company name" value={Company_Name} onChange={handleChange("Company_Name")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Package<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter branch" value={Stpackage} onChange={handleChange("Stpackage")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Date of Interview<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="date" value={Date_of_interview} onChange={handleChange("Date_of_interview")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Student experience<span class="asteriskField">*</span></span>
                                                    <textarea className="form-control" rows="10" placeholder="write your experience" value={Student_exp} onChange={handleChange("Student_exp")} />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-md btn-primary mt-2" onClick={OnSubmit}>Submit</button>
                                        {loadingmsg()}
                                        {errormsg()}
                                        {successmsg()}
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

export default InterviewExp;