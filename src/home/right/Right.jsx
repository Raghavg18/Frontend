// import React from 'react'
// import Chatuser from './Chatuser'
// import Message from './Message'
// import Type from './Type'

// const right = () => {
//   return (
//     <div className='w-[75%] bg-slate-950 text-white'>
//     <Chatuser></Chatuser>
//     <div style={{maxHeight: 'calc(84vh - 7vh)'}} className='flex-raghav overflow-y-auto'>
//     <Message></Message>
//     </div>
//     <Type></Type>
//     </div>
//   )
// }

// export default right

import React, { useEffect } from "react";
import Chatuser from "./Chatuser.jsx";
import Message from './Message.jsx'
import Type from "./Type.jsx";
import useConversation from '../../statemanage/userConversation.js'
import { useAuth } from "../../Context/Authprovider.jsx";
// import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { SelectedConversation, setselectedConversation } = useConversation();
  useEffect(() => {
    return setselectedConversation(null);
  }, [setselectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!SelectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Message/>
            </div>
            <Type/>
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const authUser = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          {/* <CiMenuFries className="text-white text-xl" /> */}
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser?.user?.fullname || authUser?.user?.email || "Guest"}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};