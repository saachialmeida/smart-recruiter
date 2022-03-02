import React from 'react'
import Base from '../../Base';
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom';

export default function CompetitiveBasic() {
    return (
        <Base>
            <div className="basic_cp pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/CompetitiveProgramming">Competitive Programming</Link> / Basic of C.P.</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                Learn the art of writing code
                                </div>
                            <div className="collapse show" id="collapse1">
                                <div className="customcard">
                                    Before beginning with practicing code learn to think about the "Art of writing code". It means to learn how problems are to be solved.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                Choose a programming language.
                                </div>
                            <div className="collapse" id="collapse2">
                                <div className="customcard">
                                    Learn the basics of the language such as syntax and DS in a language like to code in, we strongly suggest you choose (C++, JAVA).
                                    <br />
                                    <a href="#xyz" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Try to practice time and space complexity concepts.
                                </div>
                            <div className="collapse" id="collapse3">
                                <div className="customcard">
                                    Practice problems that tell you about the complexity of code while executing it. Suggest using Interview Bit for practicing such concepts.
                                    <br />
                                    <a href="#xyz" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                Write a Brute Force Solution.
                            </div>
                            <div className="collapse" id="collapse4">
                                <div className="customcard">
                                    Before writing a solution to code learn what is Brute force method and make Google your friend to search for these concepts.
                                    <br />
                                    <a href="https://www.freecodecamp.org/news/brute-force-algorithms-explained/#:~:text=The%20brute%20force%20solution%20is%20simply%20to%20calculate,%28mn%29%2C%20which%20is%20sometimes%20written%20as%20O%20%28n%2Am%29." target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                Practice Data Structures.
                            </div>
                            <div className="collapse" id="collapse5">
                                <div className="customcard">
                                    Learn the basics of data Structures from geeks for geeks in the language you choose to begin with and practice questions on  Array, Linked List, Stack, Queue, Tree, Trie, Graph, Sorting, Recursion, Dynamic Programming all these basic building blocks of DSA.
                                <br />
                                    <a href="#xyz" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                Keep Practicing !!
                            </div>
                            <div className="collapse" id="collapse6">
                                <div className="customcard">

                                    <br />
                                    <a href="https://practice.geeksforgeeks.org/" target="blank">Click to know more</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                Take the challenge and Solve Coding Problems
                                </div>
                            <div className="collapse" id="collapse7">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                        <li>Pick a coding platform to participate in contests.</li>
                                        <li>And Make a Google sheet to track all the coding questions you practice. "trust me this helps."</li>
                                        <li>If you are looking for the resources of these coding platforms so a lot of sites are there like
                                            <a href="https://www.codechef.com/" > Codechef </a>,
                                            <a href="https://codeforces.com/">Codeforces</a>,
                                            <a href="https://www.topcoder.com/">Topcoder</a>,
                                            <a href="https://www.spoj.com/problems/classical/">SPOJ </a>
                                        </li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=H7bDwI5nUl8" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="collapse8">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                    <li><Link to="/CompetitiveProgramming/DataStruture">Roadmaps For DSA Beginner</Link></li>
                                    <li><Link to="/CompetitiveProgramming/Algorithms">Roadmaps For DSA Advanced</Link></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
