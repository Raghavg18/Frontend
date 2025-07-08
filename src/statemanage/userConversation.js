import { create } from 'zustand'

const useConversation = create((set) => ({
  SelectedConversation: null,
  setselectedConversation: (SelectedConversation) => set({ SelectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}))

export default useConversation;