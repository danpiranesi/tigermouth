import { useRef, useEffect } from 'react';
import TextDisplay, { Chat } from "./TextDisplay";

const TextDisplayList = ({
  messages,
  requestStatus,
  isFirstMessage,
  isSending,
}: {
  messages: Chat[];
  requestStatus: any;
  isFirstMessage: boolean;
  isSending: boolean;
}) => {
  const chatMessages = [...messages];
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const loadingIdx = messages.findIndex(
    (message: Chat) => message.role === "assistant" && message.isLoading
  );

  if (isSending) {
    if (loadingIdx !== -1) {
      chatMessages[loadingIdx].requestStatus = requestStatus;
    } else {
      chatMessages.push({
        role: "assistant",
        isLoading: true,
        requestStatus,
      });
    }
  } else if (loadingIdx !== -1) {
    chatMessages.splice(loadingIdx, 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="flex w-3/4 flex-col justify-end items-center h-screen pb-16 pt-16 bg-primaryBg">
     
      <div ref={containerRef} className=" overflow-y-auto">
        {chatMessages.map((message: any, i: any) => (
          <TextDisplay message={message} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TextDisplayList;
