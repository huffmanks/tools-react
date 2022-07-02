import { useState } from 'react'
import convert from 'convert'

import { measurements } from './measurements'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputGroup from './InputGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import PageTitle from '../../layout/PageTitle'

import './_index.css'

const UnitConverter = () => {
    const defaultNumber = 0

    const initialValues = {
        measurement: measurements[defaultNumber].type,
        leftInput: '',
        rightInput: '',
        leftSelection: measurements[defaultNumber].units[0].unit,
        rightSelection: measurements[defaultNumber].units[1].unit,
    }

    const [values, setValues] = useState(initialValues)
    const [currentUnits, setCurrentUnits] = useState(measurements[defaultNumber].units)

    const handleChange = (e) => {
        const { name, value } = e.target

        console.log(value)

        if (name === 'measurement') {
            const newOptions = measurements
                .filter((arr) => arr.type === value)
                .map((obj) => obj.units)
                .flat(1)

            setCurrentUnits(newOptions)

            setValues({
                measurement: value,
                leftInput: '',
                rightInput: '',
                leftSelection: newOptions[0].unit,
                rightSelection: newOptions[1].unit,
            })
        }

        if (name === 'leftInput') {
            setValues({
                ...values,
                leftInput: value,
                rightInput: value ? convert(parseInt(value), values.leftSelection).to(values.rightSelection) : '',
            })
        }

        if (name === 'rightInput') {
            setValues({
                ...values,
                leftInput: value ? convert(parseInt(value), values.rightSelection).to(values.leftSelection) : '',
                rightInput: value,
            })
        }

        if (name === 'leftSelection') {
            setValues({
                ...values,
                rightInput: values.leftInput ? convert(parseInt(values.leftInput), value).to(values.rightSelection) : values.rightInput,
                leftSelection: value,
            })
        }

        if (name === 'rightSelection') {
            setValues({
                ...values,
                leftInput: values.rightInput ? convert(parseInt(values.rightInput), value).to(values.leftSelection) : values.leftInput,
                rightSelection: value,
            })
        }
    }

    // const handleBlur = (e) => {
    //     const { name, value } = e.target

    //     if (name === 'leftInput') {
    //         setValues({
    //             ...values,
    //             leftInput: value,
    //             rightInput: value ? convert(parseInt(value), values.leftSelection).to(values.rightSelection) : '',
    //         })
    //     }
    //     if (name === 'rightInput') {
    //         setValues({
    //             ...values,
    //             leftInput: value ? convert(parseInt(value), values.rightSelection).to(values.leftSelection) : '',
    //             rightInput: value,
    //         })
    //     }
    // }

    const handleFocus = (e) => {
        e.target.select()
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
                        <TextField className='text-field secondary' fullWidth select label='Measurement' value={values.measurement} name='measurement' onChange={handleChange}>
                            {measurements.map((option) => (
                                <MenuItem key={option.id} value={option.type}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Stack spacing={2}>
                            {currentUnits.map((option) => (
                                <div className='stack-item' key={option.id}>
                                    {option.label} - {convert(parseInt(values.leftInput), values.leftSelection).to(option.unit)} {option.short}
                                </div>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <div className='input-container'>
                    <InputGroup
                        inputName='leftInput'
                        inputValue={values.leftInput}
                        selectName='leftSelection'
                        selectValue={values.leftSelection}
                        focusHandler={handleFocus}
                        changeHandler={handleChange}
                        unitList={currentUnits}
                    />
                    <InputGroup
                        inputName='rightInput'
                        inputValue={values.rightInput}
                        selectName='rightSelection'
                        selectValue={values.rightSelection}
                        focusHandler={handleFocus}
                        changeHandler={handleChange}
                        unitList={currentUnits}
                    />
                </div>
            </Box>
        </>
    )
}

export default UnitConverter
