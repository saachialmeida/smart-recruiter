import React, { useState, useEffect } from 'react'
import Base from '../Base';
import { GetInterviewExpDetails } from '../../auth/studenthelper/StudentIndex';
import { localStore, getlocalstore } from '../../auth/helper';
import '../css/StudentDashBoard.css';
import speechless from '../../images/speechless.gif';

const ShowInterviewExp = () => {

    const [interviewExp, setInterviewExp] = useState([]);
    const [individualInterviewData, setindividualInterviewData] = useState([]);
    const [values, setValues] = useState({
        loading: false,
        showmodel: false
    });
    var count = 0;
    const { loading, showmodel } = values;

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
    const getDataFromDB = () => {
        if (getlocalstore("InterviewExp").length !== 0) {
            setInterviewExp(getlocalstore("InterviewExp"));
        } else {
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
    }

    const InterviewDetailsModel = () => {
        return (
            showmodel && (
                <div className="modal fade" id="companyModel2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12 p-2 col-12">
                                            <h3> <i class='bx bxs-chevrons-right bx-fade-left' ></i>  {individualInterviewData.Student_name} ({individualInterviewData.Stpackage}) <span>{individualInterviewData.Company_Name}</span></h3>
                                        <hr/>
                                        <h4>{individualInterviewData.Student_exp}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    useEffect(() => {
        getDataFromDB();
    }, []);

    const displayNoneMsg = () => {
        if (count === 0) {
            return (
                <div className="col-md-12 text-center displaymsgapproval">
                    <h1>There is No Interview Experience to display</h1>
                    <img src={speechless} alt="all done"/>
                </div>
            )
        }
    }

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
                        <div className="row">
                            {loadingmsg()}
                            {interviewExp.map((data, index) => {
                                if (data.Approval === true) {
                                    count++;
                                    return (
                                        <button className="col-md-6 mt-3" data-toggle="modal" data-target="#companyModel2" key={index} onClick={individualStudentData(data._id)}>
                                            <div id="interviewH2">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i class='bx bx-bell bx-tada' ></i>
                                                    </div>
                                                    <div className="col-11">
                                                        <h2>{data.Student_name} ({data.Stpackage})</h2>
                                                        <span>{data.Date_of_interview}</span>
                                                        <h4>{data.Company_Name}</h4>
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

export default ShowInterviewExp;