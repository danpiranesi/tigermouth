import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: any) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    try {
      const data = await req.json();
      const threadId = data.threadId;

      const messages = await openai.beta.threads.messages.list(threadId);

      const assistantMessage = messages.data.find(
        (message) => message.role === "assistant"
      );

      if (!assistantMessage) {
        return NextResponse.json({ error: "No assistant message found" });
      }

      const assistantMessageContent = assistantMessage.content.at(0);
      if (!assistantMessageContent) {
        return NextResponse.json({
          error: "No assistant message content found",
        });
      }

      if (assistantMessageContent.type !== "text") {
        return NextResponse.json({
          error:
            "Assistant message is not text, only text supported in this demo",
        });
      }
      // Return the retrieved messages as a JSON response
      return NextResponse.json({
        messages: assistantMessageContent.text.value,
      });
    } catch (error) {
      console.error("Error querying OpenAI:", error);
      res.status(500).json({ message: "Error querying" });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
