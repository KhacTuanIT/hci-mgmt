import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormAddQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vocabularies: [],
            question: '',
            true_answer: '',
            wrong_answer: [],
            vocabulary_id: '1',
            id: ''
        }
    }

    prepareData = async () => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

        try {
            const response = await axios({
                method: 'GET',
                url: `${API.API_URL}Vocabularies`,
                headers
            })

            if (response.status === 201 || response.status === 200) {
                this.setState({
                    vocabularies: response.data
                })
            } else {

            }
        } catch (error) {
            console.log(error)
        }

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
                    url: `${API.API_URL}Questions/${id}`,
                    headers
                })
    
                if (response.status === 201 || response.status === 200) {
                    this.setState({
                        question: response.data.question,
                        true_answer: response.data.true_answer,
                        wrong_answer: response.data.wrong_answer,
                        vocabulary_id: response.data.vocabulary_id,
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
            question: this.state.question,
            true_answer: this.state.true_answer,
            wrong_answer: this.state.wrong_answer,
            vocabulary_id: this.state.vocabulary_id
        }
        console.log(data)
        if (this.state.id != '') data.id = this.state.id
        console.log(this.state)

        try {
            axios({
                method: this.state.id != '' ? 'PUT' : 'POST',
                url: this.state.id != '' ? `${API.API_URL}Questions/${this.state.id}` : `${API.API_URL}Questions`,
                headers,
                data
            }).then(response => {
                if (response.status === 201 || response.status === 200) {
                    toast(this.state.id != '' ? "Update successfully !" : "Create successfully !");
                } else {
                    toast(this.state.id != '' ? "Update fail !" : "Create fail !");
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { vocabularies } = this.state
        
        return (
            <div>
                <ToastContainer />
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Question</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Name"
                                required
                                name="question"
                                value={this.state.question}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">True answer</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Name"
                                required
                                name="true_answer"
                                value={this.state.true_answer}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Wrong answer</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Name"
                                required
                                name="wrong_answer"
                                value={this.state.wrong_answer}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="exampleFormControlSelect2" className="col-sm-2 col-form-label">Vocabulary</label>
                        <div className="col-sm-10">
                            <select class="form-control" id="exampleFormControlSelect2"
                                name="vocabulary_id"
                                select={this.state.vocabulary_id ? this.state.vocabulary_id : 0}
                                onChange={this.handleText}
                            >
                                {vocabularies !== null &&
                                    vocabularies.map((vocabulary, index) => {
                                        return (
                                            <option key={index} value={vocabulary.id}>{vocabulary.word}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div className="custom-file col-sm-10">
                            <input
                                type="file"
                                className="custom-file-input form-control"
                                id="validatedCustomFile"
                                name="image"
                                onChange={this.handleText}
                            />
                            <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
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
                                {this.state.id === '' ? 'Create New Topic' : 'Update Topic'}
                                
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
