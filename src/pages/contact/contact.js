import AppBar from '../../components/appbar/appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from '../../components/footer/footer';


function ContactPage()
{
    return (
        <div>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' padding='2rem'>
                <Box flex={1} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Typography variant='h3' align='center' padding='2rem' sx={{ fontWeight: 'bold' }}>
                        Contact
                    </Typography>
                    <Button variant='outlined'
                        sx={{ color: 'black', borderColor: 'black', textTransform: 'none', fontSize: 'h6.fontSize',
                        margin: '1rem', padding: '0.75rem 2rem' }}>
                        Email
                    </Button>
                </Box>
                <Box flex={1}>
                    <Typography variant='h6' align='center'>
                        EMAIL ADDRESS
                    </Typography>
                    <Typography variant='h5' align='center' sx={{ fontWeight: 'bold' }}>
                        guojasonliu@gmail.com
                    </Typography>
                </Box>
            </Box>
            <Box flex={1}>
                <img src='https://via.placeholder.com/150' alt='Placeholder' style={{ width: '100%' }} />
            </Box>
            <Footer />
        </div>
    );
}

export default ContactPage;