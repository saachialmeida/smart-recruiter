import React, { useState, useEffect } from 'react'
import Base from './Base';

import { getlocalstore, get_company_details, localStore, getCompanyFormDetails } from '../auth/helper';

const StudentHome = () => {

    const [companyData, setcompanyData] = useState([]);
    const [individualData, setindividualData] = useState([]);
    const [companyFormData, setCompanyFormData] = useState([]);

    const [values, setvalues] = useState({
        Cform: false
    });
    const { Cform } = values;

    const getDetailsFromLocal = (val) => {
        if (getlocalstore(val).length !== 0) {
            if (val === "company_data") {
                setcompanyData(getlocalstore(val));
            }
            else if (val === "companyFormData") {
                setCompanyFormData(getlocalstore(val));
            }
        } else {
            if (val === "company_data") {
                //alert('fetch data from DB company');
                get_company_details().then(res => {
                    if (res.status === true) {
                        localStore("company_data", res.data, () => {
                            setcompanyData(res.data);
                        });
                    } else {
                        alert('Server error data Not found, please contact to Admin');
                    }
                }).catch(e => {
                    console.log(e);
                })
            } else if (val === "companyFormData") {
                //alert('fetch data from DB company Form');
                getCompanyFormDetails().then(res => {
                    if (res.status === true) {
                        localStore("companyFormData", res.data, () => {
                            setCompanyFormData(res.data);
                        });
                    } else {
                        alert('Server error data Not found, please contact to Admin');
                    }
                }).catch(e => {
                    console.log(e);
                })
            }

        }
    }

    useEffect(() => {
        getDetailsFromLocal("company_data");
        getDetailsFromLocal("companyFormData");
    }, []);

    const getIndividualCompany = (val) => () => {
        setvalues({ ...values, Cform: true })
        companyData.map((data, index) => {
            if (data._id === val) {
                setindividualData(data);
            }
        })
    }
    const Companyregistrationform = (val) => {
        if (Cform === true) {
            var condi = false;
            var link_val = "";
            companyFormData.map((data, i) => {
                var Cyear = getlocalstore('student').year_of_passing;
                if (data.student_year === Cyear) {
                    if (data.company_name === val) {
                        condi = true;
                        link_val = data.company_google_link;
                    }
                }
            })
            if (condi === true) {
                return (
                    <a href={link_val} class="btn btn-success" target="blank">Registration form</a>
                )
            }
        }
    }
    const CompanyModel = () => {
        return (
            <div className="modal fade" id="companyModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Company Name</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.name}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Pre Placement Talk</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.pre_placement}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Date of Test</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.date}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Package</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.Cpackage}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Student Placed last year</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.student_placed}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Technical Company</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.technical}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {Companyregistrationform(individualData.name)}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
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
                                        <li className="breadcrumb-item">Upcoming Company's</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-12">
                                <h2> <i class='bx bxs-bell-ring bx-tada' ></i>  Important announcement</h2>
                            </div>
                        </div>
                        <div className="row">
                            {companyData.map((data, index) => {
                                return (
                                    <button className="col-md-4 col-sm-6 mt-3" data-toggle="modal" data-target="#companyModel" key={index} onClick={getIndividualCompany(data._id)}>
                                        <div className="mycard card-stats">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="card-title text-uppercase text-muted mb-0">{data.date}</h4>
                                                        <span className="h2 font-weight-bold mb-0">{data.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                        {CompanyModel()}
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default StudentHome;