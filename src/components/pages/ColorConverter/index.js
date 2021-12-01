import { useState, useEffect } from 'react'
import ColorPicker from '../../utilities/ColorConverter/ColorPicker'
import ColorForm from '../../utilities/ColorConverter/ColorForm'
import ColorVariants from '../../utilities/ColorConverter/ColorVariants'

import { colord } from 'colord'

const ColorConverter = () => {
    const [color, setColor] = useState('#8a6e4b')
    const [hexColor, setHexColor] = useState('#8a6e4b')
    const [rgbColor, setRgbColor] = useState('rgb(138, 110, 75)')
    const [hslColor, setHslColor] = useState('hsl(33, 30%, 42%)')

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    useEffect(() => {
        setHexColor(() => colord(color).toHex())
        setRgbColor(() => colord(color).toRgbString())
        setHslColor(() => colord(color).toHslString())
    }, [color])

    return (
        <div>
            <ColorPicker color={color} onChange={setColor} />

            <ColorForm hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} handleColor={handleColor} />

            <ColorVariants color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} />
        </div>
    )
}

export default ColorConverter
