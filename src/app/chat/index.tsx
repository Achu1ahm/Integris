import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Grid, Box } from "@mui/material";
import { sendMessageToChatGPT } from '../../services/chatgpt';
import chatwithGemini from '../../services/gemini';
import MarkdownRenderer from '../../components/markdownRenderer';
import "../../styles";
import LoadingButton from '../../components/loadingButton';

interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

interface userMsg {
    sender: 'user';
    prompt: string;
}

interface botMsg {
    sender: 'bot';
    bot1: string;
    bot2: string;
}

type TextMessage = userMsg | botMsg;

const Chat = () => {
    const [message, setMessage] = useState<string>('');
    const [chatGptHistory, setChatGptHistory] = useState<ChatMessage[]>([]);
    const [geminiHistory, setGeminiHistory] = useState<ChatMessage[]>([]);
    const [chatHistory, setChatHistory] = useState<TextMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMessage: ChatMessage = { sender: 'user', text: message };
        const userMessage1: userMsg = { sender: 'user', prompt: message };

        setChatGptHistory(prevChatGptHistory => [...prevChatGptHistory, userMessage]);
        setGeminiHistory(prevGeminiHistory => [...prevGeminiHistory, userMessage]);
        setChatHistory(prevHistory => [...prevHistory, userMessage1])

        try {
            setIsLoading(true);
            const gptBotResponse = await sendMessageToChatGPT(message);
            const geminiBotResponse = await chatwithGemini(message);
            setIsLoading(false);

            // const gptBotMessage: ChatMessage = { sender: 'bot', text: gptBotResponse };
            // const geminiBotMessage: ChatMessage = { sender: "bot", text: geminiBotResponse };
            const botMessage: botMsg = { sender: "bot", bot1: geminiBotResponse, bot2: gptBotResponse };

            // setChatGptHistory(prevChatGptHistory => [...prevChatGptHistory, gptBotMessage]);
            // setGeminiHistory(prevHistory => [...prevHistory, geminiBotMessage]);
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
                <Grid item className="gpt-history">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.sender}`}>
                            {chat.sender == 'user' ? chat.prompt
                                :
                               <>   
                                <MarkdownRenderer markdown={chat.bot1} />
                                <MarkdownRenderer markdown={chat.bot2} />
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