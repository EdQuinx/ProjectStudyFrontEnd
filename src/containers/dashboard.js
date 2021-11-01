import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'

import { Spin, Button, Row, Col, Descriptions, message, Modal, Form, Input } from 'antd';
import { AppstoreAddOutlined, FileSearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../state';
import { Link } from 'react-router-dom';

const DashBoard = (props) => {

    const { uinfo, igroups, wgroups } = useAppContext()

    const [ingroups, setIngroups] = igroups
    const [wtgroups, setWtgroups] = wgroups

    const [ocreateGr, setOcreateGr] = useState(false)
    const [ofindGr, setOfindGr] = useState(false)
    const [ofindFr, setOfindFr] = useState(false)
    const [
        formCGR,
        formFGR,
        formFFR
    ] = Form.useForm();

    useEffect(() => {
        console.log(ingroups)
    }, [ingroups])

    const handleCreateGroup = (e) => {
        axios.post(api.api_group_user,
            {
                name: e.name,
                class: e.class
            },
            {
                params: {
                    username: props.username,
                    token: props.token
                }
            }
        ).then(res => res.data)
            .then(res => {
                if ("_id" in res) {
                    message.success("Tạo nhóm thành công")
                    props.updateInfo(props.token, props.username, props.userId);
                    setIngroups(oldArray => [...oldArray, res]);
                } else {
                    message.error(res.msg)
                }
                formCGR.resetFields()
                setOcreateGr(false)
            })
            .catch(() => {
                message.error("Tạo nhóm thất bại")
                formCGR.resetFields()
                setOcreateGr(false)
            })
    }

    const handleFindGroup = (e) => {

    }

    const handleFindFriend = (e) => {

    }

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        <React.Fragment>
                            <PageHeader page="Trang chủ" subtitle="Cùng nhau học tập ..." />
                            <div className="contentpanel panel-email">

                                <div className="row">

                                    <div className="col-sm-3 col-lg-2">
                                        <h5 className="subtitle">Nhóm đã tham gia</h5>
                                        <ul className="nav nav-pills nav-stacked nav-email mb20">
                                            {
                                                ingroups.map((data, index) => (
                                                    <li className="">
                                                        <Link to={`/chat/${data._id}`}>
                                                            <span className="badge pull-right">{data.memberIds.length > 0 ? data.memberIds.length : ""}</span>
                                                            <i className="glyphicon glyphicon-folder-open"></i> {data.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <div className="mb30"></div>

                                        <h5 className="subtitle">Nhóm chờ duyệt</h5>
                                        <ul className="nav nav-pills nav-stacked nav-email mb20">
                                            {
                                                wtgroups.map((data, index) => (
                                                    <li className="">
                                                        <Link to={`/chat/${data._id}`}>
                                                            <i className="glyphicon glyphicon-folder-open"></i> {data.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                    </div>

                                    <div className="col-sm-9 col-lg-10">

                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <Modal visible={ocreateGr} title="Tạo nhóm mới"
                                                    onCancel={() => setOcreateGr(false)}
                                                    cancelText="Cancel"
                                                    okText="Tạo"
                                                    onOk={formCGR.submit}
                                                >
                                                    <Form form={formCGR} onFinish={handleCreateGroup}>
                                                        <Form.Item name="name" label="Tên nhóm" rules={[{ required: true, message: 'Nhập tên nhóm' }]}>
                                                            <Input placeholder="Nhập tên nhóm" />
                                                        </Form.Item>
                                                        <Form.Item name="class" label="Lớp" rules={[{ required: true, message: 'Nhập khối, lớp' }]}>
                                                            <Input placeholder="Nhập khối, lớp" type="number" />
                                                        </Form.Item>
                                                    </Form>
                                                </Modal>
                                                <Row gutter={16}>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<AppstoreAddOutlined />} onClick={() => setOcreateGr(true)} >Tạo nhóm mới</Button>
                                                    </Col>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<FileSearchOutlined />} onClick={() => setOfindGr(true)} >Tìm nhóm</Button>
                                                    </Col>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<UsergroupAddOutlined />} onClick={() => setOfindFr(true)} >Tìm bạn bè</Button>
                                                    </Col>
                                                </Row>
                                                <div className="mb30"></div>
                                                <Row gutter={[16, 16]}>
                                                    <Col className="gutter-row" span={24}>
                                                        <Descriptions title="Toán" bordered>
                                                            <Descriptions.Item label="Kết quả gần đây">9 điểm</Descriptions.Item>
                                                            <Descriptions.Item label="Thời gian làm bài" span={2}>20 phút</Descriptions.Item>
                                                            <Descriptions.Item label="Biểu đồ kết quả" span={3}>
                                                                <Bar
                                                                    data={{
                                                                        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
                                                                        datasets: [
                                                                            {
                                                                                label: 'Điểm',
                                                                                backgroundColor: 'rgba(75,192,192,1)',
                                                                                borderColor: 'rgba(0,0,0,1)',
                                                                                borderWidth: 1,
                                                                                data: [9, 8, 10, 8, 9]
                                                                            }
                                                                        ]
                                                                    }}
                                                                    height={150}
                                                                    options={{ maintainAspectRatio: false }}
                                                                />
                                                            </Descriptions.Item>
                                                        </Descriptions>
                                                    </Col>
                                                    <Col className="gutter-row" span={24}>
                                                        <Descriptions title="Vật Lý" bordered>
                                                            <Descriptions.Item label="Kết quả gần đây">9 điểm</Descriptions.Item>
                                                            <Descriptions.Item label="Thời gian làm bài" span={2}>25 phút</Descriptions.Item>
                                                            <Descriptions.Item label="Biểu đồ kết quả" span={3}>
                                                                <Bar
                                                                    data={{
                                                                        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
                                                                        datasets: [
                                                                            {
                                                                                label: 'Điểm',
                                                                                backgroundColor: 'rgba(75,192,192,1)',
                                                                                borderColor: 'rgba(0,0,0,1)',
                                                                                borderWidth: 1,
                                                                                data: [9, 8, 10, 8, 9]
                                                                            }
                                                                        ]
                                                                    }}
                                                                    height={150}
                                                                    options={{ maintainAspectRatio: false }}
                                                                />
                                                            </Descriptions.Item>
                                                        </Descriptions>
                                                    </Col>
                                                    <Col className="gutter-row" span={24}>
                                                        <Descriptions title="Hoá Học" bordered>
                                                            <Descriptions.Item label="Kết quả gần đây">9 điểm</Descriptions.Item>
                                                            <Descriptions.Item label="Thời gian làm bài" span={2}>16 phút</Descriptions.Item>
                                                            <Descriptions.Item label="Biểu đồ kết quả" span={3}>
                                                                <Bar
                                                                    data={{
                                                                        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
                                                                        datasets: [
                                                                            {
                                                                                label: 'Điểm',
                                                                                backgroundColor: 'rgba(75,192,192,1)',
                                                                                borderColor: 'rgba(0,0,0,1)',
                                                                                borderWidth: 1,
                                                                                data: [9, 8, 10, 8, 9]
                                                                            }
                                                                        ]
                                                                    }}
                                                                    height={150}
                                                                    options={{ maintainAspectRatio: false }}
                                                                />
                                                            </Descriptions.Item>
                                                        </Descriptions>
                                                    </Col>
                                                    <Col className="gutter-row" span={24}>
                                                        <Descriptions title="Tiếng Anh" bordered>
                                                            <Descriptions.Item label="Kết quả gần đây">9 điểm</Descriptions.Item>
                                                            <Descriptions.Item label="Thời gian làm bài" span={2}>30 phút</Descriptions.Item>
                                                            <Descriptions.Item label="Biểu đồ kết quả" span={3}>
                                                                <Bar
                                                                    data={{
                                                                        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
                                                                        datasets: [
                                                                            {
                                                                                label: 'Điểm',
                                                                                backgroundColor: 'rgba(75,192,192,1)',
                                                                                borderColor: 'rgba(0,0,0,1)',
                                                                                borderWidth: 1,
                                                                                data: [9, 8, 10, 8, 9]
                                                                            }
                                                                        ]
                                                                    }}
                                                                    height={150}
                                                                    options={{ maintainAspectRatio: false }}
                                                                />
                                                            </Descriptions.Item>
                                                        </Descriptions>
                                                    </Col>
                                                </Row>


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
        userId: state.userId,
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
        updateInfo: (token, username, userId) => dispatch(actions.getInfostatus(token, username, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)