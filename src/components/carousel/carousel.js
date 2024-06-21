import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './carousel.css';


const BUTTONS_ACTIVE_COLOR = 'white';
const BUTTONS_DISABLED_COLOR = 'lightgray';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel(props)
{
    const images = props.images;
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep}
                onChangeIndex={handleStepChange} enableMouseEvents={props.enableMouseEvents} interval={props.interval}>
                {images.map((step, index) => (
                    <div key={step}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box component='img' className='image-background' src={step} alt='' />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {props.showStepper ? (
                <MobileStepper id='stepper' steps={maxSteps} position='static'
                    sx={{ backgroundColor: 'transparent', '& .MuiMobileStepper-dot': { backgroundColor: 'black' },
                        '& .MuiMobileStepper-dotActive': { backgroundColor: 'lightgray' }, position: 'absolute',
                        bottom: 0, width: '100%', display: 'flex', justifyContent: 'center'
                    }}
                    activeStep={activeStep}
                    nextButton={
                        <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}
                            sx={{ color: BUTTONS_ACTIVE_COLOR, '&.Mui-disabled': { color: BUTTONS_DISABLED_COLOR }}}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size='small' onClick={handleBack} disabled={activeStep === 0}
                            sx={{ color: BUTTONS_ACTIVE_COLOR, '&.Mui-disabled': { color: BUTTONS_DISABLED_COLOR }}}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                    }
                />
            ) : (
                ""
            )}
        </Box>
    );
}

export default Carousel;
