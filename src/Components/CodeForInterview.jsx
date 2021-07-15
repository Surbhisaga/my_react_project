import { Box,makeStyles,Typography } from '@material-ui/core'
import mobio_solutions from '../Assets/Images/mobio_solutions.jpg';
import mobio_creative from '../Assets/Images/mobio_creative.jpg';

const useStyles = makeStyles({
    image:{
        width:'20%',
        height:'22%'
    },
    image2:{
        height:'20%',
        width:'80%',
    },
    component:{
        margin:50
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            <Typography variant="h4" style={{marginBottom:'5%'}}>Mobio Solutions LLP</Typography>
            <Box>
                <img className={classes.image} src={mobio_solutions} alt="project"/>
                <img className={classes.image2} src={mobio_creative} alt="project"/>
            </Box>
        </Box>
    )
}

export default CodeForInterview;