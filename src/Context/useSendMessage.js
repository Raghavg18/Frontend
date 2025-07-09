import React, { useState } from 'react'
import useConversation from '../statemanage/userConversation.js';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, SelectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setloading(true);

    if (SelectedConversation && SelectedConversation._id) {
      try {
        const response = await axios.post(
          `http://localhost:5002/api/message/send/${SelectedConversation._id}`,
          { messages: message },
          { withCredentials: true }
        );
        console.log("Set messages:", response.data.message);
        setMessages([...messages,response.data.newMessage]);
        // setMessages(response.data.message);
      } catch (error) {
        console.error("Error sending messages:", error);
      } finally {
        setloading(false);
      }
    }
  };

  return { sendMessages, loading };
}

export default useSendMessage;
