import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={styles.appBar}>
            <Toolbar>
                <Box sx={styles.toolbar}>
                    <Typography variant="h6" sx={styles.title}>
                        deMulti
                    </Typography>
                    <Avatar sx={styles.avatar} alt="User Avatar" src="/path/to/avatar.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const styles = {
    appBar: {
        boxShadow: 'none',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        flexGrow: 1,
        fontFamily: 'sans-serif',
        fontWeight: "bold"
    },
    avatar: {
        cursor: 'pointer',
    },
};

export default Header;
