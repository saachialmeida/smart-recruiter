import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

export default function FourthYear() {
    return (
        <Base>
            <div className="pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/YearHome">Year</Link> / Fourth Year</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><span className="blink">(Step) </span> Follow the following Pointers</h2>
                    <hr class="roadmapHR"></hr>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear1" aria-expanded="false" aria-controls="#fourthyear1">
                                It's already high time focus on Major Project
                                </div>
                            <div className="collapse show" id="fourthyear1">
                                <div className="customcard">
                                    <ul>
                                        <li>Master yourself in the field of project you have choose to develop.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear2" aria-expanded="false" aria-controls="#fourthyear2">
                                Practice Mock Interviews
                            </div>
                            <div className="collapse" id="fourthyear2">
                                <div className="customcard">
                                    <ul>
                                        <li>Talk to yourself in laptop webcam and try not to see yourself and aim at camera.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear3" aria-expanded="false" aria-controls="#fourthyear3">
                                Keep following the Third year steps and keep calm
                                </div>
                            <div className="collapse" id="fourthyear3">
                                <div className="customcard">
                                    <ul>
                                        <li>One of the biggest achievement is to wait for your turn and then perfrom, keep yourself down to earth even of your have achieved more.</li>
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
