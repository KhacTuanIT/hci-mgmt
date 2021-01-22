import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADMINISTRATOR} from '../../constants/TopTitlesConstant'
export class AdministratorPage extends Component {
    render() {
        return (
            <div class="right_col" role="main">
                <TopTitle items={ADMINISTRATOR}/>
                <br />
            </div>
        )
    }
}

export default AdministratorPage
