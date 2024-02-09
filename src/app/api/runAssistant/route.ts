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
      const assistantId = data.assistantId;

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
      });

      const runId = run.id;

      return NextResponse.json({ runId });
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
