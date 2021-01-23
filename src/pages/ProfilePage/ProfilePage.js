import React, { Component } from 'react'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'
import axios from 'axios'
import * as API from '../../constants/Config'

export class ProfilePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            gender: ''
        }
    }

    prepareData = async () => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

        const id = localStorage.getItem('token')
        try {
            const response = await axios({
                method: 'GET',
                url: `${API.API_URL_2}admins/${id}`,
                headers
            })
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    address: response.data.address,
                    gender: response.data.gender,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.prepareData()
    }

    render() {
        return (
            <div className="main_container">
                <SideMenu />
                <div class="clearfix"></div>
                <NavTop />
                <div class="clearfix"></div>
                <div class="right_col" role="main">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Profile</h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"
                                            ><i className="fa fa-chevron-up"></i></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="row gutters-sm">
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="d-flex flex-column align-items-center text-center">
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
                                                                    width="150" />
                                                                <div class="mt-3">
                                                                    <h4>{this.state.name}</h4>
                                                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                                                    <p class="text-muted font-size-sm">{this.state.address}</p>
                                                                    <button class="btn btn-primary">Follow</button>
                                                                    <button class="btn btn-outline-primary">Message</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card mb-3">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-sm-3">
                                                                    <h6 class="mb-0">Full Name</h6>
                                                                </div>
                                                                <div class="col-sm-9 text-secondary">
                                                                    {this.state.name}
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div class="row">
                                                                <div class="col-sm-3">
                                                                    <h6 class="mb-0">Email</h6>
                                                                </div>
                                                                <div class="col-sm-9 text-secondary">
                                                                    {this.state.email}
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div class="row">
                                                                <div class="col-sm-3">
                                                                    <h6 class="mb-0">Phone</h6>
                                                                </div>
                                                                <div class="col-sm-9 text-secondary">
                                                                    {this.state.phone}
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div class="row">
                                                                <div class="col-sm-3">
                                                                    <h6 class="mb-0">Mobile</h6>
                                                                </div>
                                                                <div class="col-sm-9 text-secondary">
                                                                    {this.state.phone}
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div class="row">
                                                                <div class="col-sm-3">
                                                                    <h6 class="mb-0">Address</h6>
                                                                </div>
                                                                <div class="col-sm-9 text-secondary">
                                                                    {this.state.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <Footer />
            </div>
        )
    }
}

export default ProfilePage
