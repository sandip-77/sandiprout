import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import ButtonComponent from '../components/Button';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import { ThemeContext } from '../ThemeContext';

const ThankYou = () => {

    const useStyles = makeStyles((theme) => ({
        root:{
            marginTop:80,
            height:'85vh',
            color:'#264067',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            flexDirection: 'column',
            justifyContent:'center',
          [theme.breakpoints.up('sm')]: {
            marginTop:80,
        }
        },
        rootDark:{
            marginTop:80,
            height:'85vh',
            color:'rgba(255, 255, 255, 0.87)',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            flexDirection: 'column',
            justifyContent:'center',
          [theme.breakpoints.up('sm')]: {
            marginTop:80,
        }
        },
        "@keyframes myEffect": {
            "from": {
              opacity: 0,
            },
            "to": {
              opacity: 1,
            }
          },
        text: {
            animation: `$myEffect 1500ms ${theme.transitions.easing.sharp}`,
            marginBottom:40,
            fontSize: 40,
            textDecoration: 'underline',
            [theme.breakpoints.up('sm')]:{
                fontSize:48
            }
        },
        text2:{
            animation: `$myEffect 3000ms ${theme.transitions.easing.sharp}`,
            fontSize: 30,
            fontWeight: 300,
            [theme.breakpoints.up('sm')]:{
                fontSize:40
            }
        },
        button: {
            animation: `$myEffect 3000ms ${theme.transitions.easing.sharp}`,
        }
    }))
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const classes = useStyles()



    const d_theme = useContext(ThemeContext)
      const darkMode = d_theme.state.darkMode
      const theme = localStorage.getItem('theme');
    return (
        <div className={darkMode || theme === 'dark' ? classes.rootDark : classes.root}>
        <ConfettiExplosion
            force= {0.9}
            duration= {3000}
            particleCount= {200}
            floorHeight = {viewportHeight}
            floorWidth= {viewportWidth}
        />
            <Typography className={classes.text} variant='h3'>
                Message Sent!!
            </Typography>
            <Typography className={classes.text2} variant='h4'>
                Thank you for your Message. <br />I will respond you within 24 Hrs.
            </Typography>
            <Box className={classes.button} mt={4}>
                <ButtonComponent link='/' text1='res.redirect' text2="'/home'"/>
            </Box>
        </div>
    )
}

export default ThankYou
