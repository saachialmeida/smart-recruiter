import React, { useState, useEffect } from 'react'
import Base from './Base';
import { getlocalstore, add_company_form_details, localStore, getCompanyFormDetails } from '../auth/helper';

export default function CompanyForm() {


    const [companyName, setCompanyName] = useState([]);
    const [companyLocalStorageData, setCompanyLocalStorageData] = useState([]);
    const [companyFormData, setCompanyFormData] = useState({
        company_name: '',
        student_year: '',
        company_google_link: '',
        error: false,
        success: false,
        loading: false,
        msg: ''
    });
    const { company_name, student_year, company_google_link, success, error, loading, msg } = companyFormData;
    /*  ---------------Handler function ------------------*/
    const handleChange = (val) => (event) => {
        setCompanyFormData({ ...companyFormData, error: false, success: false, loading: false, [val]: event.target.value })
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        if (company_name === "*** Select option ***" || company_name === "")
            alert('Please select company Name');
        else if (student_year === "")
            alert('please enter student year');
        else if (company_google_link === "")
            alert('please enter Company form URL');
        else {
            setCompanyFormData({ ...companyFormData, loading: true })
            add_company_form_details({ company_name, student_year, company_google_link })
                .then(data => {
                    if (data.status === true) {
                        getCompanyFormDetails().then(res => {
                            if (res.status === true) {
                                localStore("companyFormData", res.data, () => {
                                    setCompanyLocalStorageData(res.data);
                                    setCompanyFormData({
                                        ...companyFormData,
                                        loading: false,
                                        msg: data.msg,
                                        success: true,
                                        company_name: '*** Select option ***',
                                        student_year: '',
                                        company_google_link: ''
                                    })
                                });
                            } else {
                                alert('Server error data Not found, please contact to Admin');
                            }
                        }).catch(e => {
                            console.log(e);
                        })

                    } else {
                        setCompanyFormData({
                            ...companyFormData,
                            loading: false,
                            msg: data.msg,
                            error: true,
                        })
                    }
                })
        }
    }

    const successmsg = () => {
        return (
            success && (
                <div className="row">
                    <div className="col-md-6 alert alert-success">
                        <h5 className="text-white">
                            {msg}
                        </h5>
                    </div>
                </div>
            )
        )
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
                    <div className="col-md-6 alert alert-danger">
                        <h4>
                            {msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }
    const getDataFromLocal = () => {
        if (getlocalstore("companyFormData").length !== 0) {
            setCompanyLocalStorageData(getlocalstore("companyFormData"));
        } else {
            setCompanyFormData({ ...companyFormData, loading: true });
            getCompanyFormDetails().then(res => {
                if (res.status === true) {
                    localStore("companyFormData", res.data, () => {
                        setCompanyLocalStorageData(res.data);
                        setCompanyFormData({ ...companyFormData, loading: false });
                    });
                } else {
                    alert('Server error data Not found, please contact to Admin');
                }
            }).catch(e => {
                console.log(e);
            })
        }
    }

    useEffect(() => {
        setCompanyName(getlocalstore('company_data'))
        getDataFromLocal()
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
                                        <li className="breadcrumb-item">Company Form</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container-fluid mt-1">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="card p-5">
                                        {successmsg()}
                                        {loadingmsg()}
                                        {errormsg()}
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Company Name<span class="asteriskField">*</span></span>
                                                    <select className="select_input100" value={company_name} onChange={handleChange("company_name")}>
                                                        <option selected>*** Select option ***</option>
                                                        {companyName.map((data, i) => {
                                                            return (
                                                                <option>{data.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Year<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter year" value={student_year} onChange={handleChange("student_year")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="wrap-input100 validate-input m-b-15">
                                                    <span className="label-input100">Enter Form Link<span class="asteriskField">*</span></span>
                                                    <input className="input100" type="text" placeholder="Please enter form Link" value={company_google_link} onChange={handleChange("company_google_link")} />
                                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-md btn-primary mt-2" onClick={OnSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <div className="card bg-default shadow">
                                        <div className="card-header bg-transparent border-0">
                                            <h3 className="text-white mb-0">Company Data</h3>
                                        </div>
                                        <div className="row p-3 text-white">
                                            <div className="col-md-4">
                                                <h2>company Name</h2>
                                            </div>
                                            <div className="col-md-4">
                                                <h2>Student Year</h2>
                                            </div>
                                            <div className="col-md-4">
                                                <h2>google form link</h2>
                                            </div>
                                        </div>
                                        <hr />
                                        {loadingmsg()}
                                        {
                                            companyLocalStorageData.map((data, index) => {
                                                return (
                                                    <div className="row p-3 text-white" key={index}>
                                                        <div className="col-md-4">
                                                            <h4>{data.company_name}</h4>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>{data.student_year}</h4>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>{data.company_google_link}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

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
