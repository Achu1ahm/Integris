import { Request, Response } from "express";
// import prisma from "../models/prismaClient";
import { sendMessageToChatGPT } from "../services/chatgpt";
import chatwithGemini from "../services/gemini";

const sendPromptToBot = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const gptBotResponse = await sendMessageToChatGPT();
    const geminiBotResponse = await chatwithGemini();
    res.status(200).json({ message: { gptBotResponse, geminiBotResponse } });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

// const fetchChats = async (req: Request, res: Response) => {
//   try {
//     const chats = await prisma.chat.findMany();
//     res.status(200).json({ chats });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: "failed retrieving chats" });
//   }
// };

// const postChat = async (req: Request, res: Response) => {
//   // const {chat} = req.body;
//   try {
//     // const chat = await prisma.chat.create({
//     //     data:{chat}
//     // })
//   } catch (error) {}
// };

export { sendPromptToBot };
