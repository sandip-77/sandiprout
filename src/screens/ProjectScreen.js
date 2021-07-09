import { Box, Container } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {ButtonComponent, ResumeButton} from '../components/Button';
import AdvancedImageList from '../components/ImageList';
import { ThemeContext } from '../ThemeContext';
import  {Alert, AlertTitle} from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';


const ProjectScreen = () => {

    const useStyles  = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop:80,
            color:'#264067',
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
              marginTop:110
          }
        },
        rootDark: {
            flexGrow: 1,
            marginTop:80,
            color:'rgba(255, 255, 255, 0.87)',
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
              marginTop:110
          },
        },
        title: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: '27px',
            letterSpacing: '0.03em',
            marginBottom: 30,
            [theme.breakpoints.up('sm')]:{
                fontSize: '44px',
                lineHeight:'52px'
            }
        },
        buttons:{
            margin: '40px 0 30px 0'
        },
        snacBar:{
            // position: 'fixed',
            top: 0
          }
        

    }))
    const classes = useStyles()

    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
        }
        setOpen(false);
    };

    const d_theme = useContext(ThemeContext)
      const darkMode = d_theme.state.darkMode
      const theme = localStorage.getItem('theme');
    return (
        <div className={darkMode || theme === 'dark' ? classes.rootDark : classes.root}>
            <Typography className={classes.title} paragraph>
                projects that I have worked on
            </Typography>
                <Snackbar open={open} onClose={handleClose}>
            <Container maxWidth='md'>
                    <Alert  className={classes.snacBar}  onClose={handleClose} severity="error">
                        <AlertTitle>Declaration</AlertTitle>
                        These are not my designs, only the code. And In some websites there are lorem ipsome texts, simply because I did not know what to write there. Cheers ✌️
                    </Alert>
            </Container>
                </Snackbar>
            <Container maxWidth='md'>
                <AdvancedImageList/>
            </Container>
            <Box className={classes.buttons}>
                <ResumeButton/>
                <ButtonComponent link='/contact' text1='.redirect' text2="'/contact'"/>
            </Box>
        </div>
    )
}

export default ProjectScreen
