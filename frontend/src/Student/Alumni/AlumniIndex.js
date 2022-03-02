import React, { useState } from 'react'
import Base from '../Base';
import { AlumniData } from '../../auth/studenthelper/StudentIndex';
import '../css/StudentDashBoard.css';

const AlumniIndex = () => {

    const [Data, setData] = useState({
        course: "",
        loading: false,
    });

    const [alumniDatadisplay, setAlumniData] = useState([]);
    const [alumniSearch, setalumniSearch] = useState("");
    const { course, loading } = Data;

    const handleChange = (val) => (event) => {
        setData({ ...Data, [val]: event.target.value });
    }

    const searchHandler = () => (e) => {
        setalumniSearch(e.target.value);
    }

    const loadingmsg = () => {
        return (
            loading && (
                <div className="row p-3">
                    <div className="col-md-12">
                        <h5 className="text-success">Loading....<i class='bx bx-loader bx-spin' ></i></h5>
                    </div>
                </div>
            )
        )
    }
    const OnSubmit = () => {
        if (course === "***Select Course and Brach***" || course === "") {
            alert('Please select course');
        } else {
            setData({ ...Data, loading: true })
            AlumniData(course)
                .then(res => {
                    console.log(res + " " + res.status);
                    if (res.status === true) {
                        setAlumniData(res.exdata);
                        setData({ ...Data, loading: false });
                    } else {
                        alert('error in fetching data');
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }

    const filteralumni = alumniDatadisplay.filter(alu => {
        return alu.Email.includes(alumniSearch);
    })

    return (
        <Base>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Alumni Details</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-md-6 col-5 text-right">
                                <div className="row">
                                    <div className="col-md-6 offset-md-4">
                                        <select className="form-control" value={course} onChange={handleChange("course")}>
                                            <option selected>***Select Course and Brach***</option>
                                            <option value="BCA_and_MCA">BCA and MCA</option>
                                            <option value="BSC_CS">BSC (CS)</option>
                                            <option value="BSC_CS_and_IT">BSC (CS and IT)</option>
                                            <option value="BTECH_CS">B.Tech (CS)</option>
                                            <option value="BTECH_IT">B.Tech (IT)</option>
                                            <option value="MTECH_CS">M.Tech (CS)</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-sm btn-success" onClick={OnSubmit}>Get Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--6">
                <div className="card bg-default shadow">
                    <div className="card-header bg-transparent border-0">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-white mb-0">Alumni Data</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <input className="alumniinputfield" type="text" placeholder="Search by Email" value={alumniSearch} onChange={searchHandler("alumniSearch")} />
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div className="table align-items-center table-dark table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PhoneNumber</th>
                                    <th>State</th>
                                    <th>year</th>
                                    <th>Country</th>
                                    <th>WorkingIn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loadingmsg()}
                                {
                                    filteralumni.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.Name}</td>
                                                <td>{data.Email}</td>
                                                <td>{data.PhoneNumber}</td>
                                                <td>{data.State}</td>
                                                <td>{data.Year}</td>
                                                <td>{data.Country}</td>
                                                <td>{data.WorkingIn}</td>
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

export default AlumniIndex;