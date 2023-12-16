import axios from "axios";

const OPENAI_API_KEY = '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';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { input } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: input,
          max_tokens: 50,
          model: "gpt-3.5-turbo",
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const output =
        response.data.choices[0]?.message?.content?.trim() || "Sorry, I do not understand.";
      res.status(200).json({ output });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}