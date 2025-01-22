import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from "@mui/material";

type ChatNamePromptProps = {
  onSubmit: (chatName: string) => Promise<void>;
};

const ChatNamePrompt = ({ onSubmit }: ChatNamePromptProps) => {
  const [open, setOpen] = useState(true);
  const [chatName, setChatName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log("Chat Name:", chatName);
    onSubmit(chatName);
    setOpen(false);
  };

  return (
    <Box sx={styles.container}>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={styles.dialogContent}>
          <DialogTitle sx={styles.dialogTitle}>Enter Chat Name</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            label="Chat Name"
            type="text"
            fullWidth
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            sx={styles.textField}
          />
          <DialogActions sx={styles.dialogActions}>
            <Button onClick={handleClose} sx={styles.cancelButton}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} sx={styles.confirmButton}>
              Confirm
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  dialogContent: {
    backgroundColor: "primary.main",
    color: "text.primary",
    padding: "20px",
  },
  dialogTitle: {
    color: "text.primary",
    textAlign: "center",
    marginBottom: "10px",
  },
  textField: {
    input: {
      color: "text.primary",
      width: "400px",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "text.primary",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "text.primary",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "text.primary",
    },
    "& .MuiInputLabel-root": {
      color: "text.primary",
    },
    "& .Mui-focused .MuiInputLabel-root": {
      color: "text.primary",
      borderColor: "text.primary",
    },
  },
  dialogActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cancelButton: {
    color: "secondary.contrastText",
  },
  confirmButton: {
    color: "secondary.main",
  },
};

export default ChatNamePrompt;
