import React, { Component } from 'react'
import './Dashboard.css'
import TopTitle from '../../components/TopTitle'
import {DASHBOARD} from '../../constants/TopTitlesConstant'
export class DashboardPage extends Component {
    render() {
        return (
            <div class="right_col" role="main">
                <TopTitle items={DASHBOARD}/>
                <br />
            </div>
        )
    }
}

export default DashboardPage
