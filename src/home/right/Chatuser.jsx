import React from 'react'
import useConversation from '../../statemanage/userConversation.js'
import { useSocketContext } from '../../Context/SocketContext.jsx'

const Chatuser = () => {
  const {SelectedConversation} = useConversation()
  console.log(SelectedConversation)
  const { onlineusers} = useSocketContext()
  const getonlineuserstatus = (userId) => {
    return onlineusers.includes(userId)?"online":"offline";
  }
  return (
    <div className=' p-5 flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
        <div>
             {/* <div className={`avatar ${isonline ? 'online': 'offline'}`}> */}
             <div className={`avatar`}>
     <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
     <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
    </div>x
        </div>
        <div>
            <h1 className='text-xl'>{SelectedConversation?.fullname}</h1>
            <span className='text-sm'>{getonlineuserstatus(SelectedConversation._id)}</span>
        </div>
    </div>
  )
}

export default Chatuser