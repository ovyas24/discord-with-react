import React from 'react'
import './css/sidebar_channel.css'

function SidebarChannel({id, channel}) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">#</span>ReactRedux
            </h4>
        </div>
    )
}

export default SidebarChannel
