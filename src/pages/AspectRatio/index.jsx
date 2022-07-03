import { useFormControls } from '../../hooks/useFormControls'
import { initialValues } from '../../constants/aspectRatio'

import { Grid } from '@mui/material'
import PageTitle from '../../layout/PageTitle'
import Form from './Form'
import Output from './Output'

const AspectRatio = () => {
    const { values, handleChange } = useFormControls(initialValues)

    return (
        <>
            <PageTitle>Aspect Ratio</PageTitle>

            <Grid container spacing={5}>
                <Form values={values} handleChange={handleChange} />

                <Output values={values} />
            </Grid>
        </>
    )
}

export default AspectRatio
