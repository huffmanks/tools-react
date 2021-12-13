// Pages
import Home from '../../pages/Home'
import CaseConverter from '../../pages/CaseConverter'
import ColorConverter from '../../pages/ColorConverter'
import Profile from '../../pages/Profile'
import Settings from '../../pages/Settings'

// Icons
import HomeIcon from '@mui/icons-material/Home'
// import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import TextFormatIcon from '@mui/icons-material/TextFormat'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

export const routesArray = [
    {
        path: '/',
        element: <Home />,
        name: 'Home',
        key: 'home',
        icon: <HomeIcon />,
    },
    // {
    //     path: '/aspect-ratio-calculator',
    //     element: <AspectRatioCalculator />,
    //     name: 'Aspect Ratio Calculator',
    //     key: 'aspect-ratio-calculator',
    //     icon: <AspectRatioIcon />,
    // },
    {
        path: '/case-converter',
        element: <CaseConverter />,
        name: 'Case Converter',
        key: 'case-converter',
        icon: <TextFormatIcon />,
    },
    {
        path: '/color-converter',
        element: <ColorConverter />,
        name: 'Color Converter',
        key: 'color-converter',
        icon: <ColorLensIcon />,
    },
    {
        path: '/profile',
        element: <Profile />,
        name: 'Profile',
        key: 'profile',
        icon: <PersonIcon />,
    },
    {
        path: '/settings',
        element: <Settings />,
        name: 'Settings',
        key: 'settings',
        icon: <SettingsIcon />,
    },
]
