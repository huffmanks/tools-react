import Box from '@mui/material/Box'

import ColorInput from './ColorInput'

const ColorForm = ({ hexColor, rgbColor, hslColor, handleColor }) => {
    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete='off'
            onChange={handleColor}>
            <ColorInput colorName='HEX' colorType={hexColor} />

            <ColorInput colorName='RGB' colorType={rgbColor} />

            <ColorInput colorName='HSL' colorType={hslColor} />
        </Box>
    )
}

export default ColorForm
