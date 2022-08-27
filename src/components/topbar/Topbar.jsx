import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';


function Topbar() {
  
    return (
        <body>
            
        
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">R-Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <LanguageIcon />
                    </div>

                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>


                    <img src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
        </body>
    )
}

export default Topbar