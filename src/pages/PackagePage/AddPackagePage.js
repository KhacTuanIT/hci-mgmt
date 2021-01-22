import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADD_PACKAGE, EDIT_PACKAGE} from '../../constants/TopTitlesConstant'
import FormAddPackage from './FormAddPackage'
export class AddPackagePage extends Component {
    render() {
        const url = window.location.href
        return (
            <div class="right_col" role="main">
                <TopTitle items={url.includes('add') ? ADD_PACKAGE : EDIT_PACKAGE}/>
                <br />
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>{url.includes('add') ? 'Add Package' : 'Edit Package' }</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li>
                                    <a className="collapse-link"
                                        ><i className="fa fa-chevron-up"></i></a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <FormAddPackage />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPackagePage
