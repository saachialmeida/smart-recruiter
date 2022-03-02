import React from 'react'
import Base from '../../Base'
import { Link } from 'react-router-dom';

export default function Algorithms() {
    return (
        <Base>

            <div className="basic_cp pb-6">
                <div className="container-fluid">
                    {/* ---------------------------------------- First section start -------------------------------- */}

                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/CompetitiveProgramming">Competitive Programming </Link> / Roadmap Data Structure and Algorithm Advanced</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><u> Data Structure and Algorithm Advanced </u></h2>
                    <div className="row mt-2">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse1" aria-expanded="false" aria-controls="backcollapse1">
                                <center><span className="blink"> Syllabus</span></center>
                            </div>
                            <div className="collapse show" id="backcollapse1">
                                <div className="customcard">
                                    Everything in the Foundation Level, along with:
                                    <li>1. Heaps (priority queue)</li>
                                    <li>2. Disjoint Set Union</li>
                                    <li>3. Segment Trees</li>
                                    <li>4. Binary Index Tree (Fenwick tree)</li>
                                    <li> 5. Trees (traversals, tree dynamic programming)</li>
                                    <li>6. Finding Lowest Common Ancestors (O(log N) solution where N is number of nodes).</li>
                                    <li>7. Graph Algorithms:</li>
                                        <ul>    1. Finding connected components and transitive closures.</ul>
                                        <ul>    2. Shortest-path algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)</ul>
                                        <ul>    3. Minimum spanning tree (Prim and Kruskal algorithms)</ul>
                                        <ul>    4. Biconnectivity in undirected graphs (bridges, articulation points)</ul>
                                        <ul>    5. Strongly connected components in directed graphs</ul>
                                        <ul>    6. Topological Sorting</ul>
                                        <ul>    7. Euler path, tour/cycle.</ul> 
                                    <li>8. Modular arithmetic including division, inverse</li>
                                    <li>9. Amortized Analysis</li>
                                    <li>10. Divide and Conquer</li>
                                    <li>11. Advanced Dynamic Programming problems (excluding the dp optimizations which are added in expert level)</li>
                                    <li>12. Sieve of Eratosthenes</li>
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
