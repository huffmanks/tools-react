import { cards } from '../../constants/textFormatter'

import { Grid, Card, CardContent, CardHeader, IconButton, Typography, CardActions } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

const Cards = ({ values, handleCopy, handleSave }) => {
    return (
        <>
            {cards.map((card) => (
                <Grid key={card.name} item lg={3} md={6} xs={12}>
                    <Card variant='outlined'>
                        <CardHeader title={card.title} />

                        <CardContent>
                            <Typography variant='body2' color='text.secondary'>
                                {values[card.name]}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton aria-label='save for later' onClick={() => handleSave(card.name)}>
                                <StarOutlineIcon />
                            </IconButton>

                            <IconButton aria-label='copy value to clipboard' onClick={() => handleCopy(card.name)}>
                                <ContentCopyIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default Cards
