import { camelCase, capitalCase, constantCase, headerCase, sentenceCase, snakeCase } from 'change-case'
import { lowerCase } from 'lower-case'
import { upperCase } from 'upper-case'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import './_index.css'

const CaseButtons = ({ output, handleUpdate, setOutput }) => {
    const handleLowerCase = () => {
        setOutput(lowerCase(output))
    }

    const handleUpperCase = () => {
        setOutput(upperCase(output))
    }
    const handleCapitalCase = () => {
        setOutput(capitalCase(output))
    }
    const handleSentenceCase = () => {
        setOutput(sentenceCase(output))
    }
    const handleCamelCase = () => {
        setOutput(camelCase(output))
    }
    const handleSnakeCase = () => {
        setOutput(snakeCase(output))
    }
    const handleHeaderCase = () => {
        let value = headerCase(output)
        setOutput(lowerCase(value))
    }
    const handleConstantCase = () => {
        setOutput(constantCase(output))
    }

    return (
        <ButtonGroup id='case-btn-group' className='btn-group' variant='contained' aria-label='outlined button group'>
            <Button onClick={handleLowerCase}>Lower</Button>
            <Button onClick={handleUpperCase}>Upper</Button>
            <Button onClick={handleCapitalCase}>Capitalize</Button>
            <Button onClick={handleSentenceCase}>Sentence</Button>
            <Button onClick={handleCamelCase}>Camel</Button>
            <Button onClick={handleSnakeCase}>Snake</Button>
            <Button onClick={handleHeaderCase}>Kebab</Button>
            <Button onClick={handleConstantCase}>Constant</Button>
        </ButtonGroup>
    )
}

export default CaseButtons
