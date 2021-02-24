import React from 'react';
import Input from '../input/Input';
import {BiSend, FiSearch,IoIosNotificationsOutline} from 'react-icons/all';
import Avatar from '../avatar/Avatar';

const Header = ({pageHeader}) => {
    return (
        <header className="header">
           <div className="page-header">
               <h1>{pageHeader}</h1>
           </div>
           <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
           <div className="action-container">
             <Input placeHolder="Search..." icon={<FiSearch/>} classes={{inputIconContainer:"hover-action"}} />
             <BiSend className="action-icon" />
             <IoIosNotificationsOutline className="action-icon" />
           </div>
           <div className="profile-container">
               <label>Alok Chaurasia</label>
               <Avatar />
           </div>
           </div>
        </header>
    )
}

export default Header;