import { useState } from 'react'

import AspectInput from '../AspectInput'
import AspectOutput from '../AspectOutput'

import './index.css'

const AspectContainer = () => {
    const [selected, setSelected] = useState(true)
    const [originalWidth, setOriginalWidth] = useState(null)
    const [originalHeight, setOriginalHeight] = useState(null)
    const [newSize, setNewSize] = useState(null)

    const handleRadio = () => {
        setSelected(!selected)
    }

    const handleOriginalWidth = (e) => {
        setOriginalWidth(e.target.value)
    }

    const handleOriginalHeight = (e) => {
        setOriginalHeight(e.target.value)
    }

    const handleNewSize = (e) => {
        setNewSize(e.target.value)
    }

    return (
        <div className='aspect-container'>
            <AspectInput selected={selected} handleRadio={handleRadio} handleOriginalWidth={handleOriginalWidth} handleOriginalHeight={handleOriginalHeight} handleNewSize={handleNewSize} />
            <AspectOutput selected={selected} originalWidth={originalWidth} originalHeight={originalHeight} newSize={newSize} />
        </div>
    )
}

export default AspectContainer
