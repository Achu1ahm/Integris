import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Grid, Box } from "@mui/material";
import { sendMessageToChatGPT } from '../../services/bot/chatgpt';
import chatwithGemini from '../../services/bot/gemini';
import MarkdownRenderer from '../../components/markdownRenderer';
import LoadingButton from '../../components/loadingButton';
import "../../styles";

interface userMessage {
    sender: 'user';
    prompt: string;
}

interface botMessage {
    sender: 'bot';
    bot1: string;
    bot2: string;
}

type TextMessage = userMessage | botMessage;

const modelOne = process.env.REACT_APP_MODEL_ONE as string;
const modelTwo = process.env.REACT_APP_MODEL_TWO as string;

const Chat = () => {
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<TextMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMessage: userMessage = { sender: 'user', prompt: message };
        setChatHistory(prevHistory => [...prevHistory, userMessage]);

        try {
            setIsLoading(true);
            const gptBotResponse = await sendMessageToChatGPT(message);
            const geminiBotResponse = await chatwithGemini(message);
            setIsLoading(false);

            const botMessage: botMessage = { sender: "bot", bot1: geminiBotResponse, bot2: gptBotResponse };

            setChatHistory(prevHistory => [...prevHistory, botMessage]);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setMessage('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <Box className="landing-page-root" sx={{
            backgroundColor: 'primary.main'
        }}>
            <Grid container className="grid-container">
                <Grid item className="chat-history">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.sender}`}>
                            {chat.sender === 'user' ? chat.prompt
                                :
                                <>
                                    <MarkdownRenderer model={modelOne} markdown={chat.bot1} />
                                    <MarkdownRenderer model={modelTwo} markdown={chat.bot2} />
                                </>
                            }
                        </div>
                    ))}
                </Grid>
            </Grid>
            <div className="chat-input-container">
                <textarea
                    id="chat-input"
                    rows={1}
                    placeholder="Ask your question"
                    value={message}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <LoadingButton onClick={handleSendMessage} isLoading={isLoading} />
            </div>
        </Box>
    );
};

export default Chat;    