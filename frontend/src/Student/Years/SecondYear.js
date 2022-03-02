import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

export default function SecondYear() {
    return (
        <Base>
            <div className="pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/YearHome">Year</Link> / Second Year</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <h2 className="text-center"><span className="blink">(Step) </span> Follow the following Pointers</h2>
                    <hr class="roadmapHR"></hr>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear1" aria-expanded="false" aria-controls="#secondyear1">
                                Focus on core subject :
                        </div>
                            <div className="collapse show" id="secondyear1">
                                <div className="customcard">
                                    <ul>
                                        <li> the subject like DBMS, DS, OS, CN to make the conceptual base strong from the initial stage and it also helps in better understanding of database languages like SQL.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear6" aria-expanded="false" aria-controls="#secondyear6">
                                Enroll in a certification course-
                                </div>
                            <div className="collapse" id="secondyear6">
                                <div className="customcard">
                                    <ul>
                                        <li>In the certification course, you learn the basics of programming language and work on core subjects, which helps in building a strong resume. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear2" aria-expanded="false" aria-controls="#secondyear2">
                                Participate in technical fest-
                                </div>
                            <div className="collapse" id="secondyear2">
                                <div className="customcard">
                                    <ul>
                                        <li>It will help you to better understand the real-world problem. You can participate in hackathons, technical quizzes, programming contests, etc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear3" aria-expanded="false" aria-controls="#secondyear3">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="secondyear3">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear4" aria-expanded="false" aria-controls="#secondyear4">
                                Focus on Communication skills
                                </div>
                            <div className="collapse" id="secondyear4">
                                <div className="customcard">
                                    <ul>
                                        <li> Try to improve vocabulary by reading articles. Try to communicate with your colleagues and friends. </li>
                                        <li> Try to speak in front of the mirror and gain knowledge about the current GD topics. You may prefer medium, dev for articles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear5" aria-expanded="false" aria-controls="#secondyear5">
                                Practice coding daily
                                </div>
                            <div className="collapse" id="secondyear5">
                                <div className="customcard">
                                    <ul>
                                        <li>Try to practice 3-5 questions daily on competitive programming which helps you to make base on the topics like an array, matrixes, dynamic programming, DS, etc. you may prefer hackerrank, HackerEarth, W3School.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#secondyear7" aria-expanded="false" aria-controls="#secondyear7">
                                Learn about trending technologies-
                                </div>
                            <div className="collapse" id="secondyear7">
                                <div className="customcard">
                                    <ul>
                                        <li>
                                            Try to gain knowledge on the latest technologies and their uses,  Acquire knowledge about which companies are working on new technologies what new Projects are going to be introduced in the coming future. This will help you to develop your interest in new technologies.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Base>
    )
}
