import Box from '@mui/material/Box'

import ColorInput from './ColorInput'

const ColorForm = ({ hexColor, rgbColor, hslColor, nameColor, handleColor }) => {
    return (
        <div style={{ marginBottom: '2rem' }}>
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
                <ColorInput colorName='HEX' colorType={hexColor} />

                <ColorInput colorName='RGB' colorType={rgbColor} />

                <ColorInput colorName='HSL' colorType={hslColor} />

                <ColorInput colorName='Color' colorType={nameColor} />
            </Box>
        </div>
    )
}

export default ColorForm
