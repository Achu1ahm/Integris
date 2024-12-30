import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { IconButton, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { sendMessageToChatGPT } from '../../services/chatgpt';
import chatwithGemini from '../../services/gemini';
import messageToClaude from '../../services/claude';
import "./style.scss";


interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

const LandingPage = () => {
    const [message, setMessage] = useState<string>('');
    const [chatGptHistory, setChatGptHistory] = useState<ChatMessage[]>([]);
    const [geminiHistory,setGeminiHistory] = useState<ChatMessage[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (message.trim() === '') return;

        const userMessage: ChatMessage = { sender: 'user', text: message };
        // setChatGptHistory(prevChatGptHistory => [...prevChatGptHistory, userMessage]);
        setGeminiHistory(prevGeminiHistory =>[...prevGeminiHistory,userMessage]);

        try {
            // const gptBotResponse = await sendMessageToChatGPT(message);
            const geminiBotResponse = await chatwithGemini(message);

            // const gptBotMessage: ChatMessage = { sender: 'bot', text: gptBotResponse };
            const geminiBotMessage : ChatMessage ={sender:"bot", text:geminiBotResponse};

            // setChatGptHistory(prevChatGptHistory => [...prevChatGptHistory, userMessage, gptBotMessage]);
            setGeminiHistory(prevGeminiHistory=> [...prevGeminiHistory,userMessage,geminiBotMessage])
        } catch (error) {
            console.error('Error:', error);
        }
        setMessage('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="landing-page-root">
            <Grid container className='grid-container'>
                <Grid item>
            <div className="gpt-history">
                {chatGptHistory.map((chat, index) => (
                    <div key={index} className={`gpt-message ${chat.sender}`}>
                        {chat.text}
                    </div>
                ))}
            </div>
            </Grid>
            <Grid item className='gemini-history'>
            {geminiHistory.map((chat, index) => (
                    <div key={index} className={`gpt-message ${chat.sender}`}>
                        {chat.text}
                    </div>
                ))}
            </Grid>
            </Grid>
            <div className="chat-input-container">
                <textarea
                    id="chat-input"
                    rows={1}
                    placeholder="Send a message..."
                    value={message}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <IconButton onClick={handleSendMessage}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default LandingPage;
