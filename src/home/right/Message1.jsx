import React from 'react';

const Message1 = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem('massenger'));

  // console.log("message.sender:", message.sender);
  // console.log("authUser.user.id:", authUser.user.id);
  // console.log("Equality check:", message.sender === authUser.user.id);

  
  const itsme = message.sender === authUser.user.id;
  console.log(itsme)
  const chatname = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-500" : "bg-gray-500";
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <div className='p-4'>
        <div className={`chat ${chatname}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>{message.messages}</div>
          <div>{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Message1;
