import React, { useState } from 'react'
import userGetallUser from '../../Context/userGetallUser.jsx'
import useConversation from '../../statemanage/userConversation.js'
// import { set } from 'mongoose'
import toast from 'react-hot-toast'

const handleSubmit = (e) => {
  e.preventDefault()
  if(!Search) return
        const conversation = allUsers.find((user)=>{
          return user.fullname.toLowerCase().includes(Search.toLowerCase())
          if(conversation){
            setselectedConversation(conversation)
            setSearch("")
          }else{
            toast.error("User not found")
          }
        })
}
const Search = () => {
  const [Search, setSearch] = useState("")
  const [allUsers] = userGetallUser() 
  const {setselectedConversation} = useConversation()
  return (
    <div className='h-[8vh]'>
      <form onSubmit={handleSubmit}>
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" className='grow outline-none bg-transparent' value={Search} onChange={(e)=> setSearch(e.target.value)}/>
</label>
     </form>
        
    </div>
  )
}

export default Search