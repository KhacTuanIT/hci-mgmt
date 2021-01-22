import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {CUSTOMER} from '../../constants/TopTitlesConstant'
export class CustomerPage extends Component {
    render() {
        return (
            <div class="right_col" role="main">
                <TopTitle items={CUSTOMER}/>
                <br />
            </div>
        )
    }
}

export default CustomerPage
