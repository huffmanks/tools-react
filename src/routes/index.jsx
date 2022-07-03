// Pages
import Home from '../pages/Home'
import AspectRatio from '../pages/AspectRatio'
import TextFormatter from '../pages/TextFormatter'
import ColorPicker from '../pages/ColorPicker'
import EmailSignature from '../pages/EmailSignature'
import UnitConverter from '../pages/UnitConverter'

// Icons
import HomeIcon from '@mui/icons-material/Home'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import TextFormatIcon from '@mui/icons-material/TextFormat'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ScaleIcon from '@mui/icons-material/Scale'

export const routes = [
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
        path: '/color-picker',
        element: <ColorPicker />,
        name: 'Color Picker',
        key: 'color-picker',
        icon: <ColorLensIcon />,
        description: 'Choose a color in HEX, RGB or HSL.',
    },
    {
        path: '/text-formatter',
        element: <TextFormatter />,
        name: 'Text Formatter',
        key: 'text-formatter',
        icon: <TextFormatIcon />,
        description: 'Format text to any case.',
    },
    {
        path: '/unit-converter',
        element: <UnitConverter />,
        name: 'Unit Converter',
        key: 'unit-converter',
        icon: <ScaleIcon />,
        description: 'Convert different unit types.',
    },
    {
        path: '/email-signature',
        element: <EmailSignature />,
        name: 'Email Signature',
        key: 'email-signature',
        icon: <DesignServicesIcon />,
        description: 'Create an email signature.',
    },
]
