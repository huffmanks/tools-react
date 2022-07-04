import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const Textarea = ({ previousOutputRef, handleFocus, handleBlur, handleClear }) => {
    // const Textarea = ({ previousOutputRef, values, handleFocus, handleChange, handleBlur, handleClear }) => {
    return (
        <>
            <Grid item xs={12}>
                <TextField
                    ref={previousOutputRef}
                    autoFocus
                    fullWidth
                    variant='outlined'
                    label='Insert Text'
                    name='output'
                    // value={values.output}
                    onFocus={handleFocus}
                    onChange={(e) => e.target.value}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    multiline
                    rows={2}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton aria-label='clear value' edge='end' onClick={handleClear}>
                                    <DeleteIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </>
    )
}

export default Textarea
