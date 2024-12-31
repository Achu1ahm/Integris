import { IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const LoadingButton = ({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) => {
    return (
        <>
            {isLoading ? (
                <CircularProgress
                    size={20}
                    style={{ color: 'secondary.main', position: 'absolute' }}
                />
            ) : (
                <IconButton onClick={onClick} disabled={!isLoading} aria-label="send">
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