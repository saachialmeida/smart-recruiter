import React from 'react'
import Base from '../../Base';
import { Link } from 'react-router-dom';
import '../../css/StudentDashBoard.css';

const WebDevelopment = () => {
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><Link to="/RoadmapsHome">Roadmaps</Link> / Web Development</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <Link to="/WebDevelopment/Basic">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0"><span className="blink"> (Step - 1) </span></h4>
                                                    <span className="h2 font-weight-bold mb-0">Basic of Web Development</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <Link to="/WebDevelopment/Front-End-Web-Development">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0"><span className="blink"> (Step - 2) </span></h4>
                                                    <span className="h2 font-weight-bold mb-0">Front End Development</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <Link to="/WebDevelopment/git_and_github">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0"><span className="blink"> (Step - 3) </span></h4>
                                                    <span className="h2 font-weight-bold mb-0">Git and Github</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-3">
                                <Link to="/WebDevelopment/BackEndWebDevelopment">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0"><span className="blink"> (Step - 4) </span></h4>
                                                    <span className="h2 font-weight-bold mb-0">Back End Development</span>
                                                </button>
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

export default WebDevelopment;