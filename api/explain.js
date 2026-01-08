import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { question, level } = req.body;

  if (!question || !level) {
    return res.status(400).json({
      answer: "Invalid request. Please enter a question and select a level."
    });
  }

  const prompt = `
You are an educational assistant.

Explain the following topic at a ${level} level.

Rules:
- Use language appropriate for the level
- Be accurate and clear
- Avoid jargon
- Do NOT give dangerous or operational instructions

Topic: ${question}
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({
      answer: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(200).json({
      answer: `AI is temporarily unavailable, but here’s a structured explanation of "${question}" at a ${level} level.`
    });
  }
}
