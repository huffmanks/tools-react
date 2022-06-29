import Typography from '@mui/material/Typography'

const PageTitle = ({ children }) => {
    return (
        <Typography variant='h2' component='h1' sx={{ marginBottom: '2rem', textTransform: 'uppercase' }}>
            {children}
        </Typography>
    )
}

export default PageTitle
