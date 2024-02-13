import { NextResponse } from "next/server";
import OpenAI from "openai";
import * as fs from 'fs'

export async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const file = await openai.files.create({
      file: fs.createReadStream("/Users/danschmidt/Documents/CC/Design Workshop/Test.pdf"),
      purpose: "assistants",
    });

    console.log("***********FILE_ID:", file.id)

    try {
      const assistant = await openai.beta.assistants.create({
        model: "gpt-4-turbo-preview",
        instructions:
          "You are an assistant called TigerMouth, designed to help students at Colorado College quickly get answers to any questions regarding their education that they may have. Collect all information from www.coloradocollege.edu",
        name: "TigerMouthV2",
        tools: [{"type": "code_interpreter"}],
        file_ids: [file.id]
      });

      const assistantId = assistant.id;
      return NextResponse.json({ assistantId });
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
