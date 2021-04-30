import React, { useState, useEffect } from 'react'
import './Chat.css'
import ChatHeader from './Components/Chat/ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Components/Chat/Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase'

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(async () => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                })
        }

    }, [channelId])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await db.collection("channels")
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user
            })

        setInput("")
    }

    return (
        <div className="chat">
            <ChatHeader key={channelId} id={channelId} channelName={channelName} />
            <div className="chat__messages">
                {
                    messages.map((msg) => {
                        return <Message 
                        key={msg.id} 
                        message={msg.message} 
                        timestamp={msg.timestamp}
                        user={msg.user}
                        />
                    })
                }
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input disabled={!channelId} type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder={`message #${channelName}`} />
                    <button onClick={e => handleSubmit(e)} className="chat__inputButton" type="submit">
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
