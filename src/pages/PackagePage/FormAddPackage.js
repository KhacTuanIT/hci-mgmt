import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormAddPackage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            error: {
                name: false
            },
            errorMessage: {
                name: ''
            }
        }
    }

    prepareData = async () => {
        const url = window.location.href
        console.log(url)
        if (url.includes('edit')) {
            const params = url.split('/')
            const id = params.pop()
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
    
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${API.API_URL}Packages/${id}`,
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
    }

    handleText = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        

        if (this.state.name !== '') {
            const data = {
                name: this.state.name
            }
            if (this.state.id !== '') data.id = this.state.id
    
            try {
                axios({
                    method: this.state.id !== '' ? 'PUT' : 'POST',
                    url: this.state.id !== '' ? `${API.API_URL}Packages/${this.state.id}` : `${API.API_URL}Packages`,
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
        else {
            console.log("err")
            this.setState({
                error: {
                    name: true
                },
                errorMessage: {
                    name: 'Package name is required!'
                }
            })
            setTimeout(() => this.resetAllError(), 3000)
        }
    }

    resetAllError = () => {
        console.log('clear')
        this.setState({
            error: {
                name: false
            },
            errorMessage: {
                name: ''
            }
        })
    }

    render() {
        
        return (
            <div>
                <ToastContainer />
                <form class={!this.state.error.name ? null : "was-validated"}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Package name</label>
                        <div className="col-sm-10 input-group">
                            <input
                                type="text"
                                className={!this.state.error.name ? "form-control" : "form-control is-invalid"}
                                id="inputPassword"
                                placeholder="Name"
                                required
                                name="name"
                                value={this.state.name}
                                onChange={this.handleText}
                            />
                            <div class="invalid-feedback">{this.state.errorMessage.name}</div>
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
                                {this.state.id === '' ? 'Create New Package' : 'Update Package'}
                                
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
