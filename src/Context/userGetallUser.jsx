import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cookie from 'js-cookie'

const userGetallUser = () => {
  const [allUsers, setAllUsers] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    const getusers = async () => {
      setLoading(true)
      try {
        const token = cookie.get('jwt')
        console.log(token)
        const response = await axios.get("http://localhost:5002/api/user/getUserProfile", {
          withCredentials: true ,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        setAllUsers(response.data)
        setLoading(false)
      } catch (error) {
        console.log("Error in userGetallUsers: ", error)
      } 
    }

    getusers()
  }, [])

  return [allUsers, loading]
}

export default userGetallUser
