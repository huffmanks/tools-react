import { Grid, TextField, IconButton, InputAdornment } from '@mui/material'

import RestartAltIcon from '@mui/icons-material/RestartAlt'

const PreviousOutput = ({ previousValues, textBlurred, handleReset }) => {
    return (
        <>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    variant='outlined'
                    label='Previous'
                    name='previousOutput'
                    value={previousValues?.output ?? ''}
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton aria-label='delete value' edge='end' onClick={handleReset}>
                                    <RestartAltIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </>
    )
}

export default PreviousOutput
