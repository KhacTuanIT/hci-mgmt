import React, { Component } from 'react'
import './Dashboard.css'
import TopTitle from '../../components/TopTitle'
import { DASHBOARD } from '../../constants/TopTitlesConstant'
import SideMenu from '../../components/SideMenu'
import NavTop from '../../components/NavTop'
import Footer from '../../components/Footer'
export class DashboardPage extends Component {
    render() {
        return (
            <div className="main_container">
                <SideMenu />
                <div className="clearfix"></div>
                <NavTop />
                <div className="clearfix"></div>
                <div className="right_col" role="main">
                    <TopTitle items={DASHBOARD} />
                    <br />
                    <div class="row">
                        <div class="col-md-6 col-sm-6 ">
                            <div class="x_panel tile fixed_height_420">
                                <div class="x_title">
                                    <h2>Courses</h2>
                                    <ul class="nav navbar-right panel_toolbox">
                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <div class="widget_summary badge badge-secondary">
                                        <div class="w_left w_80">
                                            <span>Topics</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>123k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="widget_summary badge badge-success">
                                        <div class="w_left w_80">
                                            <span>Vocabularies</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>53k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="widget_summary badge badge-primary">
                                        <div class="w_left w_80">
                                            <span>Questions</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>23k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="widget_summary badge badge-danger">
                                        <div class="w_left w_80">
                                            <span>Packages</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>3k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="widget_summary badge badge-info">
                                        <div class="w_left w_80">
                                            <span>0.1.5.6</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>1k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 ">
                            <div class="x_panel tile fixed_height_420">
                                <div class="x_title">
                                    <h2>Customers</h2>
                                    <ul class="nav navbar-right panel_toolbox">
                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <div class="widget_summary badge badge-dark">
                                        <div class="w_left w_80">
                                            <span>Customers</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>123k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="widget_summary badge badge-secondary">
                                        <div class="w_left w_80">
                                            <span>VIP VOCA Customers</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>53k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="widget_summary badge bg-green">
                                        <div class="w_left w_80">
                                            <span>VIP VOCA PLUS Customers</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>23k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="widget_summary badge badge-light">
                                        <div class="w_left w_80">
                                            <span>Default Customers</span>
                                        </div>
                                        <div class="w_right w_20">
                                            <span>3k</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="tile_count">
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Users</span>
                                    <div class="count">2500</div>
                                    <span class="count_bottom"><i class="green">4% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-clock-o"></i> Total Topics</span>
                                    <div class="count">123.50</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Vocabs</span>
                                    <div class="count green">2,500</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Packages</span>
                                    <div class="count">4,567</div>
                                    <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
                                </div>
                                <div class="col-md-2 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Questions</span>
                                    <div class="count">2,315</div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div >

        )
    }
}

export default DashboardPage
