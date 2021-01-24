import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Registry.css'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class RegistryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            error: {
                username: false,
                email: false,
                password: false,
            },
            errorMessage: {
                username: '',
                email: '',
                password: '',
            }
        }
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
        if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '') {
            try {
                axios({
                    method: 'POST',
                    url: `${API.API_URL_2}admins`,
                    headers,
                    data: {
                        name: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    }
                }).then(response => {
                    console.log(response)
                    if (response.status === 201) {
                        toast("Create successfully !");
                    } else {
                        toast("Create failure !");
                    }
                })
    
            } catch (error) {
                console.log(error)
            }
        }
        else {
            let u = false
            let e = false
            let p = false
            if (this.state.username === '') {
                u = true
            }
            if (this.state.email === '') {
                e = true
            }
            if (this.state.password === '') {
                p = true
            }
            this.setState({
                error: {
                    username: u,
                    email: e,
                    password: p
                }
            })
            
            setTimeout(() => this.resetAllError(), 3000)
        }
    }

    resetAllError = () => {
        this.setState({
            error: {
                username: false,
                email: false,
                password: false,
            }
        })
    }

    render() {
        return (
            <div className="wrapper_page_login">
            <ToastContainer />
                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section class="login_content">
                            <h1>Create Account</h1>
                            <div>
                                <input
                                    type="text"
                                    className={!this.state.error.username ? "form-control" : "form-control is-invalid"}
                                    placeholder="Username"
                                    required=""
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className={!this.state.error.email ? "form-control" : "form-control is-invalid"}
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
                                    className={!this.state.error.password ? "form-control" : "form-control is-invalid"}
                                    placeholder="Password"
                                    required=""
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div>
                                <button onClick={this.onSubmit} className="btn btn-primary submit">Create Account</button>
                            </div>

                            <div className="clearfix"></div>

                            <div className="separator">
                                <p className="change_link">Already a member ?
                                <Link to="/login" className="to_register">Login</Link>
                                </p>

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

export default RegistryPage
