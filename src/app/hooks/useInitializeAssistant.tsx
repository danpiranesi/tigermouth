import { useMutation } from "@tanstack/react-query";
import { createThread, runAssistant } from "../client/api";
import { useState } from "react";

const useThread = (updateRunId:any) => {
    const [threadId, setThreadId] = useState<string>("");
  const {
    mutate: initializeThread,
    status: threadStatus,
  } = useMutation({
    mutationFn: createThread,
    onMutate: async (initialMessage) => {
      // ...
    },
    onError: (error, initialMessage, rollback) => {
      // ...
    },
    onSuccess: async (threadId) => {
        setThreadId(threadId.threadId);
        const runId = await runAssistant(process.env.NEXT_PUBLIC_DEFAULT_ASSISTANT_ID!, threadId.threadId);
        updateRunId(runId.runId);

    },
  });

  return {
    initializeThread,
    threadId,
    threadStatus,
  };
};

export default useThread;
