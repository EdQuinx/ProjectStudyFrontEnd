import { Spin, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';

const Chat = (props) => {

    const { igroups } = useAppContext()

    const [ingroups, setIngroups] = igroups

    const [current, setCurrent] = useState(null)

    useEffect(() => {
        setCurrent(ingroups.find(data => data._id === props.match.params.groupid))
    }, [ingroups, props.match.params.groupid])

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        <React.Fragment>
                            <PageHeader page="Nhóm học" subtitle={current?.name} />
                            <div className="contentpanel panel-email">

                                <div className="row">
                                    <div className="col-sm-3 col-lg-2">
                                        <h5 className="subtitle">Các bài test</h5>
                                        <ul className="nav nav-pills nav-stacked nav-email mb20">
                                            <li>
                                                <a>
                                                    <i className="glyphicon glyphicon-folder-open"></i> Test 1
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <i className="glyphicon glyphicon-folder-open"></i> Test 2
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="mb30"></div>

                                    </div>

                                    <div className="col-sm-9 col-lg-10">

                                        <div className="panel panel-default">
                                            <div className="panel-body">

                                                <div className="pull-right">
                                                    <div className="btn-group mr10">
                                                        <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Archive"><i className="glyphicon glyphicon-hdd"></i></button>
                                                        <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Report Spam"><i className="glyphicon glyphicon-exclamation-sign"></i></button>
                                                        <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Delete"><i className="glyphicon glyphicon-trash"></i></button>
                                                    </div>

                                                    <div className="btn-group mr10">
                                                        <div className="btn-group nomargin">
                                                            <button data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle tooltips" type="button" title="Move to Folder">
                                                                <i className="glyphicon glyphicon-folder-close mr5"></i>
                                                                <span className="caret"></span>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="#"><i className="glyphicon glyphicon-folder-open mr5"></i> Conference</a></li>
                                                                <li><a href="#"><i className="glyphicon glyphicon-folder-open mr5"></i> Newsletter</a></li>
                                                                <li><a href="#"><i className="glyphicon glyphicon-folder-open mr5"></i> Invitations</a></li>
                                                                <li><a href="#"><i className="glyphicon glyphicon-folder-open mr5"></i> Promotions</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="btn-group nomargin">
                                                            <button data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle tooltips" type="button" title="Label">
                                                                <i className="glyphicon glyphicon-tag mr5"></i>
                                                                <span className="caret"></span>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="#"><i className="glyphicon glyphicon-tag mr5"></i> Web</a></li>
                                                                <li><a href="#"><i className="glyphicon glyphicon-tag mr5"></i> Photo</a></li>
                                                                <li><a href="#"><i className="glyphicon glyphicon-tag mr5"></i> Video</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="btn-group mr5">
                                                        <button className="btn btn-sm btn-white" type="button"><i className="fa fa-reply"></i></button>
                                                        <button data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle" type="button">
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul role="menu" className="dropdown-menu pull-right">
                                                            <li><a href="#">Reply to All</a></li>
                                                            <li><a href="#">Forward</a></li>
                                                            <li><a href="#">Print</a></li>
                                                            <li><a href="#">Delete Message</a></li>
                                                            <li><a href="#">Report Spam</a></li>
                                                        </ul>
                                                    </div>

                                                </div>

                                                <div className="btn-group mr10">
                                                    <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Read Previous Email"><i className="glyphicon glyphicon-chevron-left"></i></button>
                                                    <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Read Next Email"><i className="glyphicon glyphicon-chevron-right"></i></button>
                                                </div>
                                                
                                                {/* messages */}
                                                <div style={{ height: "60vh", overflowY: "auto" }}>
                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:30pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>

                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:31pm</span>
                                                                <h4 className="text-primary">Lâm Thanh Bá Quý</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>

                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:32pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>
                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:32pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>
                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:32pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>
                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:32pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>
                                                    <div className="read-panel">

                                                        <div className="media">
                                                            <a className="pull-left">
                                                                <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                            </a>
                                                            <div className="media-body">
                                                                <span className="media-meta pull-right">Yesterday at 1:32pm</span>
                                                                <h4 className="text-primary">Phong</h4>
                                                            </div>
                                                        </div>

                                                        <h4 className="email-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                                                    </div>
                                                </div>

                                                {/* send message */}
                                                <div className="read-panel">
                                                    <div className="media">
                                                        <a className="pull-left">
                                                            <Avatar size={26} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                        </a>
                                                        <div className="media-body">
                                                            <textarea className="form-control" placeholder="Reply here..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                        :
                        props.history.push("/signin")
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !== null,
        loading: state.loading,
        error: state.error,
        change: state.change,
        username: state.username,
        info: state.info,
        userId: state.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.logout()),
        updateChange: () => dispatch(actions.updateChange()),
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
        authSignup: (fullname, username, email, password, gender, classs, goodAt = [], badAt = []) => dispatch(actions.authSignup(fullname, username, email, password, gender, classs, goodAt = [], badAt = [])),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)