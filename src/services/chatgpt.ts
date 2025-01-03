import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const modelName = process.env.REACT_APP_MODEL_TWO;

export const sendMessageToChatGPT = async (message: string) => {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
  const data = {
    model: modelName,
    messages: [{ role: "user", content: message }],
  };

  try {
    const response = await axios.post(endpoint, data, { headers });

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error sending message to ChatGPT:", error);
    throw error;
  }
};
