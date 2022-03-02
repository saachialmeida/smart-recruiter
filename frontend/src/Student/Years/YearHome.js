import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

const YearHome = () => {
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Select Year</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-12 text-white">
                                <h2>Things to learn in your college years</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6 mt-2">
                                <Link to="/Year/FirstYear">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="h2 font-weight-bold mb-0 text-dark">First Year</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-2">
                                <Link to="/Year/SecondYear">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="h2 font-weight-bold mb-0 text-dark">Second Year</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-2">
                                <Link to="/Year/ThirdYear">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="h2 font-weight-bold mb-0 text-dark">Third Year</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-3">
                                <Link to="/Year/FourthYear">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className="h2 font-weight-bold mb-0 text-dark">Fourth Year</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default YearHome;