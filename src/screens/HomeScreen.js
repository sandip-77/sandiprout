/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ButtonComponent from '../components/Button';
const HomeScreen = () => {
    const useStyles = makeStyles((theme) => ({

        item1:{
            order: 2,
            [theme.breakpoints.up('sm')]: {
                order : 1
            }
        },
        item2:{
            order: 1,
            [theme.breakpoints.up('sm')]: {
                order : 2
            }
        },
        root: {
          flexGrow: 1,
          marginTop:80,
          color:'#264067',
          [theme.breakpoints.up('sm')]: {
            marginTop:150
        }
          
        },
        hello: {
            color:'#fff',
            backgroundColor: '#264067',
            fontSize: '18px',
            lineHeight: '22px',
            padding: '10px 30px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: '20px',
            borderBottomRightRadius:'20px',
            borderBottomLeftRadius:'20px',
            letterSpacing: '-0.54px'
        },
        name : {
            fontSize:'49px',
            fontWeight: 900,
            letterSpacing:'0.03em',
            lineHeight: '57px',
            marginTop: 25
        },
        desc: {
            fontSize:'22px',
            lineHeight: '30px',
            letterSpacing: '0.005em',
            fontWeight: 300
        },
        image:{
            display:"block",
            width:"300px",
            marginBottom: 20,
            [theme.breakpoints.up('sm')]: {
                width:"500px",
                display:"block"
            }
        },
        secondButton: {
            marginLeft:30
        },
        buttons: {
            marginTop:"30px",
            [theme.breakpoints.up('sm')]: {
                marginTop:80,
            }
        }
      }));
      const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.item1} alignItems='center'  container item xs={12} sm={6}>
                    <Container maxWidth="xs">
                        <Box>
                                <span className={classes.hello}>HELLO THERE</span>
                            <Box mt={5} className={classes.name}>
                                <p style={{opacity:'0.5'}}>I AM</p>
                                <p>SANDIP ROUT.</p>
                            </Box>
                            <Box mt={4} className={classes.desc}>
                                <p>An emerging full stack developer with realtively high frontend skills.</p>  
                            </Box>
                            <Box className={classes.buttons}>
                                <ButtonComponent link='/resume' text1='res.send' text2="resume"/>
                                <ButtonComponent link='/about' text1='.redirect' text2="'/about'"/>                                
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid className={classes.item2} alignItems='center' justify='center' container item xs={12} sm={6}>
                    <img className={classes.image} src="/images/home-right.png" alt="home-img" />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeScreen
