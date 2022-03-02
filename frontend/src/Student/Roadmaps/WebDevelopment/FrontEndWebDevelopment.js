import React from 'react'
import Base from '../../Base'
import front_end_basic from '../../../images/roadmaps/webDevelopment/frontEndBasic.png';
import frontEndBasic2 from '../../../images/roadmaps/webDevelopment/frontEndBasic2.png';
import frontEndBasic3 from '../../../images/roadmaps/webDevelopment/frontEndBasic3.png';
import frontEndBasic4 from '../../../images/roadmaps/webDevelopment/frontEndBasic4.png';
import { Link } from 'react-router-dom';

export default function FrontEndWebDevelopment() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-lg-6 col-7">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"><Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Front End Web Development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={front_end_basic} alt="Front End Basic img" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="heading text-center">
                                <h3><u>First learn basic front end languages</u></h3>
                                <h1 className="blink">Step - 1</h1>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.w3schools.com/html/default.asp" target="blank">Learn HTML</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/css/default.asp" target="blank">Learn CSS</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/js/default.asp" target="blank">Learn JavaScript</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/jquery/default.asp" target="blank">Learn Jquery</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4 mb-4">
                        <div className="col-md-3">
                            <div className="heading text-center">
                                <h3><u>Get Familer with CSS framework</u></h3>
                                <h1 className="blink">Step - 2</h1>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.youtube.com/watch?v=sXA1zpv4DhA" target="blank">Learn What is Framework ?</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.youtube.com/watch?v=snQp757_Rr0" target="blank">What is responsive of website?</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="blank">Learn Bootstrap</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://materializecss.com/getting-started.html" target="blank">Learn what is Materialize CSS?</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={frontEndBasic2} alt="Front End Basic img" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4 mb-4">
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={frontEndBasic3} alt="Front End Basic img" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="heading text-center">
                                <h3><u>Learn All things about JavaScript</u></h3>
                                <h1 className="blink">Step - 3</h1>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.javatpoint.com/es6" target="blank">Learn Advance Js (ES6)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/typescript-tutorial" target="blank">Learn Advance Js (TypeScript)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.tutorialspoint.com/nodejs/nodejs_npm.htm" target="blank">Learn Package Manager (Npm or yarn) any one</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.tutorialspoint.com/junit/index.htm" target="blank">Learn JavaScript testing (any one Junit)</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4 mb-4">
                        <div className="col-md-3">
                            <div className="heading text-center">
                                <h3><u>Get Familer with JavaScript framework and libraries (any one)</u></h3>
                                <h1 className="blink">Step - 4</h1>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://reactjs.org/docs/getting-started.html" target="blank">Learn Reactjs (Recommanded)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/angular/default.asp" target="blank">Learn AngularJs</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://angular.io/docs" target="blank">Learn Angular</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://vuejs.org/v2/guide/" target="blank">Learn vueJs</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={frontEndBasic4} alt="Front End Basic img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
