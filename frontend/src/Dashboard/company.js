/** *************************
 * Import Files
***************************** */
import React, { useState, useEffect } from 'react'
import Base from './Base'
import { add_company_details, get_company_details, localStore, delete_company_detail, getlocalstore } from '../auth/helper'

import './css/nucleo.css'
import './css/argon.css'

const Company = () => {

    /*----------------------------------------------
     * variable init
    ------------------------------------------------ */
    const [values, setvalues] = useState({
        name: "",
        pre_placement: null,
        date: null,
        Cpackage: 0,
        student_placed: 0,
        technical: "",
        errmsg: "",
        error: false,
        loading: false,
        sucess: false
    });
    const [companyData, setCompanyData] = useState([]);

    const { name, pre_placement, date, Cpackage, student_placed, technical, error, loading, sucess, errmsg } = values;

    /*  ---------------Handler function ------------------*/
    const handleChange = (val) => (event) => {
        setvalues({ ...values, error: false, sucess: false, loading: false, [val]: event.target.value })
    }
    const handleChange2 = () => {
        setvalues({ ...values, error: false, sucess: false, loading: false })
    }

    /** ----------------------------------
     * Success Message Function
    -------------------------------------- */
    const successmsg = () => {
        return (
            sucess && (
                <div className="row">
                    <div className="col-md-12 alert alert-success">
                        <h4 className="text-white">Data Added Successfully...</h4>
                    </div>
                </div>
            )
        )
    }

    /** ----------------------------------
     * Loading Message Function
    -------------------------------------- */
    const loadingmsg = () => {
        return (
            loading && (
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-success">Loading....</h5>
                    </div>
                </div>
            )
        )
    }

    /** ----------------------------------
     * Error Message Function
    -------------------------------------- */
    const errormsg = () => {
        return (
            error && (
                <div className="row">
                    <div className="col-md-12 alert alert-danger">
                        <h5>{errmsg}</h5>
                    </div>
                </div>
            )
        )
    }

    /** ----------------------------------
     * Form Submit Function
    -------------------------------------- */
    const onSubmit = (event) => {
        event.preventDefault();
        setvalues({ ...values, error: false, loading: true });

        // *****check all values****
        if (name === "") {
            alert("please enter name");
        } else if (pre_placement == null && date == null) {
            alert("please enter Date");
        } else if (Cpackage === 0) {
            alert("please enter a valid package");
        } else if (technical === "" || technical === "***select option***") {
            alert("please select technical option");
        } else {

            /**********************************
             * Make API call
             **********************************/
            add_company_details({ name, pre_placement, date, Cpackage, student_placed, technical })
                .then(data => {
                    console.log("DATA", data);
                    if (data.status === true) {
                        setvalues({
                            ...values,
                            name: "",
                            pre_placement: "",
                            date: "",
                            Cpackage: 0,
                            student_placed: 0,
                            technical: "",
                            sucess: true,
                        })
                    } else {
                        setvalues({
                            ...values,
                            name: "",
                            pre_placement: "",
                            date: "",
                            Cpackage: 0,
                            student_placed: 0,
                            technical: "",
                            errmsg: data.msg,
                            error: true,
                        });
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }

    /** ----------------------------------
     * Get Company Data API call
    -------------------------------------- */
    const getdata = () => {
        get_company_details().then(res => {
            console.log("Company DATA", res);
            if (res.status === true) {
                localStore("company_data", res.data, () => {
                    setCompanyData(res.data);
                });
            } else {
                alert('error in fetch Data');
            }
        }).catch(e => {
            console.log(e);
        })
    }

    const getCompanyDetailsFromLocal = () => {
        setCompanyData(getlocalstore("company_data"));
    }

    useEffect(() => {
        getCompanyDetailsFromLocal();
    }, []);
    /** ----------------------------------
     * Company Details Form
    -------------------------------------- */
    const company_form = () => {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div class="form-group">
                        <label>Company Name<span class="asteriskField">*</span></label>
                        <input type="email" class="form-control" placeholder="Enter name of company" value={name} onChange={handleChange("name")} />
                    </div>
                    <div class="form-group">
                        <label>Date of pre Placement talk<span class="asteriskField">*</span></label>
                        <input type="date" class="form-control" value={pre_placement} onChange={handleChange("pre_placement")} />
                    </div>
                    <div class="form-group">
                        <label>Date of on which company coming in campus<span class="asteriskField">*</span></label>
                        <input type="date" class="form-control" value={date} onChange={handleChange("date")} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-group">
                        <label>Company Package<span class="asteriskField">*</span></label>
                        <input type="number" class="form-control" placeholder="Enter company package" value={Cpackage} onChange={handleChange("Cpackage")} />
                    </div>
                    <div class="form-group">
                        <label>Number of student placed last year<span class="asteriskField">*</span></label>
                        <input type="number" class="form-control" placeholder="Enter Number of student placed" value={student_placed} onChange={handleChange("student_placed")} />
                    </div>
                    <div class="form-group">
                        <label>Technical<span class="asteriskField">*</span></label>
                        <select className="form-control" value={technical} onChange={handleChange("technical")}>
                            <option selected>***select option***</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    /** ----------------------------------
     * Company Table Data
    -------------------------------------- */
    const company_data = () => {
        return (
            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col">
                        <div className="card bg-default shadow">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="text-white mb-0">Company Data</h3>
                            </div>
                            <div className="table-responsive">
                                <div className="table align-items-center table-dark table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Pre Placement Date</th>
                                            <th>Date</th>
                                            <th>Package</th>
                                            <th>student</th>
                                            <th>Technical</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {companyData.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.name}</td>
                                                    <td>{data.pre_placement}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.Cpackage}</td>
                                                    <td>{data.student_placed}</td>
                                                    <td>{data.technical}</td>
                                                    <td><button className="btn btn-danger btn-sm" onClick={delete_company_detail(data._id, ()=>{getdata()})}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Base>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Company Details</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button className="btn btn-sm btn-neutral" data-toggle="modal" data-target="#exampleModal">Add Details</button>
                                <button className="btn btn-sm btn-neutral" onClick={getdata}>Refresh Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Add Company Details</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <hr />
                        <div className="modal-body">
                            {company_form()}
                        </div>
                        <hr />
                        <div className="modal-footer">
                            {successmsg()}
                            {loadingmsg()}
                            {errormsg()}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleChange2}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={onSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {company_data()}
        </Base>
    )
}

export default Company;
