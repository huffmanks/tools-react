import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { routesArray } from '../../Routes/routesArray'

import './index.css'

const HomeCards = () => {
    return (
        <div className='card-flex'>
            {routesArray.slice(1).map(({ key, path, name, icon, description }) => (
                <Card className='card' key={key} sx={{ maxWidth: 345, padding: 3 }}>
                    <div className='card-icon'>
                        <IconButton component='a' href={path} aria-label={name}>
                            {icon}
                        </IconButton>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {name}
                        </Typography>
                        <Typography variant='body2'>{description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            component='a'
                            href={path}
                            sx={{
                                backgroundColor: '#8a6e4b',
                                ':hover': {
                                    backgroundColor: '#222',
                                },
                            }}
                            fullWidth>
                            View
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default HomeCards