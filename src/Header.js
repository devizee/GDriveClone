import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <img src="https://icons.iconarchive.com/icons/marcus-roberto/google-play/96/Google-Drive-icon.png" alt=''></img>
                <span>N-Cloud</span>
            </div>

            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder=" Rechercher dans N-Cloud"/>
                <FormatAlignCenterIcon/>
            </div>

            <div className="header_icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <span>
                    <AppsIcon/>
                    <Avatar/>
                </span>
            </div>
        </div>
    )
}

export default Header