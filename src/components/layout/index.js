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

import { routesArray } from '../Routes/routesArray'

const drawerWidth = 58

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#8a6e4b' }}>
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
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}>
                <Toolbar />
                <Box sx={{ overflow: 'hidden' }}>
                    <List>
                        {routesArray.slice(0, -2).map(({ key, path, icon }) => (
                            <Link key={key} to={path}>
                                <ListItem button>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {routesArray.slice(-2).map(({ key, path, icon }) => (
                            <Link key={key} to={path}>
                                <ListItem button>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth='lg'>
                    <div style={{ width: 'min(1000px, 100%)' }}>
                        <>{children}</>
                    </div>
                </Container>
            </Box>
        </Box>
    )
}
export default Layout
