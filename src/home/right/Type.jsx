import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../Context/useSendMessage.js';

const Type = () => {
  const {sendMessages, loading} = useSendMessage()
  const [message, setMessage] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("Submitting message:", message);
    await sendMessages(message);
    setMessage('')
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-3 h-[7vh] text-center bg-gray-800'>
    <div className='w-[70%] mx-4'>
        <input type="text" placeholder="Type here" value={message} onChange={(e)=> {
          setMessage(e.target.value)
        }} className="border border-gray-600  rounded-xl py-3 px-4 w-full grow outline-none bg-slate-900" />
    </div>
    <button className='text-3xl' type='submit'>
        <IoMdSend/>
    </button>
    </div>
    </form>
    </>
  )
}

export default Type