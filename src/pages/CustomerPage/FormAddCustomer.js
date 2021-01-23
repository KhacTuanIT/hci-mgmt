import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormAddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            adress: '',
            gender: '',
            id: ''
        }
    }

    prepareData = async () => {
        const url = window.location.href
        console.log(url)
        if (url.includes('edit')) {
            const params = url.split('/')
            const id = params.pop()
            console.log(id)
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
    
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${API.API_URL_2}users/${id}`,
                    headers
                })
    
                if (response.status === 201 || response.status === 200) {
                    this.setState({
                        name: response.data.name,
                        id: response.data.id
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    async componentDidMount() {
        await this.prepareData();
        console.log(this.state)
    }

    handleText = (event) => {
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
        

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            adress: this.state.adress,
            gender: this.state.gender
        }
        if (this.state.id !== '') data.id = this.state.id
        console.log(this.state)

        try {
            axios({
                method: this.state.id !== '' ? 'PUT' : 'POST',
                url: this.state.id !== '' ? `${API.API_URL_2}users/${this.state.id}` : `${API.API_URL_2}users`,
                headers,
                data
            }).then(response => {
                if (response.status === 201 || response.status === 200) {
                    toast(this.state.id !== '' ? "Update successfully !" : "Create successfully !");
                } else {
                    toast(this.state.id !== '' ? "Update fail !" : "Create fail !");
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        
        return (
            <div>
                <ToastContainer />
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Customer name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Email"
                                required
                                name="email"
                                value={this.state.email}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Phone number</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Phone number"
                                required
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Address"
                                required
                                name="adress"
                                value={this.state.adress}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Gender"
                                required
                                name="gender"
                                value={this.state.gender}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                type="button"
                                className="btn btn-primary mb-2"
                                onClick={this.onSubmit}
                            >
                                {this.state.id === '' ? 'Create New Customer' : 'Update Customer information'}
                                
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
