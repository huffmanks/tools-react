import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { routesList } from '../../Routes/routesList'

import './_index.css'

const Home = () => {
    return (
        <>
            <div className='home-card-flex'>
                {routesList.slice(1).map(({ key, path, name, icon, description }) => (
                    <Card className='home-card' key={key} sx={{ maxWidth: 345, padding: 3 }}>
                        <div className='home-card-icon'>
                            <Link to={path}>
                                <IconButton aria-label={name}>{icon}</IconButton>
                            </Link>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {name}
                            </Typography>
                            <Typography variant='body2'>{description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link className='home-card-view-link' to={path}>
                                <Button
                                    variant='contained'
                                    sx={{
                                        backgroundColor: 'var(--primary-main)',
                                        ':hover': {
                                            backgroundColor: 'var(--dark-alt)',
                                        },
                                    }}
                                    fullWidth>
                                    View
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Home
