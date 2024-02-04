import OpenAI from "openai";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4", // Specify the GPT-4 model
        messages: [{ role: "user", content: req.body.prompt }],
        temperature: 0.7, // Adjust based on your needs
        stream: false,
      });

      res.status(200).json(response.choices[0].message.content);
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
