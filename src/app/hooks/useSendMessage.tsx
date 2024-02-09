import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addMessage, runAssistant } from "../client/api";

const useSendMessage = (threadId: string, updateRunId: any, updateStatusMessage: any) => {

  const { mutate: sendChatMessage, status } = useMutation({
    mutationFn: addMessage,
    onMutate: async (newMessage) => {
      updateStatusMessage("Sending message...");
    },
    onError: (error, newMessage, rollback) => {
      updateStatusMessage("Error sending message");
    },
    onSuccess: async () => {
      updateStatusMessage("Message sent");
      const runId = await runAssistant(process.env.NEXT_PUBLIC_DEFAULT_ASSISTANT_ID!, threadId);
      updateRunId(runId.runId);
    },
  });

  return {
    sendChatMessage,
    status,
  };
};

export default useSendMessage;
