import { useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import { departments } from './departments'

import './_index.css'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [phone, setPhone] = useState('')
    const [cellPhone, setCellPhone] = useState('')
    const [fax, setFax] = useState('')
    const [department, setDepartment] = useState('')
    const [website, setWebsite] = useState('')

    return (
        <>
            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete='off'>
                <Grid container spacing={2} style={{ marginBottom: '16px' }}>
                    <Grid item sm={6} xs={12}>
                        <TextField className='text-field' fullWidth label='Name' variant='outlined' placeholder='Ben Wofford' value={fullName} onInput={(e) => setFullName(e.target.value)} />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            className='text-field'
                            fullWidth
                            label='Email'
                            variant='outlined'
                            type='email'
                            placeholder='email@wofford.edu'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <div style={{ marginBottom: '16px' }}>
                    <TextField
                        className='text-field'
                        multiline
                        fullWidth
                        label='Title'
                        variant='outlined'
                        rows={2}
                        placeholder='Professor of Biology'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <Grid container spacing={2} style={{ marginBottom: '16px' }}>
                    <Grid item sm={4} xs={12}>
                        <TextField className='text-field' fullWidth label='Phone' variant='outlined' placeholder='864-597-4000' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <TextField className='text-field' fullWidth label='Cell Phone' variant='outlined' placeholder='123-456-7890' value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <TextField className='text-field' fullWidth label='Fax' variant='outlined' placeholder='864-597-4000' value={fax} onChange={(e) => setFax(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: '16px' }}>
                    <Grid item sm={6} xs={12}>
                        <TextField className='text-field' fullWidth select label='Department' value={department} onChange={(e) => setDepartment(e.target.value)}>
                            {departments.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            className='text-field'
                            fullWidth
                            label='Website'
                            variant='outlined'
                            type='url'
                            placeholder='https://wofford.edu'
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form
