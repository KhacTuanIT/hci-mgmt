import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADD_TOPIC, EDIT_TOPIC} from '../../constants/TopTitlesConstant'
import FormAddTopic from './FormAddTopic'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'
export class AddTopicPage extends Component {
    render() {
        const url = window.location.href
        return (
            <div className="main_container">   
                <SideMenu />
                <div className="clearfix"></div>
                <NavTop />
                <div className="clearfix"></div>
                <div className="right_col" role="main">
                    <TopTitle items={url.includes('add') ? ADD_TOPIC : EDIT_TOPIC}/>
                    <br />
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>{url.includes('add') ? 'Add Topic' : 'Edit Topic' }</h2>
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
                                            <FormAddTopic />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <Footer/>
            </div>
            
        )
    }
}

export default AddTopicPage
