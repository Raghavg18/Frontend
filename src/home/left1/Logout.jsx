import React, {useState} from 'react'
import { CiLogout } from "react-icons/ci";
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const Logout = () => {
  const[loading, setloading] = useState(false)
  const handleLogout = () => {
    setloading(true)
    try {
      const res = axios.post('/api/user/logout')
      localStorage.removeItem('massenger')
      Cookies.remove('jwt')
      setloading(false)
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  }
  return (
    <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
    <div className='p-3 align-bottom'>
        <button>
            <CiLogout className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' onClick={handleLogout}/>
        </button>
    </div>
    
    </div>
  )
}

export default Logout