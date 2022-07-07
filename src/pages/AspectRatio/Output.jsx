import { useEffect, useState } from 'react'
import { getAspectRatio } from '../../utilities/getAspectRatio'

import { Box, Grid, Chip, Stack, Button, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Output = ({ values }) => {
    const [newOtherSize, setNewOtherSize] = useState(null)
    const [aspectRatio, setAspectRatio] = useState(null)

    console.log(aspectRatio)

    useEffect(() => {
        if (values.originalWidth && values.originalHeight) {
            const outputAspect = () => {
                if (values.selectedType === 'width') {
                    return Math.round((values.originalHeight / values.originalWidth) * values.newSize * 100) / 100
                } else {
                    return Math.round((values.originalWidth / values.originalHeight) * values.newSize * 100) / 100
                }
            }
            setNewOtherSize(outputAspect)
            if (newOtherSize) {
                setAspectRatio(getAspectRatio(parseInt(values.originalWidth), parseInt(values.originalHeight)))
            }
        }
    }, [values, newOtherSize])

    return (
        <Grid item container spacing={2} md={6}>
            <Grid item xs={12}>
                <Chip label='Output' color='primary' component='div' sx={{ height: 48, marginBottom: '2rem' }} />
            </Grid>

            <Grid item xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth: '150px',
                        maxWidth: 'calc(100% - 105px)',
                        minHeight: '200px',
                        maxHeight: '250px',
                        margin: '0 auto',
                        padding: '1rem',
                        aspectRatio: aspectRatio ?? 1920 / 1080,
                        backgroundColor: 'secondary.main',
                        borderRadius: '4px',
                    }}>
                    {aspectRatio && (
                        <Stack spacing={1}>
                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                <div>Width:</div>
                                <Button
                                    variant='contained'
                                    onClick={() => navigator.clipboard.writeText(values.selectedType === 'width' ? values.newSize : newOtherSize)}
                                    endIcon={<ContentCopyIcon style={{ fontSize: '16px' }} />}>
                                    {values.selectedType === 'width' ? values.newSize : newOtherSize}
                                </Button>
                            </Stack>
                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                <Typography>Height:</Typography>
                                <Button
                                    variant='contained'
                                    onClick={() => navigator.clipboard.writeText(values.selectedType === 'height' ? values.newSize : newOtherSize)}
                                    endIcon={<ContentCopyIcon style={{ fontSize: '16px' }} />}>
                                    {values.selectedType === 'height' ? values.newSize : newOtherSize}
                                </Button>
                            </Stack>

                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                <div>Aspect Ratio:</div>
                                <div>{values.selectedType === 'width' ? (values.newSize / newOtherSize).toFixed(2) : (newOtherSize / values.newSize).toFixed(2)}</div>
                            </Stack>
                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                <div>GCD:</div>
                                <div>
                                    {(values.selectedType === 'width' ? values.originalWidth : values.originalHeight) / aspectRatio}:
                                    {(values.selectedType === 'height' ? values.originalWidth : values.originalHeight) / aspectRatio}
                                </div>
                            </Stack>
                        </Stack>
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Output
