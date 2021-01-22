import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userAvatar from '../utils/images/img.jpg'

const profileMenus = [
    {
        to: '/user/profile',
        name: "Profile",
        icon: "",
        type: "none"
    },
    {
        to: '/user/settings',
        name: "Settings",
        icon: "fa fa-cogs pull-right",
        type: "fa"
    },
    {
        to: '/user/help',
        name: "Help",
        icon: "",
        type: "none"
    },
    {
        to: '/login',
        name: "Log Out",
        icon: "fa fa-sign-out pull-right",
        type: "fa"
    }
]

export class NavTop extends Component {
    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <div className="nav toggle">
                        <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                    </div>
                    <nav className="nav navbar-nav">
                    <ul className=" navbar-right">
                        <li className="nav-item dropdown open" style={{paddingLeft: '15px'}}>
                            <a className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                <img src={userAvatar} alt="" />John Doe
                            </a>
                            <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                {this.showProfileMenu(profileMenus)}
                            </div>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
    
    showProfileMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                if (menu.icon !== "") {
                    if (menu.type === "badge") {
                        return (
                            <Link to={menu.to} className="dropdown-item">
                                <span className={menu.icon}>50%</span>
                                <span>{menu.name}</span>
                            </Link>
                        )
                    } else if (menu.type === "fa") {
                        return (<Link to={menu.to} className="dropdown-item">
                            <i className={menu.icon} />
                            {menu.name}
                        </Link>)
                    }
                }
                else {
                    return (
                        <Link to={menu.to} className="dropdown-item">{menu.name}</Link>
                    )
                }
            })
        }
        return result;
    }
}

export default NavTop
