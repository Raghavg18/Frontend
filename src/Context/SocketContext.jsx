import { createContext, useContext, useEffect, useState } from "react";
import {useAuth} from "./Authprovider.jsx"
import io from "socket.io-client"
import { set } from "react-hook-form";

const socketContext = createContext();
export const useSocketContext = () => {
    return useContext(socketContext);
}

export const SocketProvider = ({children})=>{
    const[socket, setsocket] = useState(null)
    const [onlineusers, setonlineusers] = useState([])
    const {authuser} = useAuth()

    useEffect(()=>{
        if(authuser) {
            const socket = io("http://localhost:5002/",{
                query: {userId: authuser.user.id},
            })
            setsocket(socket)
            socket.on("getOnline", (users)=>{
                setonlineusers(users)
                console.log("Socket disconnected", users)
            })
            return()=> socket.close()
        }else{
            if(socket){
                socket.close()
                setsocket(null)
            }
        }
    },[authuser])
    return(
        <socketContext.Provider value={{socket, onlineusers}}>
            {children}
        </socketContext.Provider>
    )
}