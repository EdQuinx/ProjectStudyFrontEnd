import { Spin, List, Button, Modal, message, Form, Radio, Select, Popover, Avatar } from 'antd';
import { AppstoreAddOutlined, FileSearchOutlined, UsergroupAddOutlined, CommentOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';

const UserProfile = (props) => {
    const sampledata = {
        gender: "male",
        fullname: "Lâm Thanh Bá Quý",
        goodAt: ['Toán', "Ngữ Văn", "Tiếng Anh"],
        badAt: ['Tin học', "Tiếng Pháp"],
        class: 12,
        email: "edquinx2@gmail.com"
    }
    const [userinfo, setUserinfo] = useState([])
    const [groupsRes, setGroupsres] = useState([])
    const [groupInfo, setGroupInfo] = useState(null)
    const [formA] = Form.useForm()

    const [gudbad, setGudbad] = useState(true)
    const [repeat, setRepeat] = useState(false)
    useEffect(() => {
        if (!repeat) {
            handleGetUserInfo()
            setRepeat(true)
        } else {
            handleGetAllGroups()
        }
    }, [userinfo])


    const handleGetUserInfo = () => {
        axios.get(api.api_view_user, {
            params: {
                username: props.match.params.username,
            }
        }).then(res => res.data)
            .then(res => {
                console.log("check pro5", props.change)
                setUserinfo(res)
            }).then(res => {
                handleGetAllGroups(res)
            })
            .catch(console.log)

    }
    const showGroupInfo = () => {

        return (
            <Spin spinning={groupInfo === null}>
                <div>
                    <p>Số member: {groupInfo?.memberIds.length}</p>
                    <p>Môn học tốt: {groupInfo?.hasSubjects.join(", ")}</p>
                    <p>Môn học yếu: {groupInfo?.requiredSubjects.join(", ")}</p>
                </div>
            </Spin>
        )
    }

    const handleGetAllGroups = (e) => {
        const cloneGroups = groupsRes
        console.log("groups user: ", e)
        /*for (var i = 0; i < e.inGroups.length; i++) {
            axios.get(api.api_group_user, {
                params: {
                    username: props.username,
                    token: props.token,
                    groupId: e.inGroups[i]
                }
            }).then(res => res.data)
                .then(res => {
                    console.log("get gr: ", res)
                    cloneGroups[e.inGroups[i]] = res
                    setGroupsres(cloneGroups)
                })
                .catch(console.log)
        
        }*/
    }
    const handleGetGroupById = (e, id) => {
        if (e) {
            axios.get(api.api_group_user, {
                params: {
                    username: props.username,
                    token: props.token,
                    groupId: id
                }
            }).then(res => res.data)
                .then(res => {
                    console.log("get gr: ", res)
                    setGroupInfo(res)
                    formA.resetFields()
                })
                .catch(console.log)
        } else {
            setGroupInfo(null)
        }
    }
    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        <React.Fragment>
                            <PageHeader icon="fa-user" page="Thông tin cá nhân" />
                            <div className="contentpanel">

                                <div className="row">
                                    <div className="col-sm-3">
                                        {
                                            userinfo?.avatar !== "" ?
                                                <img src={userinfo?.avatar} className="thumbnail img-responsive" alt="" />
                                                :
                                                <img src={`${process.env.PUBLIC_URL}/static/images/avatar/${userinfo?.gender}.png`} className="thumbnail img-responsive" alt="" />
                                        }

                                        <div className="mb30"></div>

                                        {/* <h5 className="subtitle">Mạng xã hội</h5>
                                        <ul className="profile-social-list">
                                            <li><i className="fa fa-twitter"></i> twitter.com/{props.username}</li>
                                        </ul> */}

                                        <div className="mb30"></div>
                                    </div>
                                    <div className="col-sm-9">

                                        <div className="profile-header">
                                            <h2 className="profile-name">{userinfo?.fullname}</h2>
                                            <div className="profile-location">
                                                Lớp: {userinfo?.class}
                                            </div>
                                            <div className="profile-position">
                                                Giới tính: {userinfo?.gender === "male" ? "Nam" : "Nữ"}
                                            </div>

                                            <div className="mb20"></div>

                                            {/* <button className="btn btn-success mr5"><i className="fa fa-user"></i> Theo dõi</button> */}
                                        </div>


                                        {/*Subjects*/}
                                        <ul className="nav nav-tabs nav-justified nav-profile">
                                            <li className={gudbad ? "active" : ""} onClick={() => setGudbad(true)}>
                                                <a><strong>Môn học tốt</strong></a>
                                            </li>
                                            <li className={!gudbad ? "active" : ""} onClick={() => setGudbad(false)}>
                                                <a><strong>Môn học chưa tốt</strong></a>
                                            </li>
                                        </ul>


                                        <div className="tab-content">
                                            <div className="tab-pane active" id="activities">
                                                <div className="activity-list">

                                                    <List
                                                        bordered
                                                        dataSource={gudbad ? userinfo?.goodAt : userinfo?.badAt}
                                                        renderItem={item => (
                                                            <List.Item key={item}>
                                                                <List.Item.Meta
                                                                    title={<a>{item}</a>}
                                                                />
                                                            </List.Item>
                                                        )}
                                                    />
                                                </div>

                                            </div>


                                        </div>

                                        {/*Groups*/}
                                        <ul className="nav nav-tabs nav-justified nav-profile">
                                            <li className="active">
                                                <a><strong>Nhóm đã tham gia</strong></a>
                                            </li>
                                        </ul>


                                        <div className="tab-content">
                                            <div className="tab-pane active" id="activities">
                                                <div className="activity-list">

                                                    <List
                                                        itemLayout="horizontal"
                                                        dataSource={userinfo?.inGroups}
                                                        renderItem={item => (
                                                            <List.Item>
                                                                <List.Item.Meta
                                                                    avatar={<Avatar icon={<CommentOutlined />} />}
                                                                    title={
                                                                        <b>{groupsRes[item]?.name}</b>
                                                                    }
                                                                />
                                                                <Popover onVisibleChange={(e) => handleGetGroupById(e, item)} content={showGroupInfo} title={"Thông tin nhóm: " + groupsRes[item]?.name}>
                                                                    <EyeOutlined style={{ width: "50px" }} />
                                                                </Popover>
                                                            </List.Item>

                                                        )}
                                                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)