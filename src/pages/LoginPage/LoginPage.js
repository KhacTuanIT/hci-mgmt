import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLogin: false
        }
    }

    componentDidMount() {

        // localStorage.clear()
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

        try {
            axios({
                method: 'GET',
                url: `${API.API_URL_2}admins`,
                headers
            }).then(response => {
                console.log(response)
                let c = 0
                if (response.status === 200) {
                    response.data.forEach(element => {
                        if (element.email === this.state.email && element.password === this.state.password) {
                            console.log("done")
                            localStorage.setItem('token', element.id)
                            this.setState({isLogin: true})
                            c++
                        }
                    });
                } 
                if (c === 0) toast("Username/password wrong !");
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {isLogin} = this.state
        return (
            <div className="wrapper_page_login">
                <ToastContainer />
                <div className="login_wrapper">
                    <div className="animate form login_form">
                    <section className="login_content">
                        <h1>Login</h1>
                        <div>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Email" 
                                required="" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                required="" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <button onClick={this.onSubmit} className="btn btn-primary">Login</button>
                            {/* <!-- <a className="reset_pass" href="#">Lost your password?</a> --> */}
                        </div>

                        <div className="clearfix"></div>

                        <div className="separator">
                            <p className="change_link">Haven't account?
                            <Link to="/registry" className="to_register">Create new accout</Link>
                            </p>
                            {isLogin === true ? <Redirect to="/" />: null}
                            <div className="clearfix"></div>
                            <br />

                            <div>
                            <h1> VOCA!</h1>
                            <p>©2020 All Rights Reserved. Privacy and Terms</p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
