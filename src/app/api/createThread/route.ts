

import { NextResponse } from "next/server";
import OpenAI from "openai";

export const revalidate = 1200;

export async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    try {
      const data = await req.json();
      const inputMessage = data.inputmessage;
      const thread = await openai.beta.threads.create({
        messages: [
          {
            role: "user",
            content: inputMessage,
          },
        ],
      });

      const threadId = thread.id;

      return NextResponse.json({ threadId });
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
