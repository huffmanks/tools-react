import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const ColorInput = ({ color, colorName, colorType }) => {
    const [active, setActive] = useState(false)

    // TODO:
    // get copy to clipboard to work
    // useReducer to handle updated values
    // https://reactjs.org/docs/hooks-reference.html#usereducer

    const isActive = () => {
        setActive(true)
    }

    const notActive = () => {
        setActive(false)
    }

    const handleClipboard = (e) => {
        // console.log(e.currentTarget.parent)
        return navigator.clipboard.writeText(colorType)
        // return navigator.clipboard.writeText(e.target.parent.previousSibling.value)
        // if ('clipboard' in navigator) {
        //     return await navigator.clipboard.writeText(e.target.value)
        // }
    }

    return (
        <FormControl>
            <InputLabel htmlFor={`${colorName}-input`}>{colorName}</InputLabel>

            <OutlinedInput
                id={`${colorName}-input`}
                // value={active ? color : colorType}
                value={active ? null : colorType}
                name={colorName}
                label={colorName}
                onFocus={isActive}
                // onMouseOver={isActive}
                onBlur={notActive}
                // onMouseLeave={notActive}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton aria-label='copy value to clipboard' onClick={handleClipboard} edge='end'>
                            {active ? <ContentCopyIcon /> : ''}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default ColorInput
