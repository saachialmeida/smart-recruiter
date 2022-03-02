import React from 'react'
import Header from './Header';
import main from '../images/main.png';
import shakshi from '../images/team/shakshi.png';
import nayan from '../images/team/nayan.png';
import manmeet from '../images/team/manmeet.PNG';
import sarwesh from '../images/team/sarwesh.PNG';
import { Link, withRouter } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <Header />
            {/* *************************************************************
            -------------------- main section start -------------------------
            ****************************************************************/}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1>A Bright Step towards your better future</h1>
                            <h2>Get infomation of placement in your Campus and Roadmap to new technologies</h2>
                            <div className="d-lg-flex">
                                <Link to="/StudentLogin"><button className="btn-get-started scrollto">Get Started</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={main} className="img-fluid animated" alt="text" />
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Company Name -------------------------
            ****************************************************************/}
            <section id="cliens" className="cliens section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>WitMates</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>TCS</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>JARO</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Impetus</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Virim</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Yash</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* *************************************************************
            -------------------------- About Us -------------------------
            *****************************************************************/}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Smart Recruiter is a platform designed for SVVV University where you get knowlegde of Upcomming comanies for placements, latest technologies and roadmaps in the
                                field of web development, Competitive Coding, Data Structures etc.
                            </p>
                            <ul>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Get Campus drive infomation from Smart Recruiter Platfrom</li>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Improve your knowlegde and learn lastest technologies</li>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Get Yearwise Roadmaps which will help you to get place in your dream
                            company</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university established under Madhya Pradesh Niji
                                Vishwavidyalaya ( Sthapana Avam Sanchalan) Adhiniyam in 2015 at Indore MP(India). The University has been
                                established with a vision to be leader in shaping better future for mankind through quality education,
                                training and research.
                            </p>
                            <a href="http://www.svvv.edu.in/" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* *************************************************************
            -------------------------- Features -----------------------------
            *****************************************************************/}
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Features</h2>
                        <p>Year wise roadmaps please select your year and prepare for your better future</p>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box text-center">
                                <div class="icon"><i class='bx bx-code'></i></div>
                                <h4>First Year</h4>
                                <p>Get knowlegde of programming languages and master which you like most to play with.</p>
                                <br />
                                <p>Login to get more</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="icon-box text-center">
                                <div class="icon"><i class='bx bxs-terminal'></i></div>
                                <h4>Second Year</h4>
                                <p>Learn what is Competitive programming and participate into virtual contests.</p>
                                <br />
                                <p>Login to get more</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div class="icon-box text-center">
                                <div class="icon"><i class='bx bxs-data'></i></div>
                                <h4>Third Year</h4>
                                <p>Gear up it's high time and prepare for your placement and practice mock interviews.</p>
                                <br />
                                <p>Login to get more</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div class="icon-box text-center">
                                <div class="icon"><i class='bx bxl-javascript'></i></div>
                                <h4>Fourth Year</h4>
                                <p>Learn about internship and work on getting the best internship for you</p>
                                <br /><br />
                                <p>Login to get more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Roadmaps -------------------------
            *****************************************************************/}
            <section id="roadmaps" class="why-us">
                <div class="container-fluid" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Roadmaps</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div class="content">
                                <h3>Web Development <br /><strong> learn how to build websites</strong></h3>
                                <p>
                                    Roadmap to learn web development. Here you learn about the web technologies which are use in industries
                                    and get basic idea of how to build quality websites.
                                 </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" class="collapse" href="#accordion-list-1"><span>01</span> What is front-end?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" class="collapse show">
                                            <p>
                                                The frontend of a software program or website is everything with which the user interacts. From a user standpoint, the frontend is synonymous with the user interface. ... Websites must work well on multiple devices and screen sizes, which is why modern web development typically involves responsive design.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-2" class="collapsed"><span>02</span> What is Back-end?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" class="collapse">
                                            <p>

                                                Back end Development refers to the server side of development where you are primarily focused on how the site works. ... This type of web development usually consists of three parts: a server, an application, and a database.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-3" class="collapsed"><span>03</span> What is server API?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" class="collapse">
                                            <p>
                                                API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" data-aos="zoom-in" data-aos-delay="150">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 align-items-stretch img" data-aos="zoom-in" data-aos-delay="150"></div>
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                            <div class="content">
                                <h3>Competitive Programming <br /><strong> learn about C.P. </strong></h3>
                                <p>
                                    Roadmap to learn Competative programming. Here you learn about data structures and algorithm. Get knowlegde of Hackerrank, Hackerearth, codechef etc.
                                </p>
                            </div>

                            <div class="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" class="collapse" href="#cp1"><span>01</span>What is the use of competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp1" class="collapse show" data-parent=".accordion-list">
                                            <p>

                                                Competitive Programming teaches you to find the easiest solution in the quickest possible way. CP enhances your problem-solving and debugging skills giving you the real-time fun. It's brain-sport.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#cp2" class="collapsed"><span>02</span> How do I prepare for competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp2" class="collapse" data-parent=".accordion-list">
                                            <p>
                                                Competitive programming can only be improved by “PRACTICE, PRACTICE AND PRACTICE”.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#cp3" class="collapsed"><span>03</span> What is the best language for competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp3" class="collapse" data-parent=".accordion-list">
                                            <p>
                                                C++ is the most preferred language for competitive programming mainly because of its STL. Short for Standard Template Library, the STL is a collection of C++ templates to help programmers quickly tackle basic data structures and functions such as lists, stacks, arrays, etc.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- slide --------------------------------
            *****************************************************************/}
            <section id="cta" class="cta">
                <div class="container" data-aos="zoom-in">
                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-left">
                            <h3>A Bright Step towards your better future</h3>
                            <p>Step up by clicking here and make your learning into earning</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <Link to="/StudentLogin"><button class="cta-btn align-middle">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Team --------------------------------
            *****************************************************************/}
            <section id="team" class="team section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Team</h2>
                        <p>We are a Team of experienced students of college.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={nayan} class="img-fluid" alt="Nayan Pal" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Nayan Pal</h4>
                                            <span>Team Leader and Developer</span>
                                            <ul>
                                                <li>Design FrontEnd with (ReactJS)</li>
                                                <li>Design BackEnd with (NodeJs)</li>
                                                <li>Manage Database (MongoDB)</li>
                                                <li>Deployment Project on (Heroku)</li>
                                            </ul>
                                            <div class="social">
                                                <a href="https://github.com/nayanpal777" target="blank"><i class='bx bxl-github bx-tada' ></i></a>
                                                <a href="https://www.linkedin.com/in/nayan-pal777/" target="blank"><i class='bx bxl-linkedin-square bx-tada'></i></a>
                                                <a href="https://nayanpal777.github.io/" target="blank"><i class='bx bxl-product-hunt bx-tada' ></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={manmeet} class="img-fluid" alt="Manmeet Juneja" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Manmeet Juneja</h4>
                                            <span>Project Manager and Developer</span>
                                            <ul>
                                                <li>Gather Requirements and Insights</li>
                                                <li>Assigning and Reviewing Tasks</li>
                                                <li>Manage Database (MongoDB)</li>
                                                <li>Testing Components</li>
                                            </ul>
                                            <div class="social">
                                                <a href="https://github.com/manmeetjuneja" target="blank"><i class='bx bxl-github bx-tada'></i></a>
                                                <a href="https://www.linkedin.com/in/manmeet-juneja-7231a9161/" target="blank"><i class='bx bxl-linkedin-square bx-tada'></i></a>
                                                <a href="https://manmeetjuneja.github.io/" target="blank"><i class='bx bxl-product-hunt bx-tada' ></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={sarwesh} class="img-fluid" alt="Sarwesh Chitambre" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Sarwesh Chitambre</h4>
                                            <span>Data Researcher and Developer</span>
                                            <ul>
                                                <li>Reviewing Competitors</li>
                                                <li>Testing Components</li>
                                                <li>Managing Data and Insights</li>
                                                <li>Design FrontEnd layout</li>
                                            </ul>
                                            <div class="social">
                                                <a href="https://github.com/sarweshChitambares" target="blank"><i class='bx bxl-github bx-tada' ></i></a>
                                                <a href="https://www.linkedin.com/in/sarwesh-chitambare-bb64361b3" target="blank"><i class='bx bxl-linkedin-square bx-tada'></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={shakshi} class="img-fluid" alt="Shakshi Maheshwari" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Shakshi Maheshwari</h4>
                                            <span>Data Researcher and Developer</span>
                                            <ul>
                                                <li>Reviewing Competitors</li>
                                                <li>Testing Components</li>
                                                <li>Managing Data and Insights</li>
                                                <li>Design FrontEnd layout</li>
                                            </ul>
                                            <div class="social">
                                                <a href="https://github.com/Shakshi16" target="blank"><i class='bx bxl-github bx-tada' ></i></a>
                                                <a href="https://www.linkedin.com/in/shakshi-maheshwari-7a41b7194" target="blank"><i class='bx bxl-linkedin-square bx-tada'></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Smart Recruiter </span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed and Develop by Nayan Pal
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class='bx bxs-up-arrow-alt bx-fade-down'></i></a>
        </div>
    )
}

export default withRouter(Index);