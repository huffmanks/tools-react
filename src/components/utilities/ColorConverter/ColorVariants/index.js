import ColorItem from './ColorItem'

import './index.css'

const ColorVariants = ({ color, hexColor, rgbColor, hslColor }) => {
    return (
        <div className='color-variants'>
            <ColorItem color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} />
        </div>
    )
}

export default ColorVariants
