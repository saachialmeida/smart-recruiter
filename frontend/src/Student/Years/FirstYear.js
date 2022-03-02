import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

export default function FirstYear() {
    return (
        <Base>
            <div className="pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/YearHome">Year</Link> / First Year</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><span className="blink">(Step) </span> Follow the following Pointers</h2>
                    <hr class="roadmapHR"></hr>
                    <h3>Now You have completed the journey of School Life and have taken it upon yourself to further your academics into the daunting realm of Engineering.</h3>
                    <li>Brace yourself, this is going to be a biggie.</li>
                    <li>The  next 4 years of your life will change your thinking, perspective,  outlook, in short it will frame your personality to a large extent.  Though you’d have heard this, i want to say this again Don’t waste time.</li>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear1" aria-expanded="false" aria-controls="#firstyear1">
                                Enjoy, Make a huge group of friends
                                </div>
                            <div className="collapse show" id="firstyear1">
                                <div className="customcard">
                                    <ul>
                                        <li> Do everything to make sure that you don’t have any regrets after these 4 years. But at the same time, do make sure that no one gets hurt in the process including yourself.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear2" aria-expanded="false" aria-controls="#firstyear2">
                                Study well, Grades are important
                                </div>
                            <div className="collapse" id="firstyear2">
                                <div className="customcard">
                                    <ul>
                                        <li>It is really going to be important after you are done with engineering, whether you have to go for higher education or apply to some of the best companies in the world.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear3" aria-expanded="false" aria-controls="#firstyear3">
                                Get involved in Everything, Curriculum, Co-Curriculum, Extra-Curriculum:
                                </div>
                            <div className="collapse" id="firstyear3">
                                <div className="customcard">
                                    <ul>
                                        <li>Go out, get involved in as many activities as you can, both technical and cultural, as an organizer or a participant. You will always end up learning something. This will help you improve your skillset, interpersonal skills and most of the all your confidence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear4" aria-expanded="false" aria-controls="#firstyear4">
                                Travel and Explore the World
                                </div>
                            <div className="collapse" id="firstyear4">
                                <div className="customcard">
                                    <ul>
                                        <li>Do whatever you want, just make sure when you come out of college, you can say this to yourself.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear5" aria-expanded="false" aria-controls="#firstyear5">
                                Most Important Tip
                                </div>
                            <div className="collapse" id="firstyear5">
                                <div className="customcard">
                                    <ul>
                                        <li>Learn a programming language with the basics of Data Structures and master all it basic concepts</li>
                                        <li>Trust me it is important.</li>
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
