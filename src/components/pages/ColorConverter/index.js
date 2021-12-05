import { useState, useEffect } from 'react'

import Typography from '@mui/material/Typography'

import ColorPicker from '../../utilities/ColorConverter/ColorPicker'
import ColorForm from '../../utilities/ColorConverter/ColorForm'
import ColorVariants from '../../utilities/ColorConverter/ColorVariants'

import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
extend([namesPlugin])

const ColorConverter = () => {
    const [color, setColor] = useState('#8a6e4b')
    const [hexColor, setHexColor] = useState('#8a6e4b')
    const [rgbColor, setRgbColor] = useState('rgb(138, 110, 75)')
    const [hslColor, setHslColor] = useState('hsl(33, 30%, 42%)')
    const [nameColor, setNameColor] = useState('dimgray')

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    useEffect(() => {
        setHexColor(() => colord(color).toHex())
        setRgbColor(() => colord(color).toRgbString())
        setHslColor(() => colord(color).toHslString())
        setNameColor(() => colord(color).toName({ closest: true }))
    }, [color])

    return (
        <>
            <Typography variant='h3' component='h1' sx={{ width: 'max-content', margin: '2rem auto', padding: '0.5rem 1rem', backgroundColor: color, color: colord(color).isDark() ? '#fff' : '#222', borderRadius: '10px' }}>
                Color Converter
            </Typography>
            <ColorPicker color={color} onChange={setColor} />

            <ColorForm color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} nameColor={nameColor} handleColor={handleColor} />

            <ColorVariants color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} />
        </>
    )
}

export default ColorConverter
