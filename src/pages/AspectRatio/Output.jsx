import { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

import './_index.css'

const Output = ({ values, selected }) => {
    const [newOtherSize, setNewOtherSize] = useState(null)

    useEffect(() => {
        const outputAspect = () => {
            if (values.originalWidth && values.originalHeight) {
                if (selected) {
                    return Math.round((values.originalHeight / values.originalWidth) * values.newSize * 100) / 100
                }
                if (!selected) {
                    return Math.round((values.originalWidth / values.originalHeight) * values.newSize * 100) / 100
                }
            }
        }
        setNewOtherSize(outputAspect)
    }, [selected, values.originalWidth, values.originalHeight, values.newSize])

    return (
        <Grid item container spacing={2} md={6}>
            <Grid item xs={12}>
                <Chip label='Output' color='primary' component='div' sx={{ height: 48, marginBottom: '2rem' }} />
            </Grid>

            {values.originalWidth && values.originalHeight && values.newSize && (
                <Grid item xs={12}>
                    <div className='aspect-output-bg' style={{ aspectRatio: selected ? (values.newSize / newOtherSize).toFixed(2) : (newOtherSize / values.newSize).toFixed(2) }}>
                        <div className='aspect-output-item'>
                            <div>New Width:</div>
                            <div className='aspect-output-value'>{selected ? values.newSize : newOtherSize}</div>
                        </div>
                        <div className='aspect-output-item'>
                            <div>New Height:</div>
                            <div className='aspect-output-value'>{selected ? newOtherSize : values.newSize}</div>
                        </div>
                        <div className='aspect-output-item'>
                            <div>Aspect Ratio:</div>
                            <div className='aspect-output-value'>{selected ? (values.newSize / newOtherSize).toFixed(2) : (newOtherSize / values.newSize).toFixed(2)}</div>
                        </div>
                    </div>
                </Grid>
            )}
        </Grid>
    )
}

export default Output
