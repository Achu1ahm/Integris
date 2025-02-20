import { IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const LoadingButton = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress size={20} sx={{ color: "secondary.main" }} />
      ) : (
        <IconButton onClick={onClick} aria-label="send">
          <SendIcon
            sx={{
              ...styles,
              ":hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </IconButton>
      )}
    </>
  );
};

const styles = {
  color: "white",
  backgroundColor: "secondary.main",
  padding: "0.5rem",
  borderRadius: "50%",
  transition: "transform 0.3s ease",
};

export default LoadingButton;
