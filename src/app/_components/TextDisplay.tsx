import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Text from "./Text";

export interface Chat {
  isLoading: boolean;
  requestStatus: string;
  role: string;
  content?: string;
}

const TextDisplay = ({ message }: { message: Chat }) => {
  const sender = message.role === "assistant" ? "TigerMouth" : "User";
  return (
    <div className="h-auto rounded-m flex flex-col w-full pb-1">
      <Text size="text-labelS" className="font-bold">
        {sender}
      </Text>
      {/* <h3>{message.requestStatus}</h3> */}
      {sender === "TigerMouth" ? (
        <Markdown
          className="prose mt-1 break-words prose-p:leading-loose"
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
          {message.content}
        </Markdown>
      ) : (
        <Text size="text-textL">{message.content}</Text>
      )}
    </div>
  );
};

export default TextDisplay;
