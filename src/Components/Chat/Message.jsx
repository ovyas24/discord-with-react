import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/Message.css'
function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    @the.ome.vyas
                    <span className="message__timestamp">
                        time_stamp
                    </span>
                </h4>
                <p>
                    Message
                </p>
            </div>
        </div>
    )
}
export default Message
