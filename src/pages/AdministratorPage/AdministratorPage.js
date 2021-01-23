import React, { Component } from 'react'
import TopTitle from '../../components/TopTitle'
import {ADMINISTRATOR} from '../../constants/TopTitlesConstant'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'
export class AdministratorPage extends Component {
    render() {
        return (
            <div className="main_container">
                <SideMenu />
                <div className="clearfix"></div>
                <NavTop />
                <div className="clearfix"></div>
                <div className="right_col" role="main">
                    <TopTitle items={ADMINISTRATOR}/>
                    <br />
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
            
        )
    }
}

export default AdministratorPage
