import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADD_ADMINISTRATOR} from '../../constants/TopTitlesConstant'
export class AddAdministratorPage extends Component {
    render() {
        return (
            <div class="right_col" role="main">
                <TopTitle items={ADD_ADMINISTRATOR}/>
                <br />
            </div>
        )
    }
}

export default AddAdministratorPage
