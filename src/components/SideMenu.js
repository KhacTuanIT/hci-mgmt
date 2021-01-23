import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';
import iconLogo from '../utils/images/icon_intro_1.png'

const courseMenus = [
    {
        name: 'Topics',
        to: '#',
        icon: "fa-book",
        exact: false,
        childs: [
            {
                name: 'List Topic',
                to: '/topics/list',
                exact: false
            },
            {
                name: 'Add New Topic',
                to: '/topics/add',
                exact: false
            }
        ]
    },
    {
        name: 'Packages',
        to: '#',
        icon: "fa-cube",
        exact: false,
        childs: [
            {
                name: 'List Package',
                to: '/packages/list',
                exact: false
            },
            {
                name: 'Add New Package',
                to: '/packages/add',
                exact: false
            }
        ]
    },
    {
        name: 'Vocabularies',
        to: '#',
        icon: "fa-newspaper-o",
        exact: false,
        childs: [
            {
                name: 'List Vocabulary',
                to: '/vocabularies/list',
                exact: false
            },
            {
                name: 'Add New Vocabulary',
                to: '/vocabularies/add',
                exact: false
            }
        ]
    },
    {
        name: 'Questions',
        to: '#',
        icon: "fa-question-circle",
        exact: false,
        childs: [
            {
                name: 'List Question',
                to: '/questions/list',
                exact: false
            },
            {
                name: 'Add New Question',
                to: '/questions/add',
                exact: false
            }
        ]
    }
];

const accountMenus = [
    {
        name: 'Customers',
        to: '#',
        icon: "fa-users",
        exact: false,
        childs: [
            {
                name: 'List Customer',
                to: '/customers/list',
                exact: false
            },
            {
                name: 'Add New Customer',
                to: '/customers/add',
                exact: false
            }
        ]
    },
    {
        name: 'Administrators',
        to: '#',
        icon: "fa-cog",
        exact: false,
        childs: [
            {
                name: 'List Administrator',
                to: '/administrators/list',
                exact: false
            },
            {
                name: 'Add New Administrator',
                to: '/administrators/add',
                exact: false
            }
        ]
    }
]

class SideMenu extends Component {

    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{ border: '0' }}>
                        <Link to="/" className="site_title">
                            <img src={iconLogo} alt="Dashboard" className="img-circle img-logo" />
                            <span>VOCA EDU!</span>
                        </Link>
                    </div>

                    <div className="clearfix"></div>

                    <br />
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>Cources Management</h3>
                            <ul className="nav side-menu">
                                {courseMenus.map((menu, index) => {
                                    return (
                                        <Dropdown
                                            key={index}
                                            title={menu.name}
                                            items={menu.childs}
                                            icon={menu.icon}
                                        />
                                    )
                                })}

                            </ul>
                        </div>
                        <div className="menu_section">
                            <h3>Accounts Management</h3>
                            <ul className="nav side-menu">
                                {accountMenus.map((menu, index) => {
                                    return (
                                        <Dropdown
                                            key={index}
                                            title={menu.name}
                                            items={menu.childs}
                                            icon={menu.icon}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-footer hidden-small">
                        <Link data-toggle="tooltip" data-placement="top" title="Logout" to="/login">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu
