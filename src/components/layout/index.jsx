import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'

import { routesList } from '../Routes/routesList'

const drawerWidth = 58

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' color='secondary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Web Tools
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'var(--dark-alt)' },
                }}>
                <Toolbar />
                <Box sx={{ overflow: 'hidden' }}>
                    <List>
                        {routesList.slice(0, -2).map(({ key, path, icon }) => (
                            <Link key={key} to={path}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'var(--light-main)' }}>{icon}</ListItemIcon>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider sx={{ backgroundColor: 'var(--light-main)' }} />
                    <List>
                        {routesList.slice(-2).map(({ key, path, icon }) => (
                            <Link key={key} to={path}>
                                <ListItem button>
                                    <ListItemIcon sx={{ color: 'var(--light-main)' }}>{icon}</ListItemIcon>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth='lg'>
                    <div style={{ width: 'min(1200px, 100%)' }}>
                        <>{children}</>
                    </div>
                </Container>
            </Box>
        </Box>
    )
}
export default Layout
