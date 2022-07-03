import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { routes } from '../../routes'

import './_index.css'

const Home = () => {
    return (
        <>
            <div className='home-cards'>
                {routes.slice(1).map(({ key, path, name, icon, description }) => (
                    <Card color='secondary' key={key} sx={{ flex: '0 0 325px', maxWidth: 345, padding: 3 }}>
                        <div className='home-card-icon'>
                            <Link to={path}>
                                <IconButton aria-label={name} color='primary'>
                                    {icon}
                                </IconButton>
                            </Link>
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {name}
                            </Typography>
                            <Typography variant='body2'>{description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={path} style={{ width: '100%', textDecoration: 'none' }}>
                                <Button
                                    variant='contained'
                                    sx={{
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
