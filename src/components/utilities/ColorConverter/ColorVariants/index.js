// import { colord, extend } from 'colord'
// import mixPlugin from 'colord/plugins/mix'

import ColorItem from './ColorItem'

import './index.css'

// extend([mixPlugin])

const ColorVariants = ({ color, hexColor, rgbColor, hslColor }) => {
    // const colorTints = colord(color)
    // colorTints.tints(3).map((c) => c.toHex())

    return (
        <div className='color-variants'>
            <div className='color-items'>
                <ColorItem color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} />
            </div>
        </div>
    )
}

export default ColorVariants
