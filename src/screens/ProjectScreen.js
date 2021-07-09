import { Box, Container } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import ButtonComponent from '../components/Button';
import AdvancedImageList from '../components/ImageList';
import { ThemeContext } from '../ThemeContext';

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
        }
        

    }))
    const classes = useStyles()

    const d_theme = useContext(ThemeContext)
      const darkMode = d_theme.state.darkMode
      const theme = localStorage.getItem('theme');
    return (
        <div className={darkMode || theme === 'dark' ? classes.rootDark : classes.root}>
            <Typography className={classes.title} paragraph>
                projects that I have worked on
            </Typography>
            <Container maxWidth='md'>
                <AdvancedImageList/>
            </Container>
            <Box className={classes.buttons}>
                <ButtonComponent link='/resume' text1='res.send' text2="resume"/>
                <ButtonComponent link='/projects' text1='.redirect' text2="'/work'"/>
            </Box>
        </div>
    )
}

export default ProjectScreen
