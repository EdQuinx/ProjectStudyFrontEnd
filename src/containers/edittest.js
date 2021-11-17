import { Spin, List, Button, Modal, message, Form, Radio, Select, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';
import { Link, useLocation } from 'react-router-dom'

const EditTest = (props) => {

    const [groupInfo, setGroupInfo] = useState(null)
    const [questList, setQuestList] = useState([])
    const [showaddquest, setShowaddquest] = useState(false)
    const [formAddQuest] = Form.useForm()

    const location = useLocation()

    useEffect(() => {
        handlegetGroupInfo()
        handlegetQuestList()
    }, [])



    const handlegetGroupInfo = () => {
        axios.get(api.api_group_user, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid
            }
        }).then(res => res.data)
            .then(res => {
                setGroupInfo(res)
            })
            .catch(console.log)
    }

    const handlegetQuestList = () => {
        axios.get(api.api_question_group_get, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid,
                testId: props.match.params.testid
            }
        }).then(res => res.data)
        .then(res => {
            console.log(res)
            setQuestList(res)
        })
        .catch(console.log)
    }

    const handleAddQuest2Test = (e) => {
        axios.post(api.api_question_group, {
            ...e,
        }, {
            params: {
                username: props.username,
                token: props.token,
                groupId: props.match.params.groupid,
                testId: props.match.params.testid
            }
        }).then(res => res.data)
        .then(console.log)
        .catch(console.log)
    }

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        groupInfo?.leaderId === props.userId ?
                            <React.Fragment>
                                <PageHeader icon="fa-user" page="Edit test" />
                                <div className="contentpanel">
                                    
                                    <div className="row">
                                        <Modal visible={showaddquest} onCancel={() => setShowaddquest(false)}
                                            onOk={() => formAddQuest.submit()}
                                        >
                                            <Form form={formAddQuest} onFinish={handleAddQuest2Test}>
                                                <Form.Item name="class" label="Lớp" rules={[{ required: true, message: 'Nhập khối, lớp' }]}>
                                                    <Select>
                                                        {
                                                            api.classes.map((val) => (
                                                                <Select.Option value={val}>Lớp {val}</Select.Option>
                                                            ))
                                                        }
                                                    </Select>
                                                    <Select.Option value="all">All</Select.Option>
                                                </Form.Item>
                                                <Form.Item name="subject" label="Môn học" rules={[{ required: true, message: 'Chọn môn học' }]}>
                                                    <Select>
                                                        {
                                                            api.list_sub.map((val) => (
                                                                <Select.Option value={val}>{val}</Select.Option>
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item name="question" label="Câu hỏi" rules={[{ required: true, message: 'Nhập câu hỏi' }]}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item>
                                                    
                                                </Form.Item>
                                            </Form>
                                        </Modal>

                                        <div className="col-sm-3">
                                            <Button onClick={() => setShowaddquest(!showaddquest)}>Thêm câu hỏi</Button>
                                        </div>
                                        <div className="col-sm-9">
                                            

                                        </div>

                                    </div>
                                </div>
                            </React.Fragment>
                            : <></>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTest)