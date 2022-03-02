import React from 'react'
import Base from '../../Base'
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom';

export default function BasicWebDevelopment() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Basic of Web Development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row" id="basicwebgroup">
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#internet" aria-expanded="false" aria-controls="internet">
                                What is Internet?
                                </div>
                            <div className="collapse show" id="internet">
                                <div className="customcard">
                                    The Internet is a global computer network for communication – actually nothing more than a basic computer network. The Internet simply moves data from one place to another, so that we can chat, browse and share. There are millions upon millions of servers on the Internet.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#http" aria-expanded="false" aria-controls="internet">
                                How does the Internet work?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                    The Internet is a network of networks. It works by using a technique called packet switching, and by relying on standardized networking protocols that all computers can interpret.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#dns" aria-expanded="false" aria-controls="internet">
                                What is HTTP?
                                </div>
                            <div className="collapse" id="dns">
                                <div className="customcard">
                                    <ul>
                                        <li>HTTP stands for Hyper Text Transfer Protocol</li>
                                        <li>WWW is about communication between web clients and servers</li>
                                        <li>Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=H7bDwI5nUl8" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#browser" aria-expanded="false" aria-controls="internet">
                                How browser works step by step?
                                </div>
                            <div className="collapse" id="browser">
                                <div className="customcard">
                                    <ul>
                                        <li>Process HTML markup and build the DOM tree.</li>
                                        <li>Process CSS markup and build the CSSOM tree.</li>
                                        <li>Combine the DOM and CSSOM into a render tree.</li>
                                        <li>Run layout on the render tree to compute geometry of each node.</li>
                                        <li>Paint the individual nodes to the screen.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=5VEDjg9zGEk" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
