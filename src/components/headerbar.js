import axios from 'axios';
import React, { useEffect, useState } from 'react'

import * as api from '../api'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const HeaderBar = (props) => {
    const [usermenu, setUsermenu] = useState(false)

    const handleLogout = () => {
        props.logout()
    }

    return (
        <div className="headerbar">

            <a className="menutoggle" onClick={() => props.oncolapseleftmn(!props.colapseleftmn)}><i className="fa fa-bars"></i></a>

            <form className="searchform">
                <input type="text" className="form-control" name="keyword" placeholder="Tìm kiếm..." />
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
                                <Avatar size={26} icon={<UserOutlined />} style={{ marginRight : "5px" }} />
                                { props.username ? props.username : "Loading ..."}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-usermenu pull-right">
                                <li><Link to="/profile"><i className="glyphicon glyphicon-user"></i> Thông tin tài khoản</Link></li>
                                <li><Link to="/settings"><i className="glyphicon glyphicon-cog"></i> Cài đặt</Link></li>
                                <li><Link to="/FAQ"><i className="glyphicon glyphicon-question-sign"></i> FAQ</Link></li>
                                <li><a onClick={handleLogout}><i className="glyphicon glyphicon-log-out"></i> Đăng xuất</a></li>
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
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        updateChange: () => dispatch(actions.updateChange()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)