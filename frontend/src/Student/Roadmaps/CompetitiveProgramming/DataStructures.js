import React from 'react'
import Base from '../../Base'
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom';

export default function Datastructures() {

    return (
        <Base>

            <div className="basic_cp pb-6">
                <div className="container-fluid">
                    {/* ---------------------------------------- First section start -------------------------------- */}

                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/CompetitiveProgramming">Competitive Programming </Link> / Roadmap of Datastructures Beginner</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><u> Data Structure and Algorithm Beginner Roadmap </u></h2>
                    <div className="row mt-2">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse1" aria-expanded="false" aria-controls="backcollapse1">
                                <center><span className="blink"> Syllabus</span></center>
                            </div>
                            <div className="collapse show" id="backcollapse1">
                                <div className="customcard">
                                    <li>1. Basic Data Structures: Arrays, Strings, Stacks, Queues</li>
                                    <li>2. Asymptotic analysis (Big-O notation)</li>
                                    <li>3. Basic math operations (addition, subtraction, multiplication, division, exponentiation)</li>
                                    <li>4. Sqrt(n) primality testing</li>
                                    <li>5. Euclid’s GCD Algorithm</li>
                                    <li>6. Basic Recursion</li>
                                    <li>7. Greedy Algorithms</li>
                                    <li>8. Basic Dynamic Programming</li>
                                    <li>9. Naive string searching</li>
                                    <li>10. O(n logn) Sorting</li>
                                    <li>11. Binary Searching</li>
                                    <br />
                                    <a href="https://www.codechef.com/certification/data-structures-and-algorithms/prepare" target="blank">Know More by visiting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
