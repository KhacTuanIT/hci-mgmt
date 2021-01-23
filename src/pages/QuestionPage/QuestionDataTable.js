import { MDBCard, MDBCardBody, MDBCardHeader, MDBDataTableV5 } from 'mdbreact'
import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class QuestionDataTable extends Component {
  constructor(props) {
    super(props)
    this.state={
      data: {
        columns: [
          {
            label: 'ID',
            field: 'id'
          },
          {
            label: 'Name',
            field: 'name'
          },
          {
            label: 'Create at',
            field: 'createAt'
          }
        ],
        rows: [
        ]
      },
      
    }
  }
  
  timeConverter = (UNIX_timestamp) => {
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
  }

  prepareData = async() => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    try {
      const response = await axios({
        method: 'GET',
        url: `${API.API_URL}Questions`,
        headers
      })

      if (response.status === 200) {
        const rows = response.data
        const rs = rows.map((el) => {
          return {
            id: el.id,
            question: el.question,
            correct_answer: el.true_answer,
            wrong_answer: el.wrong_answer,
            vocabulary_id: el.vocabulary_id,
            createdAt: this.timeConverter(el.createdAt)
          }
        })
        this.setState({
          data: {
            colomuns: this.state.data.columns,
            rows: rs
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  async componentDidMount() {
    await this.prepareData()
    console.log(this.state.data)
  }

  onDelete = (id) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

    try {
        axios({
            method: 'DELETE',
            url: `${API.API_URL}Questions/${id}`,
            headers
        }).then(response => {
            if (response.status === 201 || response.status === 200) {
                toast("Delete successfully !");
                this.prepareData()
            } else {
                toast("Delete fail !");
            }
        })

    } catch (error) {
        console.log(error)
    }
  }

  render() {
    const {data} = this.state
    return (
      <div>
      <ToastContainer />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">
                ID
              </th>
              <th scope="col">
                Question
              </th>
              <th scope="col">
                Correct answer
              </th>
              <th scope="col">
                Incorrect answer
              </th>
              <th scope="col">
                Vocabulary
              </th>
              <th scope="col">
                Created At
              </th>
              <th scope="col">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null && 
              data.rows.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.question}</td>
                    <td>{val.correct_answer}</td>
                    <td>{val.wrong_answer}</td>
                    <td>{val.vocabulary_id}</td>
                    <td>{val.createdAt}</td>
                    <td>
                      <Link to={'edit/' + val.id} className="btn btn-success" title="Update">Update</Link>
                      <button onClick={() => this.onDelete(val.id)} className="btn btn-danger" title="Delete">Delete</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        </div>
    )
  }
}
