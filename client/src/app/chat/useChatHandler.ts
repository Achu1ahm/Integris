import { useState, useRef, useCallback } from "react";
import { userMessage, botMessage } from "@app/types/chat";
import { sendMessageToBot } from "@app/services/api/botService";

type TextMessage = userMessage | botMessage;

export const useChatHandler = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<TextMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showChatNamePrompt, setShowChatNamePrompt] = useState<boolean>(false);
  const [isChatNamed, setIsChatNamed] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const processBotResponse = useCallback(async (userPrompt: string) => {
    try {
      setIsLoading(true);

      const response = await sendMessageToBot(userPrompt);

      if (response?.message) {
        const botMessage: botMessage = {
          sender: "bot",
          bot1: response.message.geminiBotResponse,
          bot2: response.message.gptBotResponse,
        };

        setChatHistory((prev) => [...prev, botMessage]);
      } else {
        console.error("Invalid response or missing 'message' property.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChatNameSubmit = async () => {
    setIsChatNamed(true);
    setShowChatNamePrompt(false);
    const firstMessage = chatHistory[chatHistory.length - 1];
    if (firstMessage?.sender === "user") {
      await processBotResponse(firstMessage.prompt);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: userMessage = { sender: "user", prompt: message };
    const currentMessage = message;

    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");

    // If first message and chat not named, show prompt
    if (chatHistory.length === 0 && !isChatNamed) {
      setShowChatNamePrompt(true);
      return;
    }
    await processBotResponse(currentMessage);
  };

  return {
    message,
    setMessage,
    chatHistory,
    isLoading,
    showChatNamePrompt,
    chatContainerRef,
    lastMessageRef,
    handleSendMessage,
    handleChatNameSubmit,
  };
};

export default useChatHandler;
