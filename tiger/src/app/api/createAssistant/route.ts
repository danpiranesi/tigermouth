import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    try {
      const assistant = await openai.beta.assistants.create({
        model: "gpt-4", // Specify the GPT-4 model
        instructions:
          "You are an assistant called TigerMouth, designed to help students at Colorado College quickly get answers to any questions regarding their education that they may have. Collect all information from www.coloradocollege.edu",
        name: "TigerMouth",
        tools: [
          {
            type: "function",
            function: {
              name: "getInfoAboutColoradoCollege",
              description:
                "Retrieves detailed information about Colorado College from the official website (coloradocollege.edu) based on a specified query. This function aims to assist students in learning more about the college, including academic programs, admissions, campus life, and more.",
              parameters: {
                type: "object",
                properties: {
                  query: {
                    type: "string",
                    description:
                      "The query to search for on coloradocollege.edu. This can include keywords related to academic programs, admissions information, campus activities, faculty details, etc.",
                  },
                  category: {
                    type: "string",
                    description:
                      "Optional. Narrows down the search to a specific category (e.g., 'Academics', 'Admissions', 'Student Life'). If not specified, the search will cover all categories.",
                    enum: [
                      "Academics",
                      "Admissions",
                      "Student Life",
                      "Athletics",
                      "Alumni",
                      "All",
                    ],
                    default: "All",
                  },
                  limit: {
                    type: "integer",
                    description:
                      "Optional. Limits the number of results returned. If not specified, a default value will be used.",
                    default: 10,
                  },
                },
                required: ["query"],
              },
            },
          },
        ],
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
