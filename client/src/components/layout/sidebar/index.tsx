import { useState, useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { getUserChats } from "@app/services/api/chatService";
import { useUserStore } from "@app/store/useUserStore";

const Sidebar = () => {
  const { userId } = useUserStore();

  const chatList = [
    {
      id: 1,
      title: "Project Discussion",
      description: "Last message: Can we meet at 3 PM?",
    },
    {
      id: 2,
      title: "Team Updates",
      description: "Last message: Status report is due tomorrow.",
    },
    {
      id: 3,
      title: "Support Query",
      description: "Last message: Resolved issue #456.",
    },
    {
      id: 4,
      title: "Design Feedback",
      description: "Last message: Review the mockups.",
    },
    {
      id: 5,
      title: "New Feature Ideas",
      description: "Last message: Add to backlog.",
    },
  ];
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      const userChats = await getUserChats(userId);
      setChats(userChats);
      console.log(chats);
      
    };
    fetchChats();
  }, [userId]);

  return (
    <Box sx={styles.sidebarStyles}>
      {/* Sidebar Header */}
      <Typography variant="h4" sx={styles.title}>
        Integris
      </Typography>
      <Typography variant="body1" sx={styles.header}>
        Chats
      </Typography>
      {/* New Chat Button */}
      <Button variant="contained" color="primary" sx={styles.newChatButton}>
        + New Chat
      </Button>
      {/* Chat List */}
      <List sx={styles.chatList}>
        {chatList.map((chat) => (
          <ListItem
            key={chat.id}
            button
            onClick={() => setActiveChat(chat.id)}
            className={`chat-item ${chat.id === activeChat ? "selected" : ""}`}
            sx={{
              ...styles.chatItem,
              color: `${chat.id === activeChat && "primary.main"}`,
            }}
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

const styles = {
  sidebarStyles: {
    width: "350px",
    height: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    zIndex: 2000,
    boxShadow: "#b002c72c 1px 20px 40px",
    backgroundColor: "primary.dark",
  },
  title: {
    textAlign: "center",
    marginBottom: "2em",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  header: {
    marginBottom: "1rem",
  },
  chatList: {
    flexGrow: 1,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "primary.light",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  },
  chatItem: {
    borderRadius: "4px",
    padding: "0.8rem",
    marginBottom: "0.5rem",
    color: "text.primary",

    "&:hover": {
      cursor: "pointer",
    },

    "&.selected": {
      backgroundColor: "secondary.main",
      color: "inherit",

      "&:hover": {
        backgroundColor: "var(--mui-secondary-main)",
      },
    },

    "   .chat-title": {
      fontWeight: 600,
    },

    ".chat-description": {
      fontSize: "0.875rem",
    },
  },
  newChatButton: {
    width: "50%",
    border: "1px solid #b002c7",
    color: "#b002c7",
    margin: "10px 0px",
  },
};
