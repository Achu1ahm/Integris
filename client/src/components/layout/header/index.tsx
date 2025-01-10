import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ThemeToggle from '@app/components/buttons/themeToggle';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={styles.appBar}>
            <Toolbar>
                <Box sx={styles.toolbar}>
                    <ThemeToggle/>
                    <Avatar sx={styles.avatar} alt="User Avatar" src="/path/to/avatar.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const styles = {
    appBar: {
        boxShadow: 'none',
        backgroundImage:'none',
        backgroundColor:"primary.main"
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        cursor: 'pointer',
    },
};

export default Header;
