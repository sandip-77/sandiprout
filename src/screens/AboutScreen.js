/* eslint-disable no-unused-vars */
import { Box, Container } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import ButtonComponent from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { ThemeContext } from '../ThemeContext';

const AboutScreen = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop:90,
            color:'#264067',
            [theme.breakpoints.up('sm')]: {
              marginTop:140
          }},
          rootDark: {
            flexGrow: 1,
            marginTop:90,
            color:'rgba(255, 255, 255, 0.87)',
            [theme.breakpoints.up('sm')]: {
              marginTop:140
          }},
          photoContainer: {
            borderRight: 'none' ,
            display: 'flex',
            justifyContent: 'center',
                padding: '0 24px',
            [theme.breakpoints.up('md')]:{
                padding: '40px 90px 30px 70px',
                position:'fixed',
                borderRight: '1px solid #264067',
            }
          },
          photoContainerDark: {
            borderRight: 'none' ,
            display: 'flex',
            justifyContent: 'center',
                padding: '0 24px',
            [theme.breakpoints.up('md')]:{
                padding: '40px 90px 30px 70px',
                position:'fixed',
                borderRight: '1px solid rgba(255, 255, 255, 0.87)',
            }
          },
          textContainer:{
            //   position: 'absolute'
          },
        photo:{
            // position:'static',
            width: 300,
            objectFit:'contain',
            border: '10px solid #26406726',
            borderRadius:'8px',
            [theme.breakpoints.up('sm')]: {
                width: 400,
            }
        },
        photoDark:{
            // position:'static',
            width: 300,
            objectFit:'contain',
            border: '10px solid rgba(255, 255, 255, 0.21)',
            borderRadius:'8px',
            [theme.breakpoints.up('sm')]: {
                width: 400,
            }
        },
        intro:{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '36px',
            lineHeight: '104.19%',
            letterSpacing: '0.01em',
            textAlign: 'center',
            marginBottom:'5px',
            [theme.breakpoints.up('sm')]: {
                fontSize:'52px',
                textAlign:'left',
                marginBottom:'20px'
            },
        },
        desc:{
            textAlign: 'center',
            padding: 5,
            fontWeight: 300,
            letterSpacing: '0.055em',
            [theme.breakpoints.up('sm')]:{
                padding: 0,
                textAlign: 'start',
            }
        },
        boldText:{
            fontWeight: 500
        },
        technicalSkills:{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '25px',
            lineHeight: '104.19%',
            letterSpacing: '0.01em',
            textAlign: 'center',
            margin:'15px 0',
            [theme.breakpoints.up('sm')]: {
                fontSize:'33px',
                textAlign:'left',
                margin:'20px 0'
            },
        },
        buttons :{
            margin:"30px 0",
            display:'flex',
            justifyContent:'center',
        [theme.breakpoints.up('sm')]: {
            margin:"80px 0 50px 0",
            display : 'block'
        }
        }

    }))

    const d_theme = useContext(ThemeContext)
    const darkMode = d_theme.state.darkMode
    const theme = localStorage.getItem('theme');

    

    const classes = useStyles();
    return (
        <div className={darkMode || theme === 'dark' ? classes.rootDark : classes.root}>
            <Grid container spacing={3}>
                <Grid item container xs={12} md={4}>
                    <Container >
                        <Container className={ darkMode || theme === 'dark' ? classes.photoContainerDark : classes.photoContainer } maxWidth='xs'>
                                <img className={darkMode || theme === 'dark' ? classes.photoDark : classes.photo} src="/images/sandiprout.jpg" alt="ProfileImage" />
                        </Container>
                    </Container>
                </Grid> 

                <Grid item  container xs={12} md={8}>
                    <Container className={classes.textContainer} maxWidth='sm'>
                            <Box>
                                <p className={classes.intro}>introduction</p>
                                <Box className={classes.desc}>
                                    <p>Hi, I am a full stack developer based in INDIA, young and serious about work, always welcome a new challenge.</p>
                                    <br />
                                    <p>I have experience in <span className={classes.boldText}>mongoDB, EXPRESS, REACT, NODE (MERN) </span>which helps me to become a good full stack developer.<br /> <br /> Having worked on over dozen websites I have realized that the most important aspect that a client needs is support and maintenance. Working with me guarantee top quality in both terms.</p>
                                </Box>
                            </Box>
                            <Box>
                                <p className={classes.technicalSkills}>TECHNICAL SKILLS</p>
                            </Box>
                            <Box>
                                <Box>
                                    <ProgressBar skillName='HTML & CSS' percentage='90%'/>
                                    <ProgressBar skillName='REACT' percentage='85%'/>
                                    <ProgressBar skillName='material-UI' percentage='85%'/>
                                    <ProgressBar skillName='BOOTSTRAP' percentage='90%'/>
                                    <ProgressBar skillName='mongoDB' percentage='80%'/>
                                    <ProgressBar skillName='NODE/EXPRESS' percentage='70%'/>
                                </Box>
                                <Box className={classes.buttons}>
                                    <ButtonComponent link='/resume' text1='res.send' text2="resume"/>
                                    <ButtonComponent link='/projects' text1='.redirect' text2="'/work'"/>
                                </Box>
                            </Box>
                    </Container>
                </Grid> 
            </Grid>
        </div>
    )
}

export default AboutScreen
