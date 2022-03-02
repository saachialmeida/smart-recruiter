import React from 'react'
import Base from '../../Base';
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom';
import CPP from '../../../images/roadmaps/cp/c++.jpg';
import Java from '../../../images/roadmaps/cp/Java.jpg';
export default function CompetitiveRoadmap() {
    return (
        <Base>
            <div className="basic_cp pb-6">
                <div className="container-fluid">
                    {/* ---------------------------------------- First section start -------------------------------- */}

                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/CompetitiveProgramming">Competitive Programming </Link> / Roadmap of C.P</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <h2 className="text-center"><u><span className="blink">(Step - 1)</span> Choose a language and learn its syntax </u></h2>
                    <div className="row mt-2">
                        <div className="col-md-6 col-12">
                            <div className="row" id="cpgroup">
                                <div className="col-md-12 col-12 mt-2">
                                    <div className="collaspebtn" data-toggle="collapse" data-parent="#cpgroup" href="#backcollapse1" aria-expanded="false" aria-controls="backcollapse1">
                                        How to print "hello world" in your language
                                </div>
                                    <div className="collapse show" id="backcollapse1">
                                        <div className="customcard">
                                            Given program is the simplest program of printing “Hello World” to the screen. Let us try to understand every bit of code step by step.
                                    <br />
                                            <a href="https://www.geeksforgeeks.org/beginning-java-programming-with-hello-world-example/" target="blank">Know More by visiting</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12 mt-2">
                                    <div className="collaspebtn" data-toggle="collapse" data-parent="#cpgroup" href="#backcollapse2" aria-expanded="false" aria-controls="backcollapse2">
                                        Take user input and print the same
                                </div>
                                    <div className="collapse" id="backcollapse2">
                                        <div className="customcard">
                                            Take user name and print in console.
                                    <br />
                                            <a href="https://www.w3schools.com/java/java_user_input.asp#:~:text=Java%20User%20Input%20The%20Scanner%20class%20is%20used,%28%29%20method%2C%20which%20is%20used%20to%20read%20Strings%3A" target="blank">Know More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row" id="cpgroup2">
                                <div className="col-md-12 col-12 mt-2">
                                    <div className="collaspebtn" data-toggle="collapse" data-parent="#cpgroup2" href="#backcollapse3" aria-expanded="false" aria-controls="backcollapse3">
                                        What makes learning it important?
                                    </div>
                                    <div className="collapse" id="backcollapse3">
                                        <div className="customcard">
                                            Learn the main concepts where it will apply in future and what is the scope of developing projects with it.
                                        <br />
                                            <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-160" target="blank">Know More for C++</a><br />
                                            <a href="https://docs.oracle.com/en/java/" target="blank">Know More for Java</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12 mt-2">
                                    <div className="collaspebtn" data-toggle="collapse" data-parent="#cpgroup2" href="#backcollapse4" aria-expanded="false" aria-controls="backcollapse4">
                                        Where did it start ?
                                </div>
                                    <div className="collapse" id="backcollapse4">
                                        <div className="customcard">
                                            Learn the history for language.
                                        <br />
                                            <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-160" target="blank">Know More for C++</a><br />
                                            <a href="https://docs.oracle.com/en/java/" target="blank">Know More for Java</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className="roadmapHR" />
                    {/* ---------------------------------------- First section end -------------------------------- */}

                    {/* ---------------------------------------- Second section start -------------------------------- */}
                    <h2 className="text-center mt-5"><u><span className="blink">(Step - 2)</span> Choose one langauage from the list (C++ or Java)</u></h2>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-6">

                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for C++ Developer</u></h2>
                                <img className="img-responsive" src={CPP} alt="C++ img" />
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/writing-first-c-program-hello-world-example/" target="blank"><span className="blink">(Step - 1)</span> Learn Basics (v.Imp)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/basic-input-output-c/" target="blank"><span className="blink">(Step - 2)</span> Learn Input and output</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" target="blank"><span className="blink">(Step - 3)</span>Basic knowlegde of Algorithms/ STL</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/stdstring-class-in-c/?ref=lbp" target="blank"><span className="blink">(Step - 4)</span> Learn Basic Strings</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.codechef.com/contests" target="blank"><span className="blink">(Step - 5)</span> Participate into Contests</a>
                            </div>

                        </div>
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/operators-c-c/?ref=lbp" target="blank"> <span className="blink">(Step - 6)</span> Learn Operators</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/arrays-in-c-cpp/?ref=lbp" target="blank"> <span className="blink">(Step - 7)</span> Learn Arrays</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/?ref=lbp" target="blank"> <span className="blink">(Step - 8)</span> Learn Object Oriented Programming</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/file-handling-c-classes/?ref=lbp" target="blank"> <span className="blink">(Step - 9)</span> Learn File Handling</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems" target="blank"> <span className="blink">(Step - 10)</span>Practice Probelms on Codechef</a>
                            </div>
                        </div>
                    </div>
                    <hr className="roadmapHR" />
                    {/* ---------------------------------------- Second section end -------------------------------- */}

                    <div className="row mb-4 mt-4">
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/java/?ref=lbp" target="blank"><span className="blink">(Step - 1)</span> Learn Basics (v.Imp)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/decision-making-javaif-else-switch-break-continue-jump/?ref=lbp"><span>(Step - 2)</span> Learn Flow Control</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/collections-in-java-2/?ref=lbp" target="blank"><span className="blink">(Step - 3)</span> Get Basic knowlegde of Collections</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/strings-in-java/?ref=lbp" target="blank"><span className="blink">(Step - 4)</span> Learn Basic Strings</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.codechef.com/contests" target="blank"><span className="blink">(Step - 5)</span> Participate into Contests</a>
                            </div>

                        </div>
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/constructors-in-java/?ref=lbp" target="blank"> <span className="blink">(Step - 6)</span> Learn Constructors</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/arrays-in-java/?ref=lbp" target="blank"> <span className="blink">(Step - 7)</span> Learn Arrays</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/classes-objects-java/?ref=lbp" target="blank"> <span className="blink">(Step - 8)</span> Learn Object Oriented Programming</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.geeksforgeeks.org/file-handling-in-java-with-crud-operations/?ref=lbp" target="blank"> <span className="blink">(Step - 9)</span> Learn File Handling</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems" target="blank"> <span className="blink">(Step - 10)</span>Practice Probelms on Codechef</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for Java Developer</u></h2>
                                <img className="img-responsive" src={Java} alt="JAva img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}