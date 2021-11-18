import { Spin, List, Button, Modal, message, Form, Radio, Select, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../store/actions/auth';
import PageHeader from '../components/pageheader'
import { useAppContext } from '../state';
import { Link, useLocation } from 'react-router-dom'

const GroupTest = (props) => {

    const location = useLocation()
    const [testlist, setTestlist] = useState([])
    const [state, setState] = useState(true)
    const [questNum, setQuestNum] = useState(1)
    const [showModal, setShowModal] = useState(true)
    const [result, setResult] = useState({ userChoice: "", answer: "" })
    const handleOk = (e) => {
        console.log(e)
    }
    const handleCancel = (e) => {
        console.log(e)
        setState(false)
    }
    useEffect(() => {
        handleDoTest("6194c83fbaa26ae73d1de91b")
    }, [])


    //
    const handleDoTest = (id) => {
        axios.get(api.api_group_do_test, {
            params: {
                username: props.username,
                token: props.token,
                testId: id
            }
        }).then(res => res.data)
            .then(res => {
                setTestlist(res)
                console.log(testlist)
            }).catch(console.log)
    }
    //

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size='large' />
                    :
                    props.isAuthenticated ?
                        <React.Fragment>
                            <PageHeader icon="fa-user" page="Làm test" />
                            <div className="contentpanel">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>
                                        <Form.Item label={"Test Modal"} className="modal-title" initialValue="h4"></Form.Item>
                                    </div>
                                    <div class="modal-body">...</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupTest)