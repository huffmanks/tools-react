import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const ColorInput = ({ colorName, colorType }) => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(colorType)

    const isActive = (e) => {
        setActive(true)
        setValue(e.target.value)
    }

    const notActive = () => {
        setActive(false)
        setValue(colorType)
    }

    const handleClipboard = () => {
        return navigator.clipboard.writeText(colorType)
    }

    const handleUpdate = (e) => {
        setValue(e.target.value)
    }

    return (
        <FormControl>
            <InputLabel htmlFor={`${colorName}-input`}>{colorName}</InputLabel>

            <OutlinedInput
                id={`${colorName}-input`}
                onChange={handleUpdate}
                value={active ? value : colorType}
                name={colorName}
                label={colorName}
                onFocus={isActive}
                onBlur={notActive}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton aria-label='copy value to clipboard' onClick={handleClipboard} edge='end'>
                            <ContentCopyIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default ColorInput
