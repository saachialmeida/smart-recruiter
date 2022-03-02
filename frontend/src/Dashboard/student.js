import React, { useState, useEffect } from 'react'
import Base from './Base'
import './css/nucleo.css'
import './css/argon.css'
import { getStudentDetails, localStore, getlocalstore } from '../auth/helper'

const Student = () => {

    const [students, setStudents] = useState([]);
    const getStudentDetail = () => {
        getStudentDetails()
            .then(res => {
                //console.log("Student info", res);
                if (res.status === true) {
                    localStore("StudentDetails", res.data, () => {
                        setStudents(res.data);
                    });
                }
            });
    }
    const getStudentDetailsFromLocal = () => {
        setStudents(getlocalstore("StudentDetails"));
    }

    useEffect(() => {
        getStudentDetailsFromLocal();
    }, []);
    return (
        <Base>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Student Details</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <button className="btn btn-sm btn-neutral" onClick={getStudentDetail}>Refresh Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--6">
                <div className="card bg-default shadow">
                    <div className="card-header bg-transparent border-0">
                        <h3 className="text-white mb-0">Company Data</h3>
                    </div>
                    <div className="table-responsive">
                        <div className="table align-items-center table-dark table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Enrollment Id</th>
                                    <th>Branch</th>
                                    <th>Phone Number</th>
                                    <th>year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.enrollment_id}</td>
                                                <td>{data.branch}</td>
                                                <td>{data.mobile_number}</td>
                                                <td>{data.year_of_passing}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Student;
