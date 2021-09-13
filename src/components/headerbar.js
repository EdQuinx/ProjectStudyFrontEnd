import React, { useState } from 'react'

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const HeaderBar = (props) => {
    const [usermenu, setUsermenu] = useState(false)

    const handleLogout = () => {
        props.logout()
    }

    return (
        <div className="headerbar">

            <a className="menutoggle"><i className="fa fa-bars"></i></a>

            <form className="searchform">
                <input type="text" className="form-control" name="keyword" placeholder="Search here..." />
            </form>

            <div className="header-right">
                <ul className="headermenu">
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default dropdown-toggle tp-icon" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-user"></i>
                                <span className="badge">2</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-head pull-right">
                                <h5 className="title">2 Newly Registered Users</h5>
                                <ul className="dropdown-list user-list">
                                    <li className="new">
                                        <div className="thumb"><a fake=""><img src="images/photos/user1.png" alt="" /></a></div>
                                        <div className="desc">
                                            <h5><a fake="">Draniem Daamul (@draniem)</a> <span className="badge badge-success">new</span></h5>
                                        </div>
                                    </li>
                                    <li className="new">
                                        <div className="thumb"><a fake=""><img src="images/photos/user2.png" alt="" /></a></div>
                                        <div className="desc">
                                            <h5><a fake="">Zaham Sindilmaca (@zaham)</a> <span className="badge badge-success">new</span></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb"><a fake=""><img src="images/photos/user3.png" alt="" /></a></div>
                                        <div className="desc">
                                            <h5><a fake="">Weno Carasbong (@wenocar)</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb"><a fake=""><img src="images/photos/user4.png" alt="" /></a></div>
                                        <div className="desc">
                                            <h5><a fake="">Nusja Nawancali (@nusja)</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb"><a fake=""><img src="images/photos/user5.png" alt="" /></a></div>
                                        <div className="desc">
                                            <h5><a fake="">Lane Kitmari (@lane_kitmare)</a></h5>
                                        </div>
                                    </li>
                                    <li className="new"><a fake="">See All Users</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default dropdown-toggle tp-icon" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-envelope"></i>
                                <span className="badge">1</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-head pull-right">
                                <h5 className="title">You Have 1 New Message</h5>
                                <ul className="dropdown-list gen-list">
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user1.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Draniem Daamul <span className="badge badge-success">new</span></span>
                                                <span className="msg">Lorem ipsum dolor sit amet...</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user2.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Nusja Nawancali</span>
                                                <span className="msg">Lorem ipsum dolor sit amet...</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user3.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Weno Carasbong</span>
                                                <span className="msg">Lorem ipsum dolor sit amet...</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user4.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Zaham Sindilmaca</span>
                                                <span className="msg">Lorem ipsum dolor sit amet...</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user5.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Veno Leongal</span>
                                                <span className="msg">Lorem ipsum dolor sit amet...</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new"><a fake="">Read All Messages</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default dropdown-toggle tp-icon" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-globe"></i>
                                <span className="badge">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-head pull-right">
                                <h5 className="title">You Have 5 New Notifications</h5>
                                <ul className="dropdown-list gen-list">
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user4.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Zaham Sindilmaca <span className="badge badge-success">new</span></span>
                                                <span className="msg">is now following you</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user5.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Weno Carasbong <span className="badge badge-success">new</span></span>
                                                <span className="msg">is now following you</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user3.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Veno Leongal <span className="badge badge-success">new</span></span>
                                                <span className="msg">likes your recent status</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user3.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Nusja Nawancali <span className="badge badge-success">new</span></span>
                                                <span className="msg">downloaded your work</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new">
                                        <a fake="">
                                            <span className="thumb"><img src="images/photos/user3.png" alt="" /></span>
                                            <span className="desc">
                                                <span className="name">Nusja Nawancali <span className="badge badge-success">new</span></span>
                                                <span className="msg">send you 2 messages</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="new"><a fake="">See All Notifications</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className={usermenu ? "btn-group open" : "btn-group"}>
                            <button type="button" className="btn btn-default dropdown-toggle" onClick={() => setUsermenu(!usermenu)}>
                                <img src={`${process.env.PUBLIC_URL}/static/images/photos/loggeduser.png`} alt="" />
                                John Doe
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-usermenu pull-right">
                                <li><a><i className="glyphicon glyphicon-user"></i> My Profile</a></li>
                                <li><a><i className="glyphicon glyphicon-cog"></i> Account Settings</a></li>
                                <li><a><i className="glyphicon glyphicon-question-sign"></i> Help</a></li>
                                <li><a onClick={handleLogout}><i className="glyphicon glyphicon-log-out"></i> Log Out</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button id="chatview" className="btn btn-default tp-icon chat-icon">
                            <i className="glyphicon glyphicon-comment"></i>
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !== null,
        loading: state.loading,
        error: state.error,
        change: state.change,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        updateChange: () => dispatch(actions.updateChange()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)