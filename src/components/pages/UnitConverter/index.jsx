import { useState } from 'react'
// import convert from 'convert'

import { measurements } from './measurements'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import PageTitle from '../../layout/PageTitle'

import './_index.css'

const UnitConverter = () => {
    const defaultNumber = 0

    const initialValues = {
        measurement: measurements[defaultNumber].type,
        leftSelection: measurements[defaultNumber].units[0].unit,
        rightSelection: measurements[defaultNumber].units[1].unit,
    }

    const [values, setValues] = useState(initialValues)
    const [currentUnits, setCurrentUnits] = useState(measurements[defaultNumber].units)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'measurement') {
            const newId = measurements
                .filter((arr) => arr.type === value)
                .map((obj) => obj.units)
                .flat(1)
            console.log(newId)
            setCurrentUnits(newId)
        }

        setValues({
            ...values,
            [name]: value,
        })

        if (values[name] === value) {
            const newUnits = measurements
                .filter((opt) => values.measurement === opt.type)
                .map((obj) => obj.units)
                .flat(1)

            // const newUnits = measurements[currentTypeId].units
            setCurrentUnits(newUnits)
        }
    }

    return (
        <>
            <PageTitle>Convert Units</PageTitle>
            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                autoComplete='off'>
                <Grid container spacing={2} style={{ marginBottom: '16px' }}>
                    <Grid item sm={6} xs={12}>
                        <TextField className='text-field secondary' fullWidth select label='Measurement' value={values.measurement} name='measurement' onBlur={handleChange} onChange={handleChange}>
                            {measurements.map((option) => (
                                <MenuItem key={option.id} value={option.type}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

                <div className='input-container'>
                    <div className='input-group'>
                        <TextField className='text-field secondary group top' fullWidth variant='outlined' name='leftInput' onBlur={handleChange} onChange={handleChange} autoComplete='none' />

                        <TextField
                            className='text-field secondary group bottom'
                            fullWidth
                            select
                            value={values.leftSelection}
                            defaultValue=''
                            name='leftSelection'
                            onBlur={handleChange}
                            onChange={handleChange}>
                            {currentUnits.map((option) => (
                                <MenuItem key={option.id} value={option.unit}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className='input-group'>
                        <TextField className='text-field secondary group top' fullWidth variant='outlined' name='rightInput' onBlur={handleChange} onChange={handleChange} autoComplete='none' />

                        <TextField
                            className='text-field secondary group bottom'
                            fullWidth
                            select
                            value={values.rightSelection}
                            defaultValue=''
                            name='rightSelection'
                            onBlur={handleChange}
                            onChange={handleChange}>
                            {currentUnits.map((option) => (
                                <MenuItem key={option.id} value={option.unit}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default UnitConverter
