import { useState } from "react";
import { Chat } from "../_components/TextDisplay";

const useUpdateChat = () => {
  const [chat, setChat] = useState<Chat[]>([]);

  const updateChat = (role: string, content: string) => {
    setChat((prevChat) => {
      return [...prevChat, { role, content, isLoading: false, requestStatus: ""}];
    });
  };
  return {
    updateChat,
    chat,
  };
};

export default useUpdateChat;
