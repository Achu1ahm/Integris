import Anthropic from "@anthropic-ai/sdk";

const messageToClaude = async (message: string): Promise<string> => {
  const anthropic = new Anthropic();
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1000,
    temperature: 0,
    system: "Respond only with short poems.",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return typeof msg.content[0] === 'object' && 'text' in msg.content[0]
    ? msg.content[0].text
    : '';
};

export default messageToClaude;