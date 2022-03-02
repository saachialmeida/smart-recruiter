import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const currenttab = (history, path) => {
    if (history.location.pathname === path) {
        return { background: "rgb(40, 116, 240, 0.2)", "border-radius": "30px" }

    }
}

const Navigation = ({ history, path }) => {
    return (
        <div className="navbar-inner">
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/StudentHome"><div className="nav-link" style={currenttab(history, "/StudentHome")}>
                            <i class='bx bxs-right-arrow-alt'></i>
                            <span className="nav-link-text">Dashboard</span>
                        </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RoadmapsHome">
                            <div className="nav-link" style={currenttab(history, "/RoadmapsHome")}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <span className="nav-link-text">Roadmaps</span>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/StudentAlumni">
                            <div className="nav-link" style={currenttab(history, "/StudentAlumni")}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <span className="nav-link-text">Alumni</span>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/YearHome">
                            <div className="nav-link" style={currenttab(history, "/YearHome")}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <span className="nav-link-text">Year wise Roadmaps</span>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ShowInterviewExp">
                            <div className="nav-link" style={currenttab(history, "/ShowInterviewExp")}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <span className="nav-link-text">Interview Exprience</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <hr className="my-3" />
            </div>
        </div>
    )
}

export default withRouter(Navigation);
