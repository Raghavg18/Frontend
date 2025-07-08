import React from 'react'
import useConversation from '../../statemanage/userConversation.js'
import { useSocketContext } from '../../Context/SocketContext.jsx'

function User({user}){
  const{SelectedConversation ,setselectedConversation} = useConversation()
  const isSelected = SelectedConversation?._id=== user._id
  const {socket, onlineusers} = useSocketContext()
  const isonline = onlineusers.includes(user._id)
  return (
    <div className={`hover:bg-slate-700 duration-300 ${isSelected ? 'bg-slate-600':""}`} onClick={() => setselectedConversation(user)}>
         <div className='flex pace-x-4 px-6 py-7 gap-4 hover:bg-slate-600 duration-300'>
        <div className={`avatar ${isonline ? 'online': 'offline'}`}>
     <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
     <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
    </div>
    <div>
        <h1>{user.fullname}</h1>
        <span>{user.email}</span>
    </div>
    </div>
    </div>
  )
}

export default User