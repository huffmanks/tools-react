import { cards } from '../../constants/textFormatter'

import { Grid, Card, CardContent, CardHeader, IconButton, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Cards = ({ values, handleChange, handleCopy }) => {
    return (
        <>
            <Grid item xs={12}>
                <FormControl fullWidth component='fieldset' variant='outlined'>
                    <FormLabel component='legend'>Select formats</FormLabel>
                    <FormGroup row>
                        {cards.map((box) => (
                            <FormControlLabel key={box.name} control={<Checkbox checked={values[`check_${box.name}`]} onChange={handleChange} name={`check_${box.name}`} />} label={box.label} />
                        ))}
                    </FormGroup>
                </FormControl>
            </Grid>
            {cards.map((card) => (
                <Grid key={card.name} item lg={3} md={6} xs={12}>
                    <Card variant='outlined'>
                        <CardHeader
                            title={card.label}
                            action={
                                <>
                                    {values?.output && (
                                        <IconButton aria-label='copy value to clipboard' onClick={() => handleCopy(card.name)}>
                                            <ContentCopyIcon />
                                        </IconButton>
                                    )}
                                </>
                            }
                        />

                        {values?.output && (
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    {values[card.name]}
                                </Typography>
                            </CardContent>
                        )}
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default Cards
