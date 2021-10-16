import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'

import { Spin, Button, Row, Col, Descriptions } from 'antd';
import { AppstoreAddOutlined, FileSearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Bar } from 'react-chartjs-2';

const DashBoard = (props) => {

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
                                            <li className="">
                                                <a>
                                                    <span className="badge pull-right">2</span>
                                                    <i className="glyphicon glyphicon-folder-open"></i> Ôn thi đại học - Tiếng Anh
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <i className="glyphicon glyphicon-folder-open"></i> Vượt qua nỗi sợ - Vật lý
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="mb30"></div>

                                        <h5 className="subtitle">Nhóm chờ duyệt</h5>
                                        <ul className="nav nav-pills nav-stacked nav-email mb20">
                                            <li><a><i className="glyphicon glyphicon-folder-open"></i> Nhóm D - Toán</a></li>
                                            <li><a><i className="glyphicon glyphicon-folder-open"></i> Nhóm E - Ngữ Văn</a></li>
                                        </ul>

                                    </div>

                                    <div className="col-sm-9 col-lg-10">

                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <Row gutter={16}>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<AppstoreAddOutlined />}>Tạo nhóm mới</Button>
                                                    </Col>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<FileSearchOutlined />}>Tìm nhóm</Button>
                                                    </Col>
                                                    <Col className="gutter-row" span={8}>
                                                        <Button style={{ width: "100%", height: "50px", fontSize: "18px" }} icon={<UsergroupAddOutlined />}>Tìm bạn bè</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)