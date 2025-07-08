import React, {useEffect, useRef } from 'react'
import Message1 from './Message1.jsx'
import useGetMessage from '../../Context/useGetMessage.js'
import Loading from '../../Components/Loading.jsx'
import useGetsocketmessage from '../../Context/useGetsocketmessage.jsx'

const Message = () => {
  const{loading, messages} = useGetMessage()
  useGetsocketmessage()
  console.log(messages);
  const lastmessageRef = useRef()
  useEffect(()=> {
    setTimeout(()=>{
      if(lastmessageRef.current){
        lastmessageRef.current.scrollIntoView({behavior: 'smooth'})
      }
    },100)
  },[messages])

return (
  <div>
    {loading ? (<Loading/>):(messages.length > 0 && messages.map((message)=>(
      <div key={message._id} ref={lastmessageRef}><Message1 message={message} /></div>
    //  return  <Message1 key={message._id} message={message} />
    )))}

    <div className='' style={{minHeight: 'calc(84vh - 7vh)'}}>
        {!loading && messages.length === 0 && <div><p className='text-center mt-[20%] font-bold'>Say hi!</p></div>}
        
    </div>
    </div>
)
}
export default Message