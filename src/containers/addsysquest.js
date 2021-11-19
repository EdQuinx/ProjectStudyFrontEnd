import { Spin, List, Avatar, Space, Button, Modal, message, Form, Radio, Select, Input, Upload, Image } from 'antd';
import { UploadOutlined, MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';
import { Link, useLocation } from 'react-router-dom'

import EquationEditor from "equation-editor-react";
import MathQ from '../components/matheq';

const AddSysQuest = (props) => {
    const [showaddquest, setShowaddquest] = useState(false)
    const [formAddQuest] = Form.useForm()
    const location = useLocation()

    const [equation, setEquation] = useState("");

    useEffect(() => {
        handleGetQuestList()
    },[])


    const [questList, setQuestList] = useState([])

    const handleGetQuestList = () => {
        axios.get(api.api_question_system_gettest, {
            params: {
                username: props.username,
                token: props.token,
            }
        }).then(res => res.data)
        .then(res => {
            console.log(res)
            setQuestList(res)
        }).catch(console.log)
    }

    const handleAddQuestList = (e) => {
        axios.post(api.api_question_system, {
            ...e,

        }, {
            params: {
                username: props.username,
                token: props.token,
            }
        }).then(res => res.data)
        .then(res => {
            console.log(res)
            setQuestList(res)
        }).catch(console.log)
    }


    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        <React.Fragment>
                            <PageHeader icon="fa-user" page="Edit test" />
                            <div className="contentpanel">

                                <div className="row">
                                    <Modal visible={showaddquest} onCancel={() => setShowaddquest(false)}
                                        title="Thêm quest system"
                                        onOk={() => formAddQuest.submit()}
                                    >
                                        <EquationEditor
                                            value={equation}
                                            onChange={setEquation}
                                            autoCommands="bar overline sqrt sum prod int alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omikron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Aelta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omikron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega rangle langle otimes neq leq ll geq gg approx dagger angle in"
                                            autoOperatorNames="sin cos tan"
                                        />
                                        <MathQ value={equation} />

                                        <Form form={formAddQuest}>

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

export default connect(mapStateToProps, mapDispatchToProps)(AddSysQuest)