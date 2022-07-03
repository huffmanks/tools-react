import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

import './_index.css'

const Form = ({ values, handleChange, selected, handleRadio }) => {
    return (
        <Grid item container spacing={2} md={6}>
            <Grid item xs={12}>
                <Chip label='Original' color='primary' component='div' sx={{ marginBottom: '2rem' }} />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField fullWidth variant='outlined' label='Width' placeholder='1920' name='originalWidth' value={values.originalWidth} onChange={handleChange} autoComplete='none' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth variant='outlined' label='Height' placeholder='1080' name='originalHeight' value={values.originalHeight} onChange={handleChange} autoComplete='none' />
            </Grid>

            <Grid item xs={12}>
                <Divider sx={{ margin: '2rem 0' }} />
            </Grid>
            <Grid item xs={12}>
                <Chip label='New' color='primary' component='div' sx={{ marginBottom: '2rem' }} />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl component='fieldset'>
                    <RadioGroup defaultValue='width' name='radio-buttons-group' onChange={handleRadio}>
                        <FormControlLabel value='width' control={<Radio color='primary' />} label='Width' />
                        <FormControlLabel value='height' control={<Radio color='primary' />} label='Height' />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth variant='outlined' label={selected ? 'Width' : 'Height'} placeholder='500' name='newSize' value={values.newSize} onChange={handleChange} autoComplete='none' />
            </Grid>
        </Grid>
    )
}

export default Form
