import Box from '@mui/material/Box'

import ColorInput from './ColorInput'

const ColorForm = ({ color, hexColor, rgbColor, hslColor, nameColor, handleColor }) => {
    return (
        <div style={{ width: 'min(1000px, 100%', margin: '0 auto 2rem' }}>
            <Box
                component='form'
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                    gap: '1rem',
                }}
                noValidate
                autoComplete='off'
                onChange={handleColor}>
                <ColorInput colorName='HEX' colorType={hexColor} color={color} />

                <ColorInput colorName='RGB' colorType={rgbColor} color={color} />

                <ColorInput colorName='HSL' colorType={hslColor} color={color} />

                <ColorInput colorName='Color' colorType={nameColor} color={color} />
            </Box>
        </div>
    )
}

export default ColorForm
