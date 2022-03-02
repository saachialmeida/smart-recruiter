import React from 'react'
import Base from '../../Base';
import { Link } from 'react-router-dom';

export default function git_and_github() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Git and GitHub</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h3 className="text-center"><u><span className="blink">(Step - 1)</span> learn Basic of Git and Github</u></h3>
                    <div className="row mt-2 mb-4" id="collapseGroup2">
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse1" aria-expanded="false" aria-controls="Gitcollapse1">
                                What is Git ?
                                </div>
                            <div className="collapse show" id="Gitcollapse1">
                                <div className="customcard">
                                    Git is a distributed <u>version-control system</u> for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=cxdsNQXFFDk" target="blank">Not understand what is Git please watch video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse2" aria-expanded="false" aria-controls="Gitcollapse2">
                                What is GitHub ?
                                </div>
                            <div className="collapse" id="Gitcollapse2">
                                <div className="customcard">
                                    <ul>
                                        <li>GitHub is a code hosting platform for collaboration and version control.</li>
                                        <li>GitHub lets you (and others) work together on projects.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=cxdsNQXFFDk" target="blank">Not understand what is GitHub please watch video</a>
                                    <br />
                                    <a href="https://github.com/">Go to GitHub Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse3" aria-expanded="false" aria-controls="Gitcollapse3">
                                What is Repository in GitHub ?
                                </div>
                            <div className="collapse" id="Gitcollapse3">
                                <div className="customcard">
                                    <ul>
                                        <li>A GitHub repository can be used to store a development project.</li>
                                        <li>It can contain folders and any type of files (HTML, CSS, JavaScript, Documents, Data, Images).</li>
                                        <li>A GitHub repository should also include a licence file and a README file about the project.</li>
                                        <li>A GitHub repository can also be used to store ideas, or any resources that you want to share.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=y0Y55jyBXzw" target="blank">Not understand.. please watch video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse4" aria-expanded="false" aria-controls="Gitcollapse4">
                                What is Branch in GitHub ?
                                </div>
                            <div className="collapse" id="Gitcollapse4">
                                <div className="customcard">
                                    <ul>
                                        <li>A GitHub branch is used to work with different versions of a repository at the same time.</li>
                                        <li>By default a repository has a master branch (a production branch).</li>
                                        <li>Any other branch is a copy of the master branch (as it was at a point in time).</li>
                                        <li>New Branches are for bug fixes and feature work separate from the master branch. When changes are ready, they can be merged into the master branch. If you make changes to the master branch while working on a new branch, these updates can be pulled in.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=QyyQuMSiXP0" target="blank">Not understand.. please watch video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse5" aria-expanded="false" aria-controls="Gitcollapse5">
                                What is Commit in GitHub ?
                                </div>
                            <div className="collapse" id="Gitcollapse5">
                                <div className="customcard">
                                    <ul>
                                        <li>At GitHub, changes are called commits.</li>
                                        <li>Each commit (change) has a description explaining why a change was made.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=XfDbGgSwa5I" target="blank">Not understand.. please watch video</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup2" href="#Gitcollapse6" aria-expanded="false" aria-controls="Gitcollapse6">
                                What is Pull Requests in GitHub ?
                                </div>
                            <div className="collapse" id="Gitcollapse6">
                                <div className="customcard">
                                    <ul>
                                        <li>Pull Requests are the heart of GitHub collaboration.</li>
                                        <li>With a pull request you are proposing that your changes should be merged (pulled in) with the master.</li>
                                        <li>Pull requests show content differences, changes, additions, and subtractions in colors (green and red).</li>
                                        <li>As soon as you have a commit, you can open a pull request and start a discussion, even before the code is finished.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=e3bjQX9jIBk" target="blank">Not understand.. please watch video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center mt-2"><u><span className="blink">(Step - 2)</span> learn linux and Git commands</u></h3>
                    <div className="row mt-2 mb-4">
                        <div className="col-md-6 col-12">
                            <h3 className="text-center mb-2">Linux commands</h3>
                            <div className="row">
                                <div id="collapseGroup">
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" aria-selected data-parent="#collapseGroup" href="#linuxcollapse1" aria-expanded="false" aria-controls="linuxcollapse1">
                                            1. pwd
                                        </div>
                                        <div className="collapse show" id="linuxcollapse1">
                                            <div className="customcard">
                                                Use the pwd command to find out the path of the current working directory (folder) you’re in. The command will return an absolute (full) path, which is basically a path of all the directories that starts with a forward slash (/). An example of an absolute path is /home/username.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse2" aria-expanded="false" aria-controls="linuxcollapse2">
                                            2. cd
                                        </div>
                                        <div className="collapse" id="linuxcollapse2">
                                            <div className="customcard">
                                                To navigate through the Linux files and directories, use the cd command. It requires either the full path or the name of the directory, depending on the current working directory that you’re in.
                                        <br />
                                        Let’s say you’re in /home/username/Documents and you want to go to Photos, a subdirectory of Documents. To do so, simply type the following command: cd Photos.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse3" aria-expanded="false" aria-controls="linuxcollapse3">
                                            3. mkdir
                                    </div>
                                        <div className="collapse" id="linuxcollapse3">
                                            <div className="customcard">
                                                Use mkdir command to make a new directory — if you type mkdir Music it will create a directory called Music.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse4" aria-expanded="false" aria-controls="linuxcollapse4">
                                            4. rmdir
                                    </div>
                                        <div className="collapse" id="linuxcollapse4">
                                            <div className="customcard">
                                                If you need to delete a directory, use the rmdir command. However, rmdir only allows you to delete empty directories.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse5" aria-expanded="false" aria-controls="linuxcollapse5">
                                            5. touch
                                    </div>
                                        <div className="collapse" id="linuxcollapse5">
                                            <div className="customcard">
                                                The touch command allows you to create a blank new file through the Linux command line. As an example, enter touch /home/username/Documents/Web.html to create an HTML file entitled Web under the Documents directory.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse6" aria-expanded="false" aria-controls="linuxcollapse6">
                                            6. rmdir
                                    </div>
                                        <div className="collapse" id="linuxcollapse6">
                                            <div className="customcard">
                                                If you need to delete a directory, use the rmdir command. However, rmdir only allows you to delete empty directories.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse7" aria-expanded="false" aria-controls="linuxcollapse7">
                                            7. cp
                                    </div>
                                        <div className="collapse" id="linuxcollapse7">
                                            <div className="customcard">
                                                Use the cp command to copy files from the current directory to a different directory. For instance, the command cp scenery.jpg
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse8" aria-expanded="false" aria-controls="linuxcollapse8">
                                            8. mv
                                    </div>
                                        <div className="collapse" id="linuxcollapse8">
                                            <div className="customcard">
                                                The primary use of the mv command is to move files, although it can also be used to rename files.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup" href="#linuxcollapse9" aria-expanded="false" aria-controls="linuxcollapse9">
                                            9. ls
                                    </div>
                                        <div className="collapse" id="linuxcollapse9">
                                            <div className="customcard">
                                                The ls command is used to view the contents of a directory. By default, this command will display the contents of your current working directory.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-12">
                            <h3 className="text-center mb-2">Git commands</h3>
                            <div className="row">
                                <div id="collapseGroup3">
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" aria-selected data-parent="#collapseGroup3" href="#gitmaincollapse1" aria-expanded="false" aria-controls="gitmaincollapse1">
                                            1. git init
                                        </div>
                                        <div className="collapse show" id="gitmaincollapse1">
                                            <div className="customcard">
                                                This command turns a directory into an empty Git repository. This is the first step in creating a repository. After running git init, adding and committing files/directories is possible.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse2" aria-expanded="false" aria-controls="gitmaincollapse2">
                                            2. git add *file or directory name*
                                        </div>
                                        <div className="collapse" id="gitmaincollapse2">
                                            <div className="customcard">
                                                Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). There are a few different ways to use git add, by adding entire directories, specific files, or all unstaged files.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse3" aria-expanded="false" aria-controls="gitmaincollapse3">
                                            3. git commit -m "any message"
                                    </div>
                                        <div className="collapse" id="gitmaincollapse3">
                                            <div className="customcard">
                                                Record the changes made to the files to a local repository. For easy reference, each commit has a unique ID.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse4" aria-expanded="false" aria-controls="gitmaincollapse4">
                                            4. git status
                                        </div>
                                        <div className="collapse" id="gitmaincollapse4">
                                            <div className="customcard">
                                                git status will return the current working branch. If a file is in the staging area, but not committed, it shows with git status. Or, if there are no changes it’ll return nothing to commit, working directory clean.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse5" aria-expanded="false" aria-controls="gitmaincollapse5">
                                            5. git branch
                                    </div>
                                        <div className="collapse" id="gitmaincollapse5">
                                            <div className="customcard">
                                                To determine what branch the local repository is on, add a new branch, or delete a branch.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse6" aria-expanded="false" aria-controls="gitmaincollapse6">
                                            6. git checkout -b *new_branch_name*
                                    </div>
                                        <div className="collapse" id="gitmaincollapse6">
                                            <div className="customcard">
                                                To start working in a different branch, use git checkout to switch branches.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse7" aria-expanded="false" aria-controls="gitmaincollapse7">
                                            7. git remote
                                    </div>
                                        <div className="collapse" id="gitmaincollapse7">
                                            <div className="customcard">
                                                To connect a local repository with a remote repository. A remote repository can have a name set to avoid having to remember the URL of the repository.
                                                <ul>
                                                    <li>1. To add remote repository use command :- git remote add origin *remote_url* </li>
                                                    <li>2. To check remote repository in local :- git remote show origin</li>
                                                    <li>3. Get remote repository :- git remote -v</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse8" aria-expanded="false" aria-controls="gitmaincollapse8">
                                            8. git clone *remote_URL*
                                    </div>
                                        <div className="collapse" id="gitmaincollapse8">
                                            <div className="customcard">
                                                To create a local working copy of an existing remote repository, use git clone to copy and download the repository to a computer. Cloning is the equivalent of git init when working with a remote repository. Git will create a directory locally with all files and repository history.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse9" aria-expanded="false" aria-controls="gitmaincollapse9">
                                            9. git pull
                                    </div>
                                        <div className="collapse" id="gitmaincollapse9">
                                            <div className="customcard">
                                                To get the latest version of a repository run git pull. This pulls the changes from the remote repository to the local computer.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12 mt-3">
                                        <div className="collaspebtn" data-toggle="collapse" data-parent="#collapseGroup3" href="#gitmaincollapse10" aria-expanded="false" aria-controls="gitmaincollapse10">
                                            10. git push
                                    </div>
                                        <div className="collapse" id="gitmaincollapse10">
                                            <div className="customcard">
                                                Sends local commits to the remote repository. git push requires two parameters: the remote repository and the branch that the push is for.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center mt-2"><u><span className="blink">(Step - 3)</span> Create GitHub account and deploy your first project on Github</u></h3>
                </div>
            </div>
        </Base>
    )
}
