import ColorItem from './ColorItem'

import './index.css'

const ColorVariants = ({ color, hexColor, rgbColor, hslColor }) => {
    return (
        <div className='color-variants'>
            <div className='color-items'>
                <ColorItem color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} />
            </div>
        </div>
    )
}

export default ColorVariants
