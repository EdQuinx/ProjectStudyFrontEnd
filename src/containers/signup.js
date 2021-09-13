import React from 'react'
import { Link } from 'react-router-dom'
import { site_name } from '../api'
import Footer from '../components/footer'

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import { Button, Form, Input, Select, Spin } from 'antd'

const SignUp = (props) => {

    const [regForm] = Form.useForm()

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size="large" />
                    :
                    props.isAuthenticated ?
                        <div className="signuppanel">

                            <div className="row">

                                <div className="col-md-6">

                                    <div className="signup-info">
                                        <div className="logopanel">
                                            <h1><span>[</span> {site_name} <span>]</span></h1>
                                        </div>

                                        <div className="mb20"></div>

                                        <h5><strong>{site_name}!</strong></h5>
                                        <p>Bracket is a theme that is perfect if you want to create your own content management, monitoring or any other system for your project.</p>
                                        <p>Below are some of the benefits you can have when purchasing this template.</p>
                                        <div className="mb20"></div>

                                        <div className="feat-list">
                                            <i className="fa fa-wrench"></i>
                                            <h4 className="text-success">Easy to Customize</h4>
                                            <p>Bracket is made using Bootstrap 3 so you can easily customize any element of this template following the structure of Bootstrap 3.</p>
                                        </div>

                                        <div className="feat-list">
                                            <i className="fa fa-compress"></i>
                                            <h4 className="text-success">Fully Responsive Layout</h4>
                                            <p>Bracket is design to fit on all browser widths and all resolutions on all mobile devices. Try to scale your browser and see the results.</p>
                                        </div>

                                        <div className="feat-list mb20">
                                            <i className="fa fa-search-plus"></i>
                                            <h4 className="text-success">Retina Ready</h4>
                                            <p>When a user load a page, a script checks each image on the page to see if there's a high-res version of that image. If a high-res exists, the script will swap that image in place.</p>
                                        </div>

                                        <h4 className="mb20">and much more...</h4>

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <Form form={regForm} layout="vertical" onFinish={(e) => props.authSignup(e.fullname, e.username, e.email, e.password, e.gender, e.class, [], [])}>

                                        <h3 className="nomargin">Sign Up</h3>
                                        <p className="mt5 mb20">Already a member? <Link to="/signin"><strong>Sign In</strong></Link></p>

                                        <Form.Item name="fullname" label="Full Name" rules={[{ required: true, message: 'Missing full name' }]}>
                                            <Input />
                                        </Form.Item>

                                        <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Missing username' }]}>
                                            <Input />
                                        </Form.Item>

                                        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Missing password' }]}>
                                            <Input type="password" />
                                        </Form.Item>

                                        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Missing email' }]}>
                                            <Input />
                                        </Form.Item>

                                        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Missing gender' }]}>
                                            <Select placeholder="Choose your gender">
                                                <Select.Option value="male">Male</Select.Option>
                                                <Select.Option value="female">Female</Select.Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item name="class" label="Grade" rules={[{ required: true, message: 'Missing Grade' }]}>
                                            <Input type="number" />
                                        </Form.Item>

                                        <Form.Item >
                                            <Button type="primary" htmlType="submit">Sign Up</Button>
                                        </Form.Item>
                                    </Form>
                                </div>

                            </div>

                            <Footer />

                        </div>
                        :
                        props.history.push("/")
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)