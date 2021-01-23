import React, { Component } from 'react'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'

export class HelpPage extends Component {
    render() {
        return (
            <div className="main_container">
                <SideMenu />
                <div className="clearfix"></div>
                <NavTop />
                <div className="clearfix"></div>
                <div className="right_col" role="main">
                    Help Page
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
            
        )
    }
}

export default HelpPage
