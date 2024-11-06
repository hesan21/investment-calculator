import { AppBar, Divider, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center' }}>
                Investment Calculator
            </Typography>
        </AppBar>
    );
}

export default Header;