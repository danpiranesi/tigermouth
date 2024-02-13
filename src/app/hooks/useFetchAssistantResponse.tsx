import { useQuery } from "@tanstack/react-query";
import { listMessages, checkRunStatus } from "../client/api";
import { useEffect } from "react";

interface statusRes {
  runStatus: string;
}

const useFetchAssistantResponse = (
  threadId: string,
  runId: string,
  updateStatusMessage: any,
  updateChat: any
) => {
  const AssistantResponseHandler = async () => {
    try {
      updateStatusMessage("fetching response...");
      let status: string;
      let retries = 0;
      let maxRetries = 30;
      const statusRes: statusRes = await checkRunStatus(threadId, runId);
      status = statusRes.runStatus;
      while (status !== "completed" && retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { runStatus } = await checkRunStatus(threadId, runId);
        status = runStatus;
        retries++;
      }

      if (status === "completed") {
        const response = await listMessages(threadId);
        updateStatusMessage("Successfully fetched response!");
        updateChat("assistant", response.messages);
        return response.messages;
      } else if (
        status === "cancelled" ||
        status === "cancelling" ||
        status === "failed" ||
        status === "expired"
      ) {
        throw new Error(status);
      }
    } catch (error) {
      updateStatusMessage("Error fetching response");
    }
  };
  const {
    data: messages,
    isFetched: isAssistantResponseFetched,
    isFetching: isAssistantResponseFetching,
    refetch: fetchAssistantResponse,
    isError: isAssistantResponseError,
  } = useQuery({
    queryKey: ["assistantResponse", threadId],
    queryFn: async () => AssistantResponseHandler(),
    enabled: false,
  });


  return {
    messages,
    fetchAssistantResponse,
    isAssistantResponseFetched,
    isAssistantResponseFetching,
    isAssistantResponseError,
  };
};

export default useFetchAssistantResponse;
