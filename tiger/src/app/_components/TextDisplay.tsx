import Text from "./Text";

export interface Chat {
  isLoading: boolean;
  requestStatus: string;
  role: string;
  content?: string;
}

const TextDisplay = ({ message }: { message: Chat }) => {
  //const assistantMessageClass = "bg-secondaryBg";
  //const userMessageClass = "bg-tertiaryBg";
  const sender = message.role === "assistant" ? "TigerMouth" : "User";
  return (    <div className="message h-auto rounded-m">
  <h3 className="font-bold">{sender}</h3>
  <Text>{message.requestStatus}</Text>
  <Text>{message.content}</Text>
</div>
);
};

export default TextDisplay;
