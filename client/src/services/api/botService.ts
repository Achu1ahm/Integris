import Services from "./apiService";

const sendMessageToBot = async (msg: string) => {
  const response = await Services.post("/bot", { prompt: msg });
  return response;
};

export { sendMessageToBot };
