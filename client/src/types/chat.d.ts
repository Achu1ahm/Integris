export interface userMessage {
    sender: 'user';
    prompt: string;
}

export interface botMessage {
    sender: 'bot';
    bot1: string;
    bot2: string;
}
