import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'

import './_index.css'

const CaseText = ({ output, handleUpdate, handleCopy, handleDelete }) => {
    return (
        <FormControl fullWidth className='case-form-control'>
            <OutlinedInput
                id='case-textarea'
                inputComponent='textarea'
                onChange={handleUpdate}
                value={output}
                endAdornment={
                    <>
                        <InputAdornment position='end'>
                            <IconButton aria-label='copy value to clipboard' edge='end' onClick={handleCopy}>
                                <ContentCopyIcon />
                            </IconButton>
                        </InputAdornment>

                        <InputAdornment position='end'>
                            <IconButton aria-label='delete value' edge='end' onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </InputAdornment>
                    </>
                }
            />
        </FormControl>
    )
}

export default CaseText
