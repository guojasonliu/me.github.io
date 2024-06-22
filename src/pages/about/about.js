import AppBar from '../../components/appbar/appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../../components/footer/footer';


function AboutPage()
{
    return (
        <div>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                <Box flex={1}>
                    <img src='https://via.placeholder.com/150' alt='Placeholder' style={{ width: '100%' }} />
                </Box>
                <Box flex={1} paddingLeft='2rem'>
                    <Typography variant='body1'>
                        This is some text that will appear on the right side of the image. The image and the text box have the same width.
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </div>
    );
}

export default AboutPage;