import { Spin, Avatar, Button, Tooltip, Popconfirm, message, Badge, Input } from 'antd';
import { UserOutlined, DeleteOutlined, UsergroupAddOutlined } from '@ant-design/icons';

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';
import { useLocation } from 'react-router-dom'
import ScrollToBottom from 'react-scroll-to-bottom';
import io from "socket.io-client";


const { TextArea } = Input;
const Chat = (props) => {
    
    const [imin, setImin] = useState(false)
    const { uinfo, igroups, wgroups } = useAppContext()
    const [userinfo, setUserinfo] = uinfo
    const [ingroups, setIngroups] = igroups
    const [wtgroups, setWtgroups] = wgroups

    const [dropmenu, setDropmenu] = useState("")

    const [current, setCurrent] = useState(null)

    const location = useLocation()

    const handleSetmenu = (menu) => {
        if (dropmenu == menu)
        {
            setDropmenu("")
        }
        else
        {
            setDropmenu(menu)
        }
    }

    useEffect(() => {
        const abc = ingroups.find(data => data._id === props.match.params.groupid)
        if (abc === undefined)
        {
            // alert("Bạn chưa được duyệt vào nhóm")
            // props.history.push("/")
            setImin(false)
        }
        else {
            setImin(true)
        }
        setCurrent(ingroups.find(data => data._id === props.match.params.groupid))
        console.log(ingroups)
    }, [ingroups, props.match.params.groupid])

    const handlDeleteGroup = () => {
        axios.delete(api.api_group_user, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid
            }
        }).then(res => res.data)
            .then(res => {
                if (typeof (res) === "object") {
                    if (res.success) {
                        props.history.push("/")
                        message.success("Xoá nhóm thành công.")
                    } else {
                        message.error("Xoá nhóm thất bại.")
                    }
                } else {
                    message.error(res)
                }
            }).catch(() => {
                message.error("Có lỗi xảy ra trong quá trình xoá group.")
            })
    }

    //socket stuffs
    const [socket, setSocket] = useState(null);
    const [socketConnected, setSocketConnected] = useState(0);
    const [message, setMessage] = useState("")
    const [data, setData] = useState([])
    const [pload, setPload] = useState(1)
    const [users, setUsers] = useState([])

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (imin)
        {
            setSocket(io(api.socket_chat))
            handleGetAllChat()
        }
    }, [imin]);

    const handleGetAllChat = () => {
        axios.get(api.api_chat, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid,
                load: pload
            }
        }).then(res => res.data)
        .then(res => {
            console.log(res)
            res.reverse()
            setData(res)
            scrollToBottom();
        })
        .catch(console.log)
    }
    

    useEffect(() => {
        if (!socket) return;

        socket.on('connect', () => {
            setSocketConnected(1);
        });
        socket.on('disconnect', () => {
            setSocketConnected(0);
        });
        socket.on('connnected', (data) => {
            if (data) {
                setSocketConnected(2)
            } else {
                setSocketConnected(0)
            }
        });
        socket.emit('join chat room', props.match.params.groupid)

        socket.on('outputChatMessage', (data) => {
            // console.log(data)
            setData(oldArray => [...oldArray, data])
            scrollToBottom()
            // alert(data)
        });
        
    
    }, [socket]);

    const handleSendMsg = () => {
        if (socketConnected == 2) {
            socket.emit('inputChatMessage', {
                groupId: props.match.params.groupid,
                sender: props.username,
                message: message,
                type: "text",
                time: new Date().toString()
            })
            setMessage("")
        }
    }

    const handleAcceptToGroup = (uid) => {
        axios.post(api.api_member, {
            groupId: props.match.params.groupid,
            username: uid,
        }, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid,
            }
        }).then(res => res.data)
        .then(res => {
            console.log(res)
        }).catch(console.log)
    }

    //end socket stuffs

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
                                    <div className="col-sm-12 col-lg-12">

                                        <div className="panel panel-default">
                                            <div className="panel-body">

                                                <div className="pull-right">
                                                    <div className="btn-group mr10">
                                                        <Tooltip title="Xoá group">
                                                            <Popconfirm placement="bottom" title={"Bạn có chắc chắn xoá group ?"} onConfirm={handlDeleteGroup} okText="Yes" cancelText="No">
                                                                <Button size="small" icon={<DeleteOutlined />} />
                                                            </Popconfirm>
                                                        </Tooltip>
                                                    </div>

                                                    <div className="btn-group mr10">
                                                        <div className={ dropmenu === "userrequest" ? "btn-group nomargin open" : "btn-group nomargin"}>
                                                            <button onClick={() => handleSetmenu("userrequest")} data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle tooltips" type="button" title="Move to Folder">
                                                                <UsergroupAddOutlined />
                                                                <span className="caret"></span>
                                                            </button>
                                                            <ul className="dropdown-menu" style={{ minWidth : `${200}px`, "left" : "-152px" }}>
                                                                {
                                                                    current?.joinRequest.map((val) => (
                                                                        <li style={{ paddingLeft: "10px" }}>
                                                                            <UserOutlined className="glyphicon glyphicon-tag mr5"  /> {val.username} <Button onClick={() => handleAcceptToGroup(val.username)}>OK</Button> <Button>Deny</Button>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="btn-group nomargin">
                                                            <button data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle tooltips" type="button" title="Label">
                                                                <i className="glyphicon glyphicon-tag mr5"></i>
                                                                <span className="caret"></span>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><a><i className="glyphicon glyphicon-tag mr5"></i> Web</a></li>
                                                                <li><a ><i className="glyphicon glyphicon-tag mr5"></i> Photo</a></li>
                                                                <li><a ><i className="glyphicon glyphicon-tag mr5"></i> Video</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* <div className="btn-group mr5">
                                                        <button className="btn btn-sm btn-white" type="button"><i className="fa fa-reply"></i></button>
                                                        <button data-toggle="dropdown" className="btn btn-sm btn-white dropdown-toggle" type="button">
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul role="menu" className="dropdown-menu pull-right">
                                                            <li><a >Reply to All</a></li>
                                                            <li><a >Forward</a></li>
                                                            <li><a >Print</a></li>
                                                            <li><a >Delete Message</a></li>
                                                            <li><a >Report Spam</a></li>
                                                        </ul>
                                                    </div> */}

                                                </div>

                                                <div className="btn-group mr10">
                                                    <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Read Previous Email"><i className="glyphicon glyphicon-chevron-left"></i></button>
                                                    <button className="btn btn-sm btn-white tooltips" type="button" data-toggle="tooltip" title="Read Next Email"><i className="glyphicon glyphicon-chevron-right"></i></button>
                                                    <div className="btn tooltips">
                                                        <b>Status:</b> {socketConnected === 0 ? <Badge status="default" /> : socketConnected === 1 ? <Badge size="default" status="success" /> : socketConnected === 2 ? <Badge status="default" status="processing" /> : <Badge status="default" />}
                                                    </div>
                                                </div>

                                                {/* messages */}
                                                <div style={{ height: "55vh", overflowY: "auto" }} id="msges">
                                                    {
                                                        data.map((val) => (
                                                            <div className="read-panel">
                                                                <div className="media">
                                                                    <a className="pull-left">
                                                                        <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <span className="media-meta pull-right">{val.time}</span>
                                                                        <h4 className="text-primary">{val.sender}</h4>
                                                                    </div>
                                                                </div>

                                                                <h4 className="email-subject">{val.message}</h4>
                                                            </div>
                                                        ))
                                                    }
                                                    <div ref={messagesEndRef} />
                                                </div>

                                                {/* send message */}
                                                <div className="read-panel">
                                                    <div className="media">
                                                        <a className="pull-left">
                                                            <Avatar size={26} icon={<UserOutlined />} style={{ marginRight: "5px" }} />
                                                        </a>
                                                        <div className="media-body">
                                                            <Input.TextArea value={message} rows={4} onChange={(e) => setMessage(e.target.value)} onKeyUp={(e) => {
                                                                if (e.key == "Enter") {
                                                                    handleSendMsg()
                                                                }
                                                            }} />
                                                            <Button type="primary" onClick={handleSendMsg}>Gửi</Button>
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