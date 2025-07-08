import React, { useState, useEffect } from 'react';
import useConversation from '../statemanage/userConversation.js';
import axios from 'axios';

function useGetMessage() {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, SelectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setloading(true);

      if (SelectedConversation && SelectedConversation._id) {
        try {
          const response = await axios.get(`/api/message/get/${SelectedConversation._id}`,{withCredentials: true});
          setMessages(response.data.message)
          console.log("Set messages:", response.data.message)
        } catch (error) {
          console.error("Error fetching messages:", error);
        } finally {
          setloading(false);
        }
      }
    };

    getMessages();
  }, [SelectedConversation, setMessages]);

  return { loading, messages };
}

export default useGetMessage;
