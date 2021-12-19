// Pages
import Home from '../../pages/Home'
import AspectRatio from '../../pages/AspectRatio'
import CaseConverter from '../../pages/CaseConverter'
import ColorConverter from '../../pages/ColorConverter'
import Profile from '../../pages/Profile'
import Settings from '../../pages/Settings'

// Icons
import HomeIcon from '@mui/icons-material/Home'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
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
        description: 'Web dev tools.',
    },
    {
        path: '/aspect-ratio',
        element: <AspectRatio />,
        name: 'Aspect Ratio',
        key: 'aspect-ratio',
        icon: <AspectRatioIcon />,
        description: 'Calculate the aspect ratio.',
    },
    {
        path: '/case-converter',
        element: <CaseConverter />,
        name: 'Case Converter',
        key: 'case-converter',
        icon: <TextFormatIcon />,
        description: 'Convert text to any case.',
    },
    {
        path: '/color-converter',
        element: <ColorConverter />,
        name: 'Color Converter',
        key: 'color-converter',
        icon: <ColorLensIcon />,
        description: 'Convert different color types.',
    },
    {
        path: '/profile',
        element: <Profile />,
        name: 'Profile',
        key: 'profile',
        icon: <PersonIcon />,
        description: 'Update your account profile.',
    },
    {
        path: '/settings',
        element: <Settings />,
        name: 'Settings',
        key: 'settings',
        icon: <SettingsIcon />,
        description: 'Update your tool settings.',
    },
]
