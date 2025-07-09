import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext.jsx'
import useConversation from '../statemanage/userConversation.js'
import sound from '../assets/sound.mp3'

function useGetsocketmessage(){
    const {socket} = useSocketContext()
    const {setMessages} = useConversation()

    useEffect(()=> {
        if (!socket) {
            console.error("Socket is not initialized");
            return;
        }
        socket.on("newMessage", (newMessage) => {
            console.log("New message received via socket:", newMessage);
            const notification = new Audio(sound)
            notification.play()
            setMessages((prev) => [...prev, newMessage])
        })
        return () => {
            socket.off("newMessage")
        }
    },[socket,setMessages])
  return null
}

export default useGetsocketmessage