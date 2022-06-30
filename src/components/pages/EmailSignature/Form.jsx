import { useFormControls } from '../../../hooks/useFormControls'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Output from './Output'

import { departments } from './departments'

import './_index.css'

const inputValues = [
    {
        name: 'fullName',
        label: 'Full Name',
        placeholder: 'Ben Wofford',
        required: true,
        gridSm: 6,
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'email@wofford.edu',
        required: true,
        gridSm: 6,
    },
    {
        name: 'title',
        label: 'Title',
        placeholder: 'Professor of Biology',
        required: true,
        multiline: true,
        rows: 2,
        gridSm: 12,
    },
    {
        name: 'phone',
        label: 'Phone',
        placeholder: '864-597-4000',
        required: true,
        gridSm: 4,
    },
    {
        name: 'cellPhone',
        label: 'Cell Phone',
        placeholder: '123-456-7890',
        required: false,
        gridSm: 4,
    },
    {
        name: 'fax',
        label: 'Fax',
        placeholder: '864-597-4000',
        required: false,
        gridSm: 4,
    },
    {
        name: 'website',
        label: 'Website',
        placeholder: 'https://wofford.edu',
        required: false,
        gridSm: 6,
    },
]

const Form = () => {
    const { values, errors, formSubmitted, formIsValid, handleChange, handleBlur, handleSubmit } = useFormControls()

    return (
        <>
            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                onSubmit={handleSubmit}
                autoComplete='off'>
                <Grid container spacing={2} style={{ marginBottom: '16px' }}>
                    {inputValues.map((field) => (
                        <Grid key={field.name} item sm={field.gridSm} xs={12}>
                            <TextField
                                className='text-field'
                                fullWidth
                                variant='outlined'
                                required={field.required ?? false}
                                label={field.label}
                                placeholder={field.placeholder}
                                name={field.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!errors[field.name]}
                                multiline={field.multiline ?? false}
                                rows={field.rows ?? 1}
                                autoComplete='none'
                                {...(errors[field.name] && {
                                    error: true,
                                    helperText: errors[field.name],
                                })}
                            />
                        </Grid>
                    ))}
                    <Grid item sm={6} xs={12}>
                        <TextField
                            className='text-field'
                            fullWidth
                            select
                            required
                            label='Department'
                            value={values?.department ?? departments[0].value}
                            name='department'
                            onBlur={handleChange}
                            onChange={handleChange}
                            {...(errors.department && {
                                error: true,
                                helperText: errors.department,
                            })}>
                            {departments.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

                <Button size='large' variant='contained' type='submit' style={{ backgroundColor: `${!formIsValid() ? '#676767' : '#8a6e4b'}`, color: '#fff' }} disabled={!formIsValid()}>
                    Create
                </Button>

                {formSubmitted && <Output values={values} />}
            </Box>
        </>
    )
}

export default Form
