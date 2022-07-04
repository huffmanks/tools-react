import { useRef, useState } from 'react'

import { camelCase, capitalCase, constantCase, headerCase, sentenceCase, snakeCase } from 'change-case'
import { lowerCase } from 'lower-case'
import { upperCase } from 'upper-case'
import { initialValues } from '../../constants/textFormatter'
import { usePrevious } from '../../hooks/usePrevious'

import Grid from '@mui/material/Grid'

import PageTitle from '../../layout/PageTitle'
import Textarea from './Textarea'
import PreviousOutput from './PreviousOutput'
import Cards from './Cards'

const TextFormatter = () => {
    const previousOutputRef = useRef()

    const [values, setValues] = useState(initialValues)
    const [textBlurred, setTextBlurred] = useState(false)
    const [saved, setSaved] = useState({})

    const previousValues = usePrevious(values)

    const handleFocus = () => {
        setTextBlurred(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value,
            lowerCase: lowerCase(value),
            upperCase: upperCase(value),
            capitalCase: capitalCase(value),
            sentenceCase: sentenceCase(value),
            camelCase: camelCase(value),
            snakeCase: snakeCase(value),
            headerCase: lowerCase(headerCase(value)),
            constantCase: constantCase(value),
        })
    }

    const handleBlur = () => {
        setTextBlurred(true)
    }

    const handleCopy = (name) => {
        return navigator.clipboard.writeText(values[name])
    }

    const handleSave = (e) => {
        const { name, value } = e.target

        setSaved({
            ...saved,
            [name]: value,
        })
    }

    const handleReset = () => {
        setValues(previousValues)

        // previousOutputRef.select()
    }

    const handleClear = () => {
        setValues(initialValues)
    }

    return (
        <>
            <PageTitle>Text Formatter</PageTitle>

            <Grid container spacing={5}>
                <Textarea previousOutputRef={previousOutputRef} values={values} handleFocus={handleFocus} handleChange={handleChange} handleBlur={handleBlur} handleClear={handleClear} />
                <PreviousOutput previousValues={previousValues} textBlurred={textBlurred} handleReset={handleReset} />
                <Cards values={values} handleCopy={handleCopy} handleSave={handleSave} />
            </Grid>
        </>
    )
}

export default TextFormatter
