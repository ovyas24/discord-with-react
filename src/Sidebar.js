import React from 'react'
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

function Sidebar() {
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
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelList">
                    <SidebarChannel />
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
                    src="https://lh3.googleusercontent.com/6ZAWaS2F3EHWv8pg_5FQzPVP6esDGQ0NkIpuQDacdC1MDyaTK6zI1p3k7P23B5EAlAw-xTXwHGVpKneqwFlXXllKAJhXa2fff5QKUv_Epagz_9Nzuau_tgAHUp82sH_OUmbrcFP7RLvIPko-ogZ0zy5q5lzx_cfcQ-dz3_HL1p1UW2KE-vc7EPktQ8oGWwqemfCIHL0HaWgbCG8Mbw9wVjI5p24r_uJvquQ88CIN5Gj98PntynLFv0Rby3vbSqohnpMjrITk1W0R58eT7OXInG4uRNyiiioHOP-7bRTXVyXa0Z0n-2MLvSY5CGL0j60zV4MP1WhgCGzOHPcnJhL18YXNPgL6qdiEb2p3zcNN1DUv9JWhteSRfgD_kMT7J7r5BVzAl5Qa7kKtYn0V8bMUR1osHshTnqtILcsXEzlMoke5Or9kQP1s58D5axzJbe2-6zTXGfSlUnVUaWsYSU145gz_ugr0Cc3gOXbypTvKzr6kFHDHR4ZOHeG9LwHmZ1x6H1RgGAu7QpM6JpnzLilozwuA2zk5jqcxNDKUqckQPtOJyF3bnF93hJy02xjKzWdd8QOVByvGJ4QNzU66IOSOIEHuIa0tdOueKtvIjsPFDDIUhIPjOgURXMADv3Hbn0A-EdIshOg4vyLhzUChKhzqZvVIjrXm1aE_6bk7xggR6Kqd_GSGOp1rLfumeIJYameG4pLREjMdtGccps3PHYVt4m9J=w680-h906-no?authuser=0"
                />
                <div className="sidebar__profileInfo">
                    <h3>@the.om.vyas</h3>
                    <p>This is my id</p>
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