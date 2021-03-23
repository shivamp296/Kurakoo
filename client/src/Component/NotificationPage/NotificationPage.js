import React from 'react';
import './NotificationPage.css';
import Navbar from '../navbar/Navbar';
import Sidebar from './sideBar';
import Notification from './NotficationComp';
import Logo from '../kurakoo-logo.png';
import Image from './images/Vector.png';
import Image1 from './images/Vector1.png';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';

function getTime(){
    var hours = new Date().getHours();
    var time;
    if (hours >= 5 && hours < 12){
        time = "Morning";
    }
    else if (hours >= 12 && hours < 18){
        time = "Afternoon";
    }
    else{
        time = "Evening";
    }
    return (time);
}

function NotificationPage(){
    return (
        <div>
            <Navbar></Navbar>
            <br/><br/><br/><br/><br/><br/>
            <div id = "notification-container">
                <div className ="greet-msg">
                    <div className ="img-div">
                        <img className = "img" src = { Image } alt = "alt" />
                    </div>
                    <div className = "content-div">
                        <div className = "content-head">
                            <h1>👋 Good { getTime() }, {currentuser.name} </h1>
                        </div>
                        <br></br>
                        <div>
                            <p className = "content-body">
                                You have {currentuser.msgCount} new messages, 1 new follower and you are accepted as a member at The Heritage
                            </p>
                        </div>
                    </div>
                </div>
                <div className = "notification-body">
                    
                    <div className = "notifications-container">
                        <ul className = "notification-list">
                            {
                                data.map((item, index) =>{
                                    return (
                                        <li>
                                            <Notification image = {item.image} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <Sidebar />

                </div>
            </div>
        </div>
    );
}

export default NotificationPage;

const currentuser = {
    name: "Purnima",
    msgCount: 3,
    followersCount: 1
};

const data = [
    {
        username: "Emma Watson",
        timeStamp: "17:45",
        type: "message",
        read: false,
        image: Image1,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
];