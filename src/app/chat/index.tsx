import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { sendMessageToChatGPT } from '../../services/chatgpt';
import chatwithGemini from '../../services/gemini';
import MarkdownRenderer from '../../components/markdownRenderer';
import "./style.scss";
import LoadingButton from '../../components/loadingButton';

interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

const Chat = () => {
    const [message, setMessage] = useState<string>('');
    const [chatGptHistory, setChatGptHistory] = useState<ChatMessage[]>([]);
    const [geminiHistory, setGeminiHistory] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMessage: ChatMessage = { sender: 'user', text: message };

        try {
            setIsLoading(true);
            const gptBotResponse = await sendMessageToChatGPT(message);
            const geminiBotResponse = await chatwithGemini(message);
            setIsLoading(false);

            const gptBotMessage: ChatMessage = { sender: 'bot', text: gptBotResponse };
            const geminiBotMessage: ChatMessage = { sender: "bot", text: geminiBotResponse };

            setChatGptHistory(prevChatGptHistory => [...prevChatGptHistory, userMessage, gptBotMessage]);
            setGeminiHistory(prevHistory => [...prevHistory, userMessage, geminiBotMessage]);
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
                <Grid item className="gpt-history">
                    <Typography variant="h5" className="title">openAI</Typography>
                    {chatGptHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.sender}`}>
                            <MarkdownRenderer markdown={chat.text} />
                        </div>
                    ))}
                </Grid>
                <Grid item className="gemini-history">
                    <Typography variant="h5" className="title">Gemini</Typography>
                    {geminiHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.sender}`}>
                            <MarkdownRenderer markdown={chat.text} />
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