import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../Context/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
  console.log(useAuth()[0])
  const { setauthuser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post('https://backend-chatapp-dkmp.onrender.com/user/login', userinfo)
      .then((response) => {
        if (response.status === 200 && response.data) {
          localStorage.setItem('massenger', JSON.stringify(response.data));
          setauthuser(response.data);
          toast.success("Logged in successfully");
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          
          toast.error("Error: " + error.response.data.message || error.response.data.error);
        } 
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white px-6 py-3 rounded-md space-y-3 w-96"
      >
        <h1 className="font-bold text-blue-600 text-2xl items-center">Messanger</h1>
        <h2 className="text-2xl items-center ">
          Login with your <span className="font-semibold text-blue-600">Account</span>
        </h2>

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            {...register("email", { required: true })}
            type="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        {errors.email && <span className="text-red-500 text-sm">**This field is required**</span>}

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            {...register("password", { required: true })}
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        {errors.password && <span className="text-red-500 text-sm">**This field is required**</span>}

        <div className="flex justify-between">
          <input
            type="submit"
            value="Login"
            className="text-white bg-blue-600 justify-center w-full rounded-lg pt-2 cursor-pointer"
          />
        </div>
        <p>
          Don't Have An Account?{" "}
          <Link
            to={'/signup'}
            className="text-blue-600 underline cursor-pointer ml-1"
            onClick={() => navigate('/signup')}
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
