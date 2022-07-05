import { useState } from 'react'

import { camelCase, capitalCase, constantCase, headerCase, sentenceCase, snakeCase } from 'change-case'
import { lowerCase } from 'lower-case'
import { upperCase } from 'upper-case'
import { initialValues } from '../../constants/textFormatter'

import Grid from '@mui/material/Grid'

import PageTitle from '../../layout/PageTitle'
import Textarea from './Textarea'
import ActionGroup from './ActionGroup'
import Cards from './Cards'

const TextFormatter = () => {
    const [values, setValues] = useState(initialValues)

    const [saved, setSaved] = useState([])
    const [savedId, setSavedId] = useState(1)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            setValues({
                ...values,
                [name]: checked,
            })
        }

        if (type === 'textarea' || name === 'selected') {
            setValues({
                ...values,
                [name]: value,
                output: value,
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
    }

    const handleCopy = (name) => {
        return navigator.clipboard.writeText(values[name])
    }

    const handleReset = () => {
        setValues(initialValues)
        setSaved([])
        setSavedId(1)
    }

    const handleSave = () => {
        if (!saved.some((item) => item.value === values.camelCase)) {
            setSaved([
                ...saved,
                {
                    id: savedId,
                    value: values.camelCase,
                    label: values.output,
                },
            ])

            setSavedId((prev) => prev + 1)
        }
    }

    const handleClear = () => {
        setValues(initialValues)
    }

    return (
        <>
            <PageTitle>Text Formatter</PageTitle>

            <Grid container spacing={5}>
                <Textarea values={values} handleChange={handleChange} handleClear={handleClear} />
                <ActionGroup values={values} saved={saved} handleChange={handleChange} handleReset={handleReset} handleSave={handleSave} />
                <Cards values={values} handleChange={handleChange} handleCopy={handleCopy} />
            </Grid>
        </>
    )
}

export default TextFormatter
