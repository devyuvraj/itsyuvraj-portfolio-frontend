// ── Simple Logger ─────────────────────────────────────────
const log = {
  info:  (msg: string, data?: any) => console.log(`[INFO]  ${new Date().toISOString()} — ${msg}`, data ? JSON.stringify(data) : ""),
  error: (msg: string, data?: any) => console.error(`[ERROR] ${new Date().toISOString()} — ${msg}`, data ? JSON.stringify(data) : ""),
  warn:  (msg: string, data?: any) => console.warn(`[WARN]  ${new Date().toISOString()} — ${msg}`, data ? JSON.stringify(data) : ""),
};

const handler = async (req: any, res: any) => {
  if (req.method !== "POST") {
    log.warn("Invalid method", { method: req.method });
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages, system } = req.body;
  const userMessage = messages?.[messages.length - 1]?.content;

  log.info("New chat request", {
    userMessage,
    historyLength: messages?.length,
    timestamp:     new Date().toISOString()
  });

  try {
    const apiKey = process.env["GROQ_API_KEY"];

    if (!apiKey) {
      log.error("GROQ_API_KEY is not set!");
      return res.status(500).json({ error: "API key not configured" });
    }

    log.info("Calling Groq API...");

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model:       "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: system },
            ...messages
          ],
          max_tokens:  500,
          temperature: 0.7
        })
      }
    );

    const data = await response.json() as any;

    if (!response.ok) {
      log.error("Groq API failed", {
        status:  response.status,
        message: data?.error?.message
      });
      return res.status(500).json({ error: data?.error?.message || "Groq API error" });
    }

    const reply = data?.choices?.[0]?.message?.content
      || "Please email yuvrajsoni92@gmail.com directly!";

    log.info("Groq response received", {
      replyLength:  reply.length,
      model:        data?.model,
      totalTokens:  data?.usage?.total_tokens,
      promptTokens: data?.usage?.prompt_tokens
    });

    return res.status(200).json({ reply });

  } catch (error: any) {
    log.error("Unhandled exception", { message: error.message, stack: error.stack });
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
};

module.exports = handler;