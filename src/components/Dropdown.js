import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

const Dropdown = ({title, items = [], icon}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => {
        setOpen(!open)
    }
    const handleOnClick = (item) => {
        if (!selection.some(current => current.to === item.to)) {
            setSelection([item]);
        } else {
            let selectionAfterRemove = selection;
            selectionAfterRemove = selectionAfterRemove.filter(
                current => current.to !== item.to
            );
            setSelection([...selectionAfterRemove]);
        }
    }
    const isSelectedItem = (item) => {
        if (selection.find(current => current.to === item.to)) {
            return true;
        }
        return false;
    } 
    

    return (
        <li className={open ? "active" : ""}>
            <a onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}><i className={`fa ${icon}`}></i> {title} <span className={`fa fa-chevron-${open ? "up" : "down"}`}></span></a>
            <ul className="nav child_menu" style={open ? {display: 'block'} : {display: 'none'}}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={isSelectedItem(item) ? "current-page" : ""} onClick={() => handleOnClick(item)}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default Dropdown;
