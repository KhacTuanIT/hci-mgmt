import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADD_CUSTOMER} from '../../constants/TopTitlesConstant'
export class AddCustomerPage extends Component {
    render() {
        return (
            <div class="right_col" role="main">
                <TopTitle items={ADD_CUSTOMER}/>
                <br />
            </div>
        )
    }
}

export default AddCustomerPage
