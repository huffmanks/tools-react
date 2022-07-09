import { useFormControls } from '../../hooks/useFormControls'
import { initialValues } from '../../constants/aspectRatio'

import { Grid } from '@mui/material'
import PageTitle from '../../layout/PageTitle'
import Form from './Form'
import Output from './Output'

const AspectRatio = () => {
    const { values, handleFocus, handleChange, handleCalculate } = useFormControls(initialValues)

    return (
        <>
            <PageTitle>Aspect Ratio</PageTitle>

            <Grid container spacing={5} alignItems='start'>
                <Form values={values} handleFocus={handleFocus} handleChange={handleChange} handleCalculate={handleCalculate} />

                <Output values={values} />
            </Grid>
        </>
    )
}

export default AspectRatio
