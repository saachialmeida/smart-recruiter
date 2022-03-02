import React, { useState, useEffect } from 'react'
import Base from './Base'
import './css/nucleo.css'
import './css/argon.css'
import { localStore, getlocalstore } from '../auth/helper'
import { GetInterviewExpDetails, ApprovalInterviewDetails } from '../auth/studenthelper/StudentIndex'
import clapping from '../images/clapping.gif';

const Alumni = () => {

    const [interviewExp, setInterviewExp] = useState([]);
    const [individualInterviewData, setindividualInterviewData] = useState([]);
    const [values, setValues] = useState({
        loading: false,
        showmodel: false,
        didredirect: false,
    })
    var count = 0;
    const { loading, showmodel } = values;
    const getDetailsOfInterview = () => {
        if (getlocalstore("InterviewExp").length !== 0) {
            setInterviewExp(getlocalstore("InterviewExp"));
        }
    }

    const getDataFromDB = () => {
        setValues({ ...values, loading: true });
        GetInterviewExpDetails().then(res => {
            if (res.status === true) {
                localStore("InterviewExp", res.data, () => {
                    setInterviewExp(res.data);
                    setValues({ ...values, loading: false });
                });
            } else {
                alert('Server error data Not found, please contact to Admin');
            }
        }).catch(e => {
            console.log(e);
        })
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
    const individualStudentData = (val) => () => {
        setValues({ ...values, showmodel: true })
        interviewExp.map((data, index) => {
            if (data._id === val) {
                setindividualInterviewData(data);
            }
        })
    }
    const ApprovalInterviewDetailsByAdmin = () => {
        var StEmail = individualInterviewData.email;
        var appro = true;
        ApprovalInterviewDetails({ StEmail, appro })
            .then(res => {
                console.log(res);
                if (res.status === true) {
                    alert('data is approval by admin');
                    getDataFromDB();
                }
            })
    }
    const displayNoneMsg = () => {
        if (count === 0) {
            return (
                <div className="col-md-12 text-center displaymsgapproval">
                    <h1>All Interview Experience are Approval</h1>
                    <img src={clapping} alt="all done"/>
                </div>
            )
        }
    }
    const InterviewDetailsModel = () => {
        return (
            showmodel && (
                <div className="modal fade" id="companyModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4 p-2 col-12">
                                        <h4 className="static">Student Name</h4>
                                    </div>
                                    <div className="col-md-8 p-2 col-12">
                                        <h4 className="dynamic">{individualInterviewData.Student_name}</h4>
                                    </div>
                                    <div className="col-md-4 p-2 col-12">
                                        <h4 className="static">Company</h4>
                                    </div>
                                    <div className="col-md-8 p-2 col-12">
                                        <h4 className="dynamic">{individualInterviewData.Company_Name}</h4>
                                    </div>
                                    <div className="col-md-4 p-2 col-12">
                                        <h4 className="static">Package</h4>
                                    </div>
                                    <div className="col-md-8 p-2 col-12">
                                        <h4 className="dynamic">{individualInterviewData.Stpackage}</h4>
                                    </div>
                                    <div className="col-md-4 p-2 col-12">
                                        <h4 className="static">Date of Interview</h4>
                                    </div>
                                    <div className="col-md-8 p-2 col-12">
                                        <h4 className="dynamic">{individualInterviewData.Date_of_interview}</h4>
                                    </div>
                                    <div className="col-md-12 p-2 col-12">
                                        <h4 className="static">Student Experience</h4>
                                    </div>
                                    <div className="col-md-12 p-2 col-12">
                                        <h4>{individualInterviewData.Student_exp}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={ApprovalInterviewDetailsByAdmin}>Approval</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    useEffect(() => {
        getDetailsOfInterview()
    }, [])
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Alumni Interview Experience</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button className="btn btn-sm btn-neutral" onClick={getDataFromDB}>Refresh Data</button>
                            </div>
                        </div>
                        <div className="row">
                            {loadingmsg()}
                            {interviewExp.map((data, index) => {
                                if (data.Approval === false) {
                                    count++;
                                    return (
                                        <button className="col-md-4 col-12 mt-3" data-toggle="modal" data-target="#companyModel" key={index} onClick={individualStudentData(data._id)}>
                                            <div className="mycard card-stats">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h4 className="card-title text-uppercase text-muted mb-0">{data.Company_Name}</h4>
                                                            <span className="h2 font-weight-bold mb-0">{data.Student_name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                }
                            })}
                            {displayNoneMsg()}
                        </div>
                        {InterviewDetailsModel()}
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Alumni;
