import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormAddVocabulary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: [],
            word: '',
            image: '',
            chooseTopics: [],
            example: '',
            mean: '',
            pronunciation: '',
            exampleMean: '',
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
                url: `${API.API_URL}Topics`,
                headers
            })

            if (response.status === 201 || response.status === 200) {
                this.setState({
                    topics: response.data
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
                    url: `${API.API_URL}Vocabularies/${id}`,
                    headers
                })
    
                if (response.status === 201 || response.status === 200) {
                    this.setState({
                        word: response.data.word,
                        mean: response.data.mean,
                        example: response.data.example,
                        exampleMean: response.data.example_mean,
                        pronunciation: response.data.pronunciation,
                        image: response.data.image,
                        chooseTopics: response.data.topic,
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
            word: this.state.word,
            mean: this.state.mean,
            example: this.state.example,
            example_mean: this.state.exampleMean,
            pronunciation: this.state.pronunciation,
            topics: this.state.chooseTopics,
            image: this.state.image
        }
        if (this.state.id != '') data.id = this.state.id
        console.log(this.state)

        try {
            axios({
                method: this.state.id != '' ? 'PUT' : 'POST',
                url: this.state.id != '' ? `${API.API_URL}Vocabularies/${this.state.id}` : `${API.API_URL}Vocabularies`,
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
        const { topics } = this.state
        
        return (
            <div>
                <ToastContainer />
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Word</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Word"
                                required
                                name="word"
                                value={this.state.word}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Mean</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Mean"
                                required
                                name="mean"
                                value={this.state.mean}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Example</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Example"
                                required
                                name="example"
                                value={this.state.example}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Example Mean</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Example mean"
                                required
                                name="exampleMean"
                                value={this.state.exampleMean}
                                onChange={this.handleText}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Pronouciation</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pronounciation"
                                required
                                name="pronunciation"
                                value={this.state.pronunciation}
                                onChange={this.handleText}
                            />

                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="exampleFormControlSelect2" className="col-sm-2 col-form-label">Topics</label>
                        <div className="col-sm-10">
                            <select class="form-control" id="exampleFormControlSelect2"
                                name="chooseTopics"
                                select={this.state.chooseTopics ? this.state.chooseTopics : 0}
                                onChange={this.handleText}
                            >
                                {topics !== null &&
                                    topics.map((topic, index) => {
                                        return (
                                            <option key={index} value={topic.id}>{topic.name}</option>
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
                                {this.state.id === '' ? 'Create New Vocabulary' : 'Update Vocabulary'}
                                
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
