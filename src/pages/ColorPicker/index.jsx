import { useState, useEffect } from 'react'

import PageTitle from '../../layout/PageTitle'

import Typography from '@mui/material/Typography'

import Colord from './Colord'
import ColorForm from './ColorForm'
import ColorVariants from './ColorVariants'

import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
extend([namesPlugin])

const ColorPicker = () => {
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
            <PageTitle>Color Picker</PageTitle>

            <Colord color={color} onChange={setColor} />

            <ColorForm color={color} hexColor={hexColor} rgbColor={rgbColor} hslColor={hslColor} nameColor={nameColor} handleColor={handleColor} />

            <Typography
                variant='h4'
                component='h2'
                sx={{
                    width: 'max-content',
                    marginBottom: '2rem',
                    padding: '0.5rem 1rem',
                    background: `linear-gradient(to right, ${colord(color).lighten(0.15).toHex()}, ${colord(color).darken(0.15).toHex()})`,
                    color: colord(color).isDark() ? '#fff' : '#222',
                    borderRadius: '10px',
                    '@media screen and (max-width: 400px)': {
                        fontSize: '1.5rem',
                    },
                }}>
                Shades
            </Typography>

            <ColorVariants color={color} />
        </>
    )
}

export default ColorPicker
