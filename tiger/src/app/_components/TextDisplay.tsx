import Text from "./Text";

export interface Chat {
  isLoading: boolean;
  requestStatus: string;
  role: string;
  content?: string;
}

const TextDisplay = ({ message }: { message: Chat }) => {
  const assistantMessageClass = "bg-secondaryBg";
  const userMessageClass = "bg-tertiaryBg";
  return (
    <div
      className={`w-full min-h-24 rounded-m ${
        message.role === "assistant" ? assistantMessageClass : userMessageClass
      }`}
    >
      <Text>{message.requestStatus}</Text>
      <Text>{message.content}</Text>
    </div>
  );
};

export default TextDisplay;
