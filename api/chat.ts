export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { messages, system } = req.body;

  try {
    // Fix roles — Gemini needs alternating user/model
    const contents = messages
      .filter((m: any) => m.content?.trim())
      .map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

    const apiKey = process.env["GEMINI_API_KEY"];

    // ← catch missing key early
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set!");
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents
        })
      }
    );

    const data = await response.json() as any;

    // ← log full response so you can debug in Vercel logs
    console.log("Gemini response:", JSON.stringify(data));

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return res.status(500).json({ error: data?.error?.message || "Gemini API error" });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Please email yuvrajsoni92@gmail.com directly!";

    return res.status(200).json({ reply });

  } catch (error: any) {
    console.error("Handler error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}