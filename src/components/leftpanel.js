import React from 'react'
import { Link } from 'react-router-dom'
import { site_name } from '../api'

const LeftPanel = (props) => {
    
    return (
        <div className="leftpanel">
            <div className="logopanel">
                <h1><span>[</span> {site_name} <span>]</span></h1>
            </div>

            <div className="leftpanelinner">


                <div className="visible-xs hidden-sm hidden-md hidden-lg">
                    <div className="media userlogged">
                        <img alt="" src="images/photos/loggeduser.png" className="media-object" />
                        <div className="media-body">
                            <h4>{props.username ? props.username : "Username"}</h4>
                            {/* <span>"Life is so..."</span> */}
                        </div>
                    </div>

                    <h5 className="sidebartitle actitle">Account</h5>
                    <ul className="nav nav-pills nav-stacked nav-bracket mb30">
                        <li><a fake="profile.html"><i className="fa fa-user"></i> <span>Profile</span></a></li>
                        <li><a fake=""><i className="fa fa-cog"></i> <span>Account Settings</span></a></li>
                        <li><a fake=""><i className="fa fa-question-circle"></i> <span>Help</span></a></li>
                        <li><a fake="signout.html"><i className="fa fa-sign-out"></i> <span>Sign Out</span></a></li>
                    </ul>
                </div>

                <h5 className="sidebartitle">Navigation</h5>
                <ul className="nav nav-pills nav-stacked nav-bracket">
                    <li className="active"><a fake="index.html"><i className="fa fa-home"></i> <span>Dashboard</span></a></li>
                    <li><a fake="email.html"><span className="pull-right badge badge-success">2</span><i className="fa fa-envelope-o"></i> <span>Email</span></a></li>
                    <li className="nav-parent"><a fake=""><i className="fa fa-edit"></i> <span>Forms</span></a>
                        <ul className="children">
                            <li><a fake="general-forms.html"><i className="fa fa-caret-right"></i> General Forms</a></li>
                            <li><a fake="form-layouts.html"><i className="fa fa-caret-right"></i> Form Layouts</a></li>
                            <li><a fake="form-validation.html"><i className="fa fa-caret-right"></i> Form Validation</a></li>
                            <li><a fake="form-wizards.html"><i className="fa fa-caret-right"></i> Form Wizards</a></li>
                            <li><a fake="wysiwyg.html"><i className="fa fa-caret-right"></i> Text Editor</a></li>
                            <li><a fake="code-editor.html"><i className="fa fa-caret-right"></i> Code Editor</a></li>
                            <li><a fake="x-editable.html"><i className="fa fa-caret-right"></i> X-Editable</a></li>
                        </ul>
                    </li>
                    <li className="nav-parent"><a fake=""><i className="fa fa-suitcase"></i> <span>UI Elements</span></a>
                        <ul className="children">
                            <li><a fake="buttons.html"><i className="fa fa-caret-right"></i> Buttons</a></li>
                            <li><a fake="icons.html"><span className="pull-right badge badge-danger">updated</span><i className="fa fa-caret-right"></i> Icons</a></li>
                            <li><a fake="typography.html"><i className="fa fa-caret-right"></i> Typography</a></li>
                            <li><a fake="alerts.html"><i className="fa fa-caret-right"></i> Alerts &amp; Notifications</a></li>
                            <li><a fake="modals.html"><i className="fa fa-caret-right"></i> Modals</a></li>
                            <li><a fake="tabs-accordions.html"><i className="fa fa-caret-right"></i> Tabs &amp; Accordions</a></li>
                            <li><a fake="sliders.html"><i className="fa fa-caret-right"></i> Sliders</a></li>
                            <li><a fake="graphs.html"><i className="fa fa-caret-right"></i> Graphs &amp; Charts</a></li>
                            <li><a fake="widgets.html"><i className="fa fa-caret-right"></i> Panels &amp; Widgets</a></li>
                            <li><a fake="extras.html"><i className="fa fa-caret-right"></i> Extras</a></li>
                        </ul>
                    </li>
                    <li><a fake="tables.html"><i className="fa fa-th-list"></i> <span>Tables</span></a></li>
                    <li className="nav-parent"><a fake=""><i className="fa fa-bug"></i> <span>Bug Tracker</span></a>
                        <ul className="children">
                            <li><a fake="bug-tracker.html"><i className="fa fa-caret-right"></i> Summary</a></li>
                            <li><a fake="bug-issues.html"><i className="fa fa-caret-right"></i> Issues</a></li>
                            <li><a fake="view-issue.html"><i className="fa fa-caret-right"></i> View Issue</a></li>
                        </ul>
                    </li>
                    <li><a fake="maps.html"><i className="fa fa-map-marker"></i> <span>Maps</span></a></li>
                    <li className="nav-parent"><a fake=""><i className="fa fa-file-text"></i> <span>Pages</span></a>
                        <ul className="children">
                            <li><a fake="calendar.html"><i className="fa fa-caret-right"></i> Calendar</a></li>
                            <li><a fake="media-manager.html"><i className="fa fa-caret-right"></i> Media Manager</a></li>
                            <li><a fake="timeline.html"><i className="fa fa-caret-right"></i> Timeline</a></li>
                            <li><a fake="blog-list.html"><i className="fa fa-caret-right"></i> Blog List</a></li>
                            <li><a fake="blog-single.html"><i className="fa fa-caret-right"></i> Blog Single</a></li>
                            <li><a fake="people-directory.html"><i className="fa fa-caret-right"></i> People Directory</a></li>
                            <li><a fake="profile.html"><i className="fa fa-caret-right"></i> Profile</a></li>
                            <li><a fake="invoice.html"><i className="fa fa-caret-right"></i> Invoice</a></li>
                            <li><a fake="search-results.html"><i className="fa fa-caret-right"></i> Search Results</a></li>
                            <li><a fake="blank.html"><i className="fa fa-caret-right"></i> Blank Page</a></li>
                            <li><a fake="notfound.html"><i className="fa fa-caret-right"></i> 404 Page</a></li>
                            <li><a fake="locked.html"><i className="fa fa-caret-right"></i> Locked Screen</a></li>
                            <li><a fake="signin.html"><i className="fa fa-caret-right"></i> Sign In</a></li>
                            <li><a fake="signup.html"><i className="fa fa-caret-right"></i> Sign Up</a></li>
                        </ul>
                    </li>
                    <li className="nav-parent"><a fake="layouts.html"><i className="fa fa-laptop"></i> <span>Skins &amp; Layouts</span></a>
                        <ul className="children">
                            <li><a fake="layouts.html"><i className="fa fa-caret-right"></i> General Layouts</a></li>
                            <li><a fake="horizontal-menu.html"><i className="fa fa-caret-right"></i> Top Menu</a></li>
                            <li><a fake="horizontal-menu2.html"><i className="fa fa-caret-right"></i> Top Menu w/ Sidebar</a></li>
                            <li><a fake="fixed-width.html"><i className="fa fa-caret-right"></i> Fixed Width Page</a></li>
                            <li><a fake="fixed-width2.html"><i className="fa fa-caret-right"></i> Fixed Width w/ Menu</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="infosummary">
                    <h5 className="sidebartitle">Information Summary</h5>
                    <ul>
                        <li>
                            <div className="datainfo">
                                <span className="text-muted">Daily Traffic</span>
                                <h4>630, 201</h4>
                            </div>
                            <div id="sidebar-chart" className="chart"></div>
                        </li>
                        <li>
                            <div className="datainfo">
                                <span className="text-muted">Average Users</span>
                                <h4>1, 332, 801</h4>
                            </div>
                            <div id="sidebar-chart2" className="chart"></div>
                        </li>
                        <li>
                            <div className="datainfo">
                                <span className="text-muted">Disk Usage</span>
                                <h4>82.2%</h4>
                            </div>
                            <div id="sidebar-chart3" className="chart"></div>
                        </li>
                        <li>
                            <div className="datainfo">
                                <span className="text-muted">CPU Usage</span>
                                <h4>140.05 - 32</h4>
                            </div>
                            <div id="sidebar-chart4" className="chart"></div>
                        </li>
                        <li>
                            <div className="datainfo">
                                <span className="text-muted">Memory Usage</span>
                                <h4>32.2%</h4>
                            </div>
                            <div id="sidebar-chart5" className="chart"></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default LeftPanel