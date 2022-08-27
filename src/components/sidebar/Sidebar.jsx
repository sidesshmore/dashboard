import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import MyLogo from "./My-logo.png"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon' />
                            Home
                        </li>
                        </Link>
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem ">
                            <PersonOutlineIcon className='sidebarIcon' />
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <StoreIcon className='sidebarIcon' />
                            Products
                        </li>
                        </Link>
                        <a href="https://linktr.ee/sidesshmore" target="_blank">
                        <li className="contacts">
                            <img src={MyLogo} className="mylogo" alt="" />
                            <span className='details'>Sidessh More</span>
                        </li>
                        </a>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Sidebar