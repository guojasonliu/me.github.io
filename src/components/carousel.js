import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const BUTTONS_ACTIVE_COLOR = 'white';
const BUTTONS_DISABLED_COLOR = 'lightgray';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel({ images=[], enableMouseEvents=false, interval=5000, showStepper=true })
{
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
        <Box sx={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep}
                onChangeIndex={handleStepChange} enableMouseEvents={enableMouseEvents} interval={interval}>
                {images.map((step, index) => (
                    <div key={step}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div>
                                <Box component='img' src={step} alt='' sx={{ height: '100vh', display: 'block', 
                                    width: '100%', overflow: 'hidden', objectFit: 'cover', objectPosition: 'center' }}
                                    onContextMenu={(e) => e.preventDefault()} />
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%',
                                    height: '100%', backgroundColor: 'rgba(0,0,0,0)' }} />
                            </div>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {showStepper ? (
                <MobileStepper id='stepper' steps={maxSteps} position='static'
                    sx={{ backgroundColor: 'transparent', '& .MuiMobileStepper-dot': { backgroundColor: 'lightgray' },
                        '& .MuiMobileStepper-dotActive': { backgroundColor: 'white' }, position: 'absolute',
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
