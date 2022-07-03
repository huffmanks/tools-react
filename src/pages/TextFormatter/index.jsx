import { useState } from 'react'

import PageTitle from '../../layout/PageTitle'

import CaseText from './CaseText'
import CaseButtons from './CaseButtons'

const TextFormatter = () => {
    const [output, setOutput] = useState('')

    const handleUpdate = (e) => {
        setOutput(e.target.value)
    }

    const handleCopy = () => {
        return navigator.clipboard.writeText(output)
    }

    const handleDelete = () => {
        setOutput('')
    }

    return (
        <>
            <PageTitle>Text Formatter</PageTitle>

            <CaseText output={output} handleUpdate={handleUpdate} handleCopy={handleCopy} handleDelete={handleDelete} />
            <CaseButtons output={output} handleUpdate={handleUpdate} setOutput={setOutput} />
        </>
    )
}

export default TextFormatter
