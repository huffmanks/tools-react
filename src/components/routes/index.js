// Pages
import CaseConverter from '../pages/CaseConverter'
import ColorConverter from '../pages/ColorConverter'

// Icons
// import HomeIcon from '@mui/icons-material/Home'
// import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import TextFormatIcon from '@mui/icons-material/TextFormat'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

export const ToolRoutes = [
    // {
    //     key: 'home',
    //     path: '/',
    //     name: 'Home',
    //     icon: <HomeIcon />,
    //     element: Home,
    // },
    // {
    //     key: 'aspect-ratio-calculator',
    //     path: '/aspect-ratio-calculator',
    //     name: 'Aspect Ratio Calculator',
    //     icon: <AspectRatioIcon />,
    //     element: AspectRatioCalculator,
    // },
    {
        key: 'case-converter',
        path: '/case-converter',
        name: 'Case Converter',
        icon: <TextFormatIcon />,
        element: CaseConverter,
    },
    {
        key: 'color-converter',
        path: '/',
        name: 'Color Converter',
        icon: <ColorLensIcon />,
        element: ColorConverter,
    },
    // {
    //     key: 'color-converter',
    //     path: '/color-converter',
    //     name: 'Color Converter',
    //     icon: <ColorLensIcon />,
    //     element: ColorConverter,
    // },
]

export const SiteRoutes = [
    {
        key: 'profile',
        path: '/profile',
        name: 'Profile',
        icon: <PersonIcon />,
        // element: Profile,
    },
    {
        key: 'settings',
        path: '/settings',
        name: 'Settings',
        icon: <SettingsIcon />,
        // element: Settings,
    },
]
