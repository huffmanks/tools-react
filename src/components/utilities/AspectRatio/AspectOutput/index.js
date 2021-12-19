import { useState, useEffect } from 'react'

import Chip from '@mui/material/Chip'

import './index.css'

const AspectOutput = ({ selected, originalWidth, originalHeight, newSize }) => {
    const [newOtherSize, setNewOtherSize] = useState(null)

    useEffect(() => {
        const outputAspect = () => {
            if (originalWidth && originalHeight) {
                if (selected) {
                    return Math.round((originalHeight / originalWidth) * newSize * 100) / 100
                }
                if (!selected) {
                    return Math.round((originalWidth / originalHeight) * newSize * 100) / 100
                }
            }
        }
        setNewOtherSize(outputAspect)
    }, [selected, originalWidth, originalHeight, newSize])

    return (
        <div className='aspect-output'>
            <div className='aspect-output-label'>
                <Chip label='Output' sx={{ height: 48, backgroundColor: '#8a6e4b', color: '#fff', fontSize: '1.5rem' }} />
            </div>
            {originalWidth && originalHeight && newSize ? (
                <div className='aspect-output-bg' style={{ aspectRatio: selected ? (newSize / newOtherSize).toFixed(2) : (newOtherSize / newSize).toFixed(2) }}>
                    <div className='aspect-output-item'>
                        <div>New Width:</div>
                        <div className='aspect-output-value'>{selected ? newSize : newOtherSize}</div>
                    </div>
                    <div className='aspect-output-item'>
                        <div>New Height:</div>
                        <div className='aspect-output-value'>{selected ? newOtherSize : newSize}</div>
                    </div>
                    <div className='aspect-output-item'>
                        <div>Aspect Ratio:</div>
                        <div className='aspect-output-value'>{selected ? (newSize / newOtherSize).toFixed(2) : (newOtherSize / newSize).toFixed(2)}</div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default AspectOutput
