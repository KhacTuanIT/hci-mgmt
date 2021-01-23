import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopTitle from '../../components/TopTitle'
import { QUESTION } from '../../constants/TopTitlesConstant'
import packageCallAPI from '../../utils/callAPI/packageCallAPI'
import QuestionDataTable from './QuestionDataTable'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'

export class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        packageCallAPI('Questions', 'get', null).then(res => {
            this.setState({
                questions: res.data
            })
        })
    }

    render() {
        return (
            <div className="main_container">
                <SideMenu />
                <div className="clearfix"></div>
                <NavTop />
                <div className="clearfix"></div>
                <div className="right_col" role="main">
                    <TopTitle items={QUESTION} />
                    <br />
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>List Question</h2>
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
                                            <div className="card-box table-responsive">
                                                <QuestionDataTable />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>

        )
    }

    showPackgeItem = (packages) => {
        var result = null;
        if (packages.length > 0) {
            let no = 0
            result = packages.map((pkg, index) => {
                no = no + 1
                return (
                    <tr key={index}>
                        <td>{no}</td>
                        <td>{pkg.name}</td>
                        <td>
                            <button type="button" class="btn btn-xs btn-warning">
                                <i class="fa fa-pencil"></i> Edit
                            </button>
                            <button type="button" class="btn btn-xs btn-danger" data-toggle="modal" data-target="#deleteModal">
                                <i class="fa fa-trash-o"></i> Delete
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => ({
    packages: state.packages
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
