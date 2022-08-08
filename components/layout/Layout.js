import Link from 'next/link';
import { Box, AppBar, Grid, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ListIcon from '@mui/icons-material/List';
import Tooltip from '@mui/material/Tooltip';

const Layout = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <Link href="/">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                FIXICO
                            </Typography>
                        </Link>
                        <Link href="/report-damage">
                            <Tooltip title="Report New Damage">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MinorCrashIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link href="/last-report">
                            <Tooltip title="My Last Reported Damage">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <SummarizeIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link href="/all-reports">
                            <Tooltip title="All Reported Damages">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <ListIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Toolbar>
                </AppBar>
                </Grid>
                <Grid item xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;