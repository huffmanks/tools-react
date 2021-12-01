import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'

const ColorInput = ({ colorName, colorType }) => {
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    return (
        <FormControl>
            <InputLabel htmlFor={`${colorName}-input`}>{colorName}</InputLabel>

            <OutlinedInput id={`${colorName}-input`} value={focused ? null : colorType} name={colorName} label={colorName} onFocus={onFocus} onBlur={onBlur} />
        </FormControl>
    )
}

export default ColorInput
