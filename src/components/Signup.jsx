import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../Context/Authprovider'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Signup() {
  const {authuser, setauthuser} = useAuth()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch('password', "")
  const confirmPassword = watch('confirmPassword', "")

  const validatepasswordmatch = (value) => {
    return value === password || "Password and conform password do not match"
  }
  const onSubmit = async (data) => {
    const userinfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
    }
    await axios
    .post('/api/user/signup', userinfo)
    .then((response)=>{
        console.log(response.data)
        if(response.data){
            toast.success("User created successfully")
        }
        localStorage.setItem('massenger', JSON.stringify(response.data))
        setauthuser(response.data)
    }).catch((error)=>{
        if(error.response){
            toast.error("Error:" + error.response.data.error)
        }
    })
  }
  return (
   <div className="flex h-screen items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="border border-white px-6 py-3 rounded-md space-y-3 w-96">
            <h1 className='font-bold text-blue-600 text-2xl items-center'>Messanger</h1>
          <h2 className='text-2xl items-center '>Create a new <span className='font-semibold text-blue-600'>Account</span></h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              {...register("fullname", { required: true })}
              type="text"
              className="grow"
              placeholder="Fullname"
            />
            {errors.fullname && <span className='text-red-500 text-sm'>**This field is required**</span>}
          </label>
          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
                {...register("email", { required: true })}
              type="email"
              className="grow"
              placeholder="Email"
            />
            {errors.email && <span className='text-red-500 text-sm'>**This field is required**</span>}
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
                {...register("password", { required: true })}
              type="password"
              className="grow"
              placeholder="password"
            />
            {errors.password && <span className='text-red-500 text-sm'>**This field is required**</span>}
          </label>

          {/*Confirm Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
                {...register("confirmPassword", { required: true,
                    validate: validatepasswordmatch,
                 })}
              type="password"
              className="grow"
              placeholder="confirmPassword"
            />
          </label>
            {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
          <div className='flex justify-between'>
          <input type='submit' value="Signup" className='text-white bg-blue-600 justify-center w-full rounded-lg pt-2 cursor-pointer'/>
          </div>
          <p>Already Have An Account? <Link to={"/login"} className='text-blue-600 underline cursor-pointer ml-1'>Login</Link></p>
          </form>
          </div>
  )
}

