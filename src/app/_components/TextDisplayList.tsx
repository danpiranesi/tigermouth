import { useRef, useEffect, useMemo } from 'react';
import TextDisplay, { Chat } from "./TextDisplay";
import Text from './Text';

const TextDisplayList = ({
  messages,
  isRequestError,
  isSending,
}: {
  messages: Chat[];
  isRequestError: any;
  isSending: boolean;
}) => {
  const chatMessages = useMemo(() => messages, [messages]);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="flex w-full flex-col justify-end items-center h-screen pb-16 pt-16 bg-primaryBg">
     
      <div ref={containerRef} className="overflow-y-auto flex flex-col w-full p-3">
        {chatMessages.map((message: any, i: any) => (
          <TextDisplay message={message} key={i} />
        ))}
        {isSending && (
          <div className="flex items-center">
            <Text size="text-labelS" className="animate-pulse font-bold">
              Prrring...
            </Text>
          </div>
        )}
        {isRequestError && (
          <div className="flex items-center">
            <Text size="text-labelS" className="font-bold text-red-500">
              Error: Please try again
            </Text>
          </div>
        )}

      </div>
    </div>
  );
};

export default TextDisplayList;
