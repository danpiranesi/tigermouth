"use client";
import UserRequestForm from "./_components/UserRequestForm";
import TextDisplayList from "./_components/TextDisplayList";
import useUpdateChat from "./hooks/useUpdateChat";
import useSendMessage from "./hooks/useSendMessage";
import useFetchAssistantResponse from "./hooks/useFetchAssistantResponse";
import { useEffect, useState } from "react";
import useThread from "./hooks/useInitializeAssistant";
import Header from "./_components/Header";

export default function Home() {
  const { chat, updateChat } = useUpdateChat();
  const [runId, setRunId] = useState("");
  const updateRunId = (runId: string) => {
    setRunId(runId);
  };
  const [statusMessage, setStatusMessage] = useState("");
  const updateStatusMessage = (message: string) => {
    setStatusMessage(message);
  };

  const { initializeThread, threadId, threadStatus } = useThread(updateRunId);
  const { sendChatMessage, status } = useSendMessage(
    threadId,
    updateRunId,
    updateStatusMessage
  );

  const { fetchAssistantResponse } = useFetchAssistantResponse(
    threadId,
    runId,
    updateStatusMessage,
    updateChat
  );

  useEffect(() => {
    if (runId) {
      fetchAssistantResponse();
    }
  }, [runId]);

  useEffect(() => {
    if (chat) {
      console.log("chat", chat);
    }
  }, [chat]);

  return (
    <main className="flex flex-col sm:w-3/4 w-full items-center max-w-7xl m-auto">
      <TextDisplayList
        messages={chat}
        requestStatus={statusMessage}
        isFirstMessage={chat.length === 0}
        isSending={status === "pending"}
      />
      <UserRequestForm
        sendChatMessage={sendChatMessage}
        initializeThread={initializeThread}
        updateChat={updateChat}
        threadId={threadId}
      />
    </main>
  );
}
