export const createAssistant = async (
  assistantName: string,
  assistantModel: string,
  assistantDescription: string
) => {
  const response = await fetch("/api/createAssistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      assistantName,
      assistantModel,
      assistantDescription,
    }),
  });
  if (!response.ok) {
    console.error("Failed to create assistant");
    throw new Error("Failed to create assistant");
  }
  console.log("Assistant created successfully");
  return await response.json();
};

// Creates a thread
export const createThread = async (inputmessage: string) => {
  console.log("Creating thread...");
  const response = await fetch("/api/createThread", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputmessage }),
  });
  if (!response.ok) {
    console.error("Failed to create thread");
    throw new Error("Failed to create thread");
  }
  console.log("Thread created successfully");
  return await response.json();
};

// Runs an assistant
export const runAssistant = async (assistantId: string, threadId: string) => {
  const response = await fetch("/api/runAssistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ assistantId, threadId }),
  });
  if (!response.ok) {
    console.error("Failed to run assistant");
    throw new Error("Failed to run assistant");
  }
  const data = await response.json();
  console.log("Assistant run successfully. Run ID:", data.runId);
  return data;
};

// Checks the status of a run
export const checkRunStatus = async (threadId: string, runId: string) => {
  console.log("Checking run status...");
  const response = await fetch("/api/checkRunStatus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ threadId, runId }),
  });
  console.log(response);

  if (!response.ok) {
    console.error("Failed to check run status");
    throw new Error("Failed to check run status");
  }
  console.log("Run status checked successfully");
  return await response.json();
};

// Lists messages
export const listMessages = async (threadId: string): Promise<any> => {
  console.log("Listing messages...");
  const response = await fetch("/api/listMessages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ threadId }),
  });
  if (!response.ok) {
    console.error(
      `Error fetching messages: ${response.status} ${response.statusText}`
    );
    throw new Error(
      `Failed to list messages: ${response.status} ${response.statusText}`
    );
  }
  const jsonResponse = await response.json();
  console.log("Messages listed successfully");
  return jsonResponse;
};

export interface AddMessageRequest {
    input: string;
    threadId: string;
}
// Adds a message
export const addMessage = async (newMessage: AddMessageRequest) => {
  console.log("Adding message...");
  const response = await fetch("/api/addMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: newMessage.input, threadId: newMessage.threadId}),
  });
  console.log(response);
  if (!response.ok) {
    console.error("Failed to add message");
    throw new Error("Failed to add message");
  }
  console.log("Message added successfully");
  return await response.json();
};
