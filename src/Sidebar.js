import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './Components/Sidebar/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import { InfoOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser)
    const [channels,setChannels] = useState([])

    useEffect(()=>{
        db.collection("channels").onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => {
                console.log(doc);
                return {
                    id:doc.id,
                    channel:doc.data()
                }
        }))
        })
    },[])


    const handleAddChannel = () => {
        const channelName = prompt("Enter Channel Name")

        if(channelName) {
            db.collection("channels").add({
                channelName: channelName,
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                Ovyas24
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelList">
                    {
                        channels.map(({id, channel}) => {
                            return <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                        })
                    }
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />

                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlined />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar 
                    onClick={() => auth.signOut()}
                    src={user.photo} 
                />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar