import React from 'react'
import User from './User'
import userGetallUser from '../../Context/userGetallUser'

const Users = () => {
  const [allUsers, loading] = userGetallUser()
  console.log(allUsers)
  return (
   <div style={{maxHeight: 'calc(84vh - 1vh)'}} className='flex-raghav overflow-y-auto'>
    {allUsers.map((user)=>{
      return(
        <User key={user._id} user={user} />
      )
    })}
    
   </div>
  )
}

export default Users