import { IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// MuiCircularProgress-svg
const LoadingButton = ({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) => {
    return (
        <>
            {isLoading ? (
                <CircularProgress
                    size={20}
                    sx={{ color: 'secondary.main' }}
                />
            ) : (
                <IconButton onClick={onClick} aria-label="send">
                    <SendIcon sx={{
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        padding: '0.5rem',
                        borderRadius: '50%',
                    }} />
                </IconButton>
            )}
        </>
    );
};

export default LoadingButton;