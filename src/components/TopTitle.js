import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class TopTitle extends Component {
    render() {
        const {items} = this.props
        return (
            <div class="row top-title" >
                <div class="col-md-12">
                <h4>
                    {this.showTitle(items)}
                </h4>
                </div>
            </div>
        )
    }

    showTitle = (items) => {
        var result = null;
        if (items.length > 0) {
            result = items.map((item, index) => {
                if (item.type === 'a') {
                    return (
                        <Link key={index} to={item.to}>{item.name}/ </Link>
                    )
                }
                else if (item.type === 'span') {
                    return (
                        <span key={index}>{item.name}/ </span>
                    )
                }
            })
        }
        return result;
    } 
}

export default TopTitle
