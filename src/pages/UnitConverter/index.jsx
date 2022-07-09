import { useUnitQuery } from '../../hooks/useUnitQuery'
import { formatConvertNumber } from '../../utilities/formatConvertNumber'
import { measurements } from '../../constants/unitConvert'

import { Grid, Stack, TextField, MenuItem } from '@mui/material'

import PageTitle from '../../layout/PageTitle'
import InputGroup from './InputGroup'

import './_index.css'

const UnitConverter = () => {
    const { values, setValues, currentUnits, setCurrentUnits } = useUnitQuery()

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
                rightInput: value ? formatConvertNumber(value, leftSelection, rightSelection) : '',
            })
        }

        if (name === 'rightInput') {
            setValues({
                ...values,
                leftInput: value ? formatConvertNumber(value, rightSelection, leftSelection) : '',
                rightInput: value,
            })
        }

        if (name === 'leftSelection') {
            setValues({
                ...values,
                rightInput: leftInput ? formatConvertNumber(value, leftInput, rightSelection) : rightInput,
                leftSelection: value,
            })
        }

        if (name === 'rightSelection') {
            setValues({
                ...values,
                leftInput: rightInput ? formatConvertNumber(value, rightInput, leftSelection) : leftInput,
                rightSelection: value,
            })
        }
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    const handleClear = () => {
        setValues({
            ...values,
            leftInput: '',
            rightInput: '',
        })
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
                            clearHandler={handleClear}
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
                            clearHandler={handleClear}
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
                                            <span>{formatConvertNumber(values.leftInput, values.leftSelection, option.unit)}</span>
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
