import { useState } from 'react'
import { useFormControls } from '../../hooks/useFormControls'

import { Grid } from '@mui/material'
import PageTitle from '../../layout/PageTitle'
import Form from './Form'
import Output from './Output'

const AspectRatio = () => {
    const initialValues = {
        originalWidth: 1920,
        originalHeight: 1080,
        newSize: 500,
    }

    const { values, handleChange } = useFormControls(initialValues)

    const [selected, setSelected] = useState(true)

    const handleRadio = () => {
        setSelected((prev) => !prev)
    }

    return (
        <>
            <PageTitle>Aspect Ratio</PageTitle>

            <Grid container spacing={5}>
                <Form values={values} handleChange={handleChange} selected={selected} handleRadio={handleRadio} />

                <Output values={values} selected={selected} />
            </Grid>
        </>
    )
}

export default AspectRatio
