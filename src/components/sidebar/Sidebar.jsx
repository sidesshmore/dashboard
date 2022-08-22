import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon' />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <PersonOutlineIcon className='sidebarIcon' />
                            Users
                        </li>

                        <li className="sidebarListItem">
                            <StoreIcon className='sidebarIcon' />
                            Products
                        </li>

                        <li className="sidebarListItem">
                            <CurrencyRupeeIcon className='sidebarIcon' />
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <AssessmentIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutlineIcon className='sidebarIcon' />
                            Mail
                        </li>

                        <li className="sidebarListItem">
                            <DynamicFeedIcon className='sidebarIcon' />
                            Feedback
                        </li>

                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkOutlineIcon className='sidebarIcon' />
                            Manage
                        </li>

                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <ReportIcon className='sidebarIcon' />
                            Report
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default Sidebar