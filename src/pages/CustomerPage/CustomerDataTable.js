import React, { Component } from 'react'
import axios from 'axios'
import * as API from '../../constants/Config'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CustmerDataTable extends Component {
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
        rows: []
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
        url: `${API.API_URL_2}users`,
        headers
      })

      if (response.status === 200) {
        const rows = response.data
        const rs = rows.map((el) => {
          return {
            id: el.id,
            name: el.name,
            email: el.email,
            phone: el.phone,
            adress: el.adress,
            gender: el.gender,
            createAt: this.timeConverter(el.createdAt)
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
            url: `${API.API_URL_2}users/${id}`,
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
                Name
              </th>
              <th scope="col">
                Email
              </th>
              <th scope="col">
                Phone
              </th>
              <th scope="col">
                Address
              </th>
              <th scope="col">
                Gender
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
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.adress}</td>
                    <td>{val.gender}</td>
                    <td>{val.createAt}</td>
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
