import React from 'react'
import Base from '../../Base'
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom'
import python from '../../../images/roadmaps/webDevelopment/BackEnd/python.png';
import NodeJs from '../../../images/roadmaps/webDevelopment/BackEnd/NodeJs.png';
import PHP from '../../../images/roadmaps/webDevelopment/BackEnd/php.png';
import Ruby from '../../../images/roadmaps/webDevelopment/BackEnd/Ruby.png';
import SQL from '../../../images/roadmaps/webDevelopment/BackEnd/SQL.png';

export default function BackEndWebDevelopment() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-lg-6 col-7">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"><Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Back End Web Development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h3 className="text-center"><u><span className="blink">(Step - 1)</span> Before Learning Back End Development get familier with back end terminologies</u></h3>
                    <div className="row mt-2 mb-4" id="Backgroup">
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse1" aria-expanded="false" aria-controls="backcollapse1">
                                What is web server ?
                                </div>
                            <div className="collapse show" id="backcollapse1">
                                <div className="customcard">
                                    A web server is server software, or hardware dedicated to running this software, that can satisfy client requests on the World Wide Web. A web server can, in general, contain one or more websites. A web server processes incoming network requests over HTTP and several other related protocols.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=cxdsNQXFFDk" target="blank">Know More by watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse2" aria-expanded="false" aria-controls="backcollapse2">
                                What is RESTful API's ?
                                </div>
                            <div className="collapse" id="backcollapse2">
                                <div className="customcard">

                                    The term REST stands for REpresentational State Transfer. It is an architectural style that defines a set of rules in order to create Web Services. In a client-server communication, REST suggests to create an object of the data requested by the client and send the values of the object in response to the user. For example, if the user is requesting for a movie in Bangalore at a certain place and time, then you can create an object on the server-side.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=qVTAB8Z2VmA" target="blank">Know More by watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse3" aria-expanded="false" aria-controls="backcollapse3">
                                What is MVC ?
                                </div>
                            <div className="collapse" id="backcollapse3">
                                <div className="customcard">
                                    The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.
                                    <br />
                                    <a href="https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm" target="blank">Learn more about MVC</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse4" aria-expanded="false" aria-controls="backcollapse4">
                                What is oAuth 2.0 ?
                                </div>
                            <div className="collapse" id="backcollapse4">
                                <div className="customcard">
                                    OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=xdiLXCYab7g" target="blank">Learn more about MVC</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse5" aria-expanded="false" aria-controls="backcollapse5">
                                What is Database and different b/w Relational and Nosql DB ?
                                </div>
                            <div className="collapse" id="backcollapse5">
                                <div className="customcard">
                                    A database is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques.      <br />
                                    <a href="https://www.javatpoint.com/what-is-database" target="blank">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#Backgroup" href="#backcollapse6" aria-expanded="false" aria-controls="backcollapse6">
                                Back end langauages and framework ?
                                </div>
                            <div className="collapse" id="backcollapse6">
                                <div className="customcard">
                                    <ul>
                                        <li> Spring (Java framework) </li>
                                        <li> Expressjs (NodeJs framework) </li>
                                        <li> Django (python framework) </li>
                                        <li> Laravel (PHP framework) </li>
                                        <li> ASP.Net (.Net framework) </li>
                                    </ul>
                                    <a href="https://www.decipherzone.com/blog-detail/top-10-best-backend-frameworks-for-web-development-in-2020" target="blank">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center mt-4"><u><span className="blink">(Step - 2)</span> Learn SQL and interation of languages (Java, NodeJs, PHP, Python) with DataBase</u></h3>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-6">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={SQL} alt="Sql img" />
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/sql/" target="blank">Learn SQL (v.Imp)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/what-is-rdbms" target="blank">Learn Relational DataBase</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/java-jdbc" target="blank">Get Basic knowlegde of JDBC</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/php/php_mysql_intro.asp" target="blank">Learn PHP:MySQL DataBase</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/nosql-databases" target="blank">Learn NoSQL DataBase</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.guru99.com/must-know-linux-commands.html" target="blank">Learn Linux Basic command</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center mt-4"><u><span className="blink">(Step - 3)</span> Choose one langauage from the list (Java, Python, NodeJs, PHP, Ruby)</u></h3>
                    <div className="row mb-4 mt-4">
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for Python Developer</u></h2>
                                <img className="img-responsive" src={python} alt="Back End python img" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h3>Follow Step by Step</h3>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.javatpoint.com/python-tutorial" target="blank"><span className="blink">(Step - 1)</span> Learn Python</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/python/python_pip.asp" target="blank"><span className="blink">(Step - 2)</span> Learn python Package Manager (pip)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://docs.djangoproject.com/en/3.1/intro/tutorial01/" target="blank"><span className="blink">(Step - 3)</span> Learn python Framework (Django)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.tutorialspoint.com/unittest_framework/unittest_framework_overview.htm" target="blank"><span className="blink">(Step - 4)</span> Learn python Testing (pyUnit)</a>
                            </div>
                        </div>
                    </div>
                    <hr className="roadmapHR" />
                    <div className="row mb-4 mt-4">
                        <div className="col-md-3">
                            <div className="text-center">
                                <h3>Follow Step by Step</h3>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.javatpoint.com/nodejs-tutorial" target="blank"><span className="blink">(Step - 1)</span> Learn NodeJs</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp" target="blank"><span className="blink">(Step - 2)</span> Learn NodeJs Package Manager (npm)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/expressjs-tutorial" target="blank"><span className="blink">(Step - 3)</span> Learn NodeJs Framework (ExpressJs)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://mochajs.org/" target="blank"><span className="blink">(Step - 4)</span> Learn NodeJs Testing (Mocha)</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for NodeJs Developer</u></h2>
                                <img className="img-responsive" src={NodeJs} alt="Back End python img" />
                            </div>
                        </div>
                    </div>
                    <hr className="roadmapHR" />
                    <div className="row mb-4 mt-4">
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for PHP Developer</u></h2>
                                <img className="img-responsive" src={PHP} alt="Back End python img" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h3>Follow Step by Step</h3>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.javatpoint.com/php-tutorial" target="blank"><span className="blink">(Step - 1)</span> Learn PHP</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://getcomposer.org/doc/" target="blank"><span className="blink">(Step - 2)</span> Learn PHP Package Manager (Composer)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/laravel" target="blank"><span className="blink">(Step - 3)</span> Learn PHP Framework (Laravel)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://phpunit.de/documentation.html" target="blank"><span className="blink">(Step - 4)</span> Learn PHP Testing (PHPUnit)</a>
                            </div>
                        </div>
                    </div>
                    <hr className="roadmapHR" />
                    <div className="row mb-4 mt-4">
                        <div className="col-md-3">
                            <div className="text-center">
                                <h3>Follow Step by Step</h3>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.javatpoint.com/ruby-tutorial" target="blank"><span className="blink">(Step - 1)</span> Learn Ruby</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://guides.rubygems.org/make-your-own-gem/" target="blank"><span className="blink">(Step - 2)</span> Learn Ruby Package Manager (RubyGems)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.javatpoint.com/ruby-on-rails-tutorial" target="blank"><span className="blink">(Step - 3)</span> Learn Ruby Framework (Ruby on Rails)</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.tutorialspoint.com/rspec/index.htm" target="blank"><span className="blink">(Step - 4)</span> Learn Ruby Testing (RSpec)</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <h2 className="text-center"><u>Roadmap for Ruby Developer</u></h2>
                                <img className="img-responsive" src={Ruby} alt="Back End python img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
