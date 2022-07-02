import { MenuItem, TextField } from '@mui/material'

const InputGroup = ({ inputName, inputValue, selectName, selectValue, focusHandler, changeHandler, unitList }) => {
    return (
        <div className='input-group'>
            <TextField
                className='text-field secondary group top'
                fullWidth
                variant='outlined'
                value={inputValue}
                name={inputName}
                onFocus={focusHandler}
                onChange={changeHandler}
                autoComplete='none'
            />

            <TextField className='text-field secondary group bottom' fullWidth select value={selectValue} name={selectName} onChange={changeHandler}>
                {unitList.map((option) => (
                    <MenuItem key={option.id} value={option.unit}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default InputGroup
