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

  const loadingIdx = messages.findIndex(
    (message: Chat) => message.role === "assistant" && message.isLoading
  );

  // if (isFirstMessage) {
  //   chatMessages.push({
  //     role: "assistant",
  //     isLoading: true,
  //     requestStatus: "Loading...",
  //   });
  // }

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

  return (
    <div className="flex flex-col w-3/4 h-full justify-end">
      <div className="overflow-y-scroll">
      {chatMessages.map((message: any, i: any) => (
        <TextDisplay message={message} key={i} />
      ))}
      </div>
    </div>
  );
};

export default TextDisplayList;
