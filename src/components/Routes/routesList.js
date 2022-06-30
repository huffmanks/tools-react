// Pages
import Home from '../pages/Home'
import AspectRatio from '../pages/AspectRatio'
import CaseConverter from '../pages/CaseConverter'
import ColorConverter from '../pages/ColorConverter'
import EmailSignature from '../pages/EmailSignature'
import UnitConverter from '../pages/UnitConverter'

// Icons
import HomeIcon from '@mui/icons-material/Home'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import TextFormatIcon from '@mui/icons-material/TextFormat'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ScaleIcon from '@mui/icons-material/Scale'

export const routesList = [
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
        path: '/email-signature',
        element: <EmailSignature />,
        name: 'Email Signature',
        key: 'email-signature',
        icon: <DesignServicesIcon />,
        description: 'Create an email signature.',
    },
    {
        path: '/unit-converter',
        element: <UnitConverter />,
        name: 'Unit Converter',
        key: 'unit-converter',
        icon: <ScaleIcon />,
        description: 'Convert different unit types.',
    },
]
