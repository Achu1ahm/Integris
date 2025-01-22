import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import MarkdownRenderer from "@app/components/markdownRenderer";
import LoadingButton from "@app/components/buttons/loadingButton";
import ChatNamePrompt from "@app/components/dialogBox/chatNamePrompt";
import useChatHandler from "./useChatHandler";

const modelOne = process.env.REACT_APP_MODEL_ONE as string;
const modelTwo = process.env.REACT_APP_MODEL_TWO as string;

const Chat = () => {
  const {
    message,
    setMessage,
    chatHistory,
    isLoading,
    showChatNamePrompt,
    chatContainerRef,
    lastMessageRef,
    handleSendMessage,
    handleChatNameSubmit,
  } = useChatHandler();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [chatHistory]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={styles.landingPageRoot}>
      <Grid container className="grid-container">
        <Grid item className="chat-history" ref={chatContainerRef}>
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-message ${chat.sender}`}
              ref={index === chatHistory.length - 1 ? lastMessageRef : null}
            >
              {chat.sender === "user" ? (
                chat.prompt
              ) : (
                <>
                  <MarkdownRenderer model={modelOne} markdown={chat.bot1} />
                  <MarkdownRenderer model={modelTwo} markdown={chat.bot2} />
                </>
              )}
            </div>
          ))}
        </Grid>
      </Grid>
      <Box className="chat-input-container">
        <textarea
          id="chat-input"
          rows={1}
          placeholder="Ask your question"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <LoadingButton onClick={handleSendMessage} isLoading={isLoading} />
      </Box>
      {showChatNamePrompt && <ChatNamePrompt onSubmit={handleChatNameSubmit} />}
    </Box>
  );
};

export default Chat;

const styles = {
  landingPageRoot: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    color: "white",
    backgroundColor: "primary.main",
    "& .grid-container": {
      display: "flex",
      justifyContent: "space-around",
      "& .chat-history": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "90vh",
        overflowY: "auto",
        padding: "65px 150px 0px",
        scrollPaddingTop: "150px",
        // Scrollbar styles
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "scrollbar.thumb",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "scrollbar.track",
        },
        "& .title": {
          fontSize: "24px",
          fontWeight: "bold",
          margin: "10px",
          textAlign: "center",
        },
        "& .chat-message": {
          margin: "10px 0",
          padding: "8px 12px",
          borderRadius: "12px",
          color: "white",
          "&.user": {
            backgroundColor: "#0069e2",
            alignSelf: "flex-end",
            width: "fit-content",
          },
          "&.bot": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "flex-start",
          },
        },
      },
    },
    "& .chat-input-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "20px auto",
      width: "600px",
      padding: "0 8px",
      borderRadius: "20px",
      boxShadow: "#b002c72c 1px 10px 50px",
      backgroundColor: "primary.light",
      color: "text.primary",
      "& #chat-input": {
        flexGrow: 1,
        minHeight: "24px",
        maxHeight: "200px",
        padding: "15px 2px",
        border: "none",
        marginLeft: "11px",
        fontSize: "16px",
        lineHeight: "1.4",
        resize: "none",
        overflowY: "hidden",
        backgroundColor: "inherit",
        color: "inherit",
        fontFamily: "inherit",
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
};
