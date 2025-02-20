import { Router } from "express";
import { sendPromptToBot } from "../controllers/chatController";

const router = Router();

router.post("/bot", sendPromptToBot);

export { router as routes };
