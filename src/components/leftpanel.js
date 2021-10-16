import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site_name } from '../api'

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const LeftPanel = (props) => {
    const [navcurrent, setNavcurrent] = useState("")
    const location = useLocation()

    const handleLogout = () => {
        props.logout()
    }

    useEffect(() => {
        console.log(location)
    },[])

    return (
        <div className="leftpanel">
            <div className="logopanel">
                <h1><span>[</span> <Link to="/">{site_name}</Link> <span>]</span></h1>
            </div>

            <div className="leftpanelinner">


                <div className="visible-xs hidden-sm hidden-md hidden-lg">
                    <div className="media userlogged">
                        <img alt="" src={`${process.env.PUBLIC_URL}/static/images/photos/loggeduser.png`} className="media-object" />
                        <div className="media-body">
                            <h4>{props.username ? props.username : "Loading ..."}</h4>
                        </div>
                    </div>

                    <h5 className="sidebartitle actitle">Account</h5>
                    <ul className="nav nav-pills nav-stacked nav-bracket mb30">
                        <li><Link to="/profile"><i className="glyphicon glyphicon-user"></i> Thông tin tài khoản</Link></li>
                        <li><Link to="/settings"><i className="glyphicon glyphicon-cog"></i> Cài đặt</Link></li>
                        <li><Link to="/FAQ"><i className="glyphicon glyphicon-question-sign"></i> FAQ</Link></li>
                        <li><a onClick={handleLogout}><i className="glyphicon glyphicon-log-out"></i> Đăng xuất</a></li>
                    </ul>
                </div>

                <h5 className="sidebartitle">Menu</h5>
                <ul className="nav nav-pills nav-stacked nav-bracket">
                    <li className={ location.pathname === "/" ? "active" : ""}>
                        <Link to="/">
                            <i className="fa fa-home"></i> <span>Trang chủ</span>
                        </Link>
                    </li>

                    {/* <li className={ location.pathname === "/chat" ? "active" : ""}>
                        <Link to="/chat">
                            <i className="fa fa-envelope-o"></i> <span>Tìm nhóm</span>
                        </Link>
                    </li> */}
                    
                    <li className={navcurrent === "sample" ? "nav-parent nav-hover" : "nav-parent nav-active"}>
                        <a onClick={() => navcurrent === "sample" ? setNavcurrent("") : setNavcurrent("sample") }>
                            <i className="fa fa-laptop"></i> <span>Danh sách nhóm</span>
                        </a>
                        <ul className="children" style={{ display: navcurrent === "sample" ? "block" : "none"}}>
                            <li><Link to="/chat"><i className="fa fa-caret-right"></i> Vượt qua nỗi sợ - Vật lý</Link></li>
                            <li><a><i className="fa fa-caret-right"></i> Ôn thi đại học - Tiếng Anh</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="infosummary" style={{ display: "none" }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel)