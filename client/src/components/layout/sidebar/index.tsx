import { useState } from "react";
import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import "../../../styles/sidebar.scss";

const Sidebar = () => {
    const chatList = [
        { id: 1, title: "Project Discussion", description: "Last message: Can we meet at 3 PM?" },
        { id: 2, title: "Team Updates", description: "Last message: Status report is due tomorrow." },
        { id: 3, title: "Support Query", description: "Last message: Resolved issue #456." },
        { id: 4, title: "Design Feedback", description: "Last message: Review the mockups." },
        { id: 5, title: "New Feature Ideas", description: "Last message: Add to backlog." },
    ];

    const [activeChat, setActiveChat] = useState<number | null>(null);

    return (
        <Box className="sidebar" sx={{}}>
            {/* Sidebar Header */}
            <Typography variant="body1" className="header">
                Chats
            </Typography>
            {/* New Chat Button */}
            <Button variant="contained" color="primary" className="new-chat-button">
                + New Chat
            </Button>
            {/* Chat List */}
            <List className="chat-list">
                {chatList.map((chat) => (
                    <ListItem
                        key={chat.id}
                        button
                        onClick={() => setActiveChat(chat.id)}
                        className={`chat-item ${chat.id === activeChat ? "selected" : ""}`}
                        sx={{ color: `${chat.id === activeChat && "secondary.main"}` }}
                    >
                        <ListItemText
                            primary={chat.title}
                            secondary={chat.description}
                            primaryTypographyProps={{ className: "chat-title" }}
                            secondaryTypographyProps={{ className: "chat-description" }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
