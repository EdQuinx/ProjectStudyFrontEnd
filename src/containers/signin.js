import React from 'react'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import { site_name } from '../api'
import { Button, Form, Input, Spin } from 'antd'
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const SignIn = (props) => {

    return (
        <React.Fragment>
            {
                props.loading ?
                    <Spin size="large" />
                    :
                    !props.isAuthenticated ?
                    <div className="signinpanel">
                        <div className="row">

                            <div className="col-md-7">

                                <div className="signin-info">
                                    <div className="logopanel">
                                        <h1><span>[</span> {site_name} <span>]</span></h1>
                                    </div>

                                    <div className="mb20"></div>

                                    <h5><strong>Welcome to {site_name}</strong></h5>
                                    <ul>
                                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> Fully Responsive Layout</li>
                                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> HTML5/CSS3 Valid</li>
                                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> Retina Ready</li>
                                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> WYSIWYG CKEditor</li>
                                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> and much more...</li>
                                    </ul>
                                    <div className="mb20"></div>
                                    <strong>Not a member? <Link to="/signup">Sign Up</Link></strong>
                                </div>

                            </div>

                            <div className="col-md-5">

                                <Form onFinish={e => props.onAuth(e.username, e.password)}>
                                    <h4 className="nomargin">Sign In</h4>
                                    <p className="mt5 mb20">Login to access your account.</p>
                                    <Form.Item name="username">
                                        <Input type="text" className="form-control uname" placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item name="password">
                                        <Input type="password" className="form-control pword" placeholder="Password" />
                                    </Form.Item>
                                    <Link to="/forgot-pass"><small>Forgot Your Password?</small></Link>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="btn btn-success btn-block">Sign In</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)