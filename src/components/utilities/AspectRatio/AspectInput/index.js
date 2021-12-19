import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import './index.css'

const AspectInput = ({ selected, handleRadio, handleOriginalWidth, handleOriginalHeight, handleNewSize }) => {
    return (
        <Box
            className='form'
            component='form'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'>
            <div>
                <Chip label='Original' sx={{ backgroundColor: '#8a6e4b', color: '#fff' }} />
            </div>
            <div className='input-group'>
                <FormControl>
                    <InputLabel htmlFor='original-width'>Width</InputLabel>

                    <OutlinedInput id='original-width' label='Width' onChange={handleOriginalWidth} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='original-height'>Height</InputLabel>

                    <OutlinedInput id='original-height' label='Height' onChange={handleOriginalHeight} />
                </FormControl>
            </div>
            <Divider sx={{ margin: '1rem 0' }} />
            <div>
                <Chip label='New' sx={{ backgroundColor: '#8a6e4b', color: '#fff' }} />
            </div>
            <div className='input-group'>
                <FormControl component='fieldset'>
                    <RadioGroup aria-label='gender' defaultValue='width' name='radio-buttons-group' onChange={handleRadio}>
                        <FormControlLabel
                            value='width'
                            control={
                                <Radio
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#8a6e4b',
                                        },
                                    }}
                                />
                            }
                            label='Width'
                        />
                        <FormControlLabel
                            value='height'
                            control={
                                <Radio
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#8a6e4b',
                                        },
                                    }}
                                />
                            }
                            label='Height'
                        />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='new-size'>{selected ? 'Width' : 'Height'}</InputLabel>

                    <OutlinedInput id='new-size' label={selected ? 'Width' : 'Height'} onChange={handleNewSize} />
                </FormControl>
            </div>
        </Box>
    )
}

export default AspectInput
