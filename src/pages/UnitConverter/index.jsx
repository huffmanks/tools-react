import { useState } from 'react'
import convert from 'convert'

import { measurements } from './measurements'

import Grid from '@mui/material/Grid'
import InputGroup from './InputGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

import PageTitle from '../../layout/PageTitle'

import './_index.css'

const UnitConverter = () => {
    const defaultNumber = 0

    const decimals = 3

    const initialValues = {
        measurement: measurements[defaultNumber].type,
        leftInput: '',
        rightInput: '',
        leftSelection: measurements[defaultNumber].units[0].unit,
        rightSelection: measurements[defaultNumber].units[1].unit,
    }

    const [values, setValues] = useState(initialValues)
    const [currentUnits, setCurrentUnits] = useState(measurements[defaultNumber].units)

    const formattedNumber = (value, fromNum, toNum) => {
        return Number(Math.round(parseFloat(convert(parseInt(value), fromNum).to(toNum) + 'e' + decimals)) + 'e-' + decimals)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        const { leftInput, rightInput, leftSelection, rightSelection } = values

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
                rightInput: value ? formattedNumber(value, leftSelection, rightSelection) : '',
            })
        }

        if (name === 'rightInput') {
            setValues({
                ...values,
                leftInput: value ? formattedNumber(value, rightSelection, leftSelection) : '',
                rightInput: value,
            })
        }

        if (name === 'leftSelection') {
            setValues({
                ...values,
                rightInput: leftInput ? formattedNumber(value, leftInput, rightSelection) : rightInput,
                leftSelection: value,
            })
        }

        if (name === 'rightSelection') {
            setValues({
                ...values,
                leftInput: rightInput ? formattedNumber(value, rightInput, leftSelection) : leftInput,
                rightSelection: value,
            })
        }
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    return (
        <>
            <PageTitle>Convert Units</PageTitle>

            <Grid container spacing={5} style={{ marginBottom: '16px' }}>
                <Grid item container spacing={2} md={6}>
                    <Grid item xs={12}>
                        <TextField fullWidth select label='Measurement' value={values.measurement} name='measurement' onChange={handleChange}>
                            {measurements.map((option) => (
                                <MenuItem key={option.id} value={option.type}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputGroup
                            inputName='leftInput'
                            inputValue={values.leftInput}
                            selectName='leftSelection'
                            selectValue={values.leftSelection}
                            focusHandler={handleFocus}
                            changeHandler={handleChange}
                            unitList={currentUnits}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputGroup
                            inputName='rightInput'
                            inputValue={values.rightInput}
                            selectName='rightSelection'
                            selectValue={values.rightSelection}
                            focusHandler={handleFocus}
                            changeHandler={handleChange}
                            unitList={currentUnits}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={2} md={6}>
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            {currentUnits.map((option) => (
                                <div className='stack-item' key={option.id}>
                                    <span>{option.label}</span>
                                    <span className='stack-pipe'>|</span>
                                    {values.leftInput && values.rightInput && (
                                        <>
                                            <span>{formattedNumber(values.leftInput, values.leftSelection, option.unit)}</span>
                                        </>
                                    )}

                                    <span> {option.short}</span>
                                </div>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UnitConverter
