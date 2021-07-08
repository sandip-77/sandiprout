/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button } from '@material-ui/core';
import { Input, TextareaAutosize } from '@material-ui/core';
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const ContactScreen = () => {

    const [isSubmitted, setIsSubmmitted] = useState(false);
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop:90,
            color:'#264067',
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
            }},
            photo:{
                width: 300,
                objectFit:'contain',
                borderRadius:'8px',
                [theme.breakpoints.up('sm')]: {
                    width: 500,
                }
            },
            contact:{
                fontWeight: 'bold',
                fontSize:'37px',
                lineHeight:'43px',
                textAlign:'center',
            },
            desc:{
                fontWeight: 300,
                fontSize:'23px',
                lineHeight:'34px',
                textAlign:'center',
                letterSpacing:'-0.04em',
                [theme.breakpoints.up('sm')]:{
                    fontSize:29
                }
            },
            formContainer: {
                paddingRight: 0
            },
            switchVisibility:{
                display: 'none',
                [theme.breakpoints.up('md')]:{
                    display:'block'
                }
            },
            input: {
                border: "1px solid #264067",
                borderRadius: "4px",
                paddingLeft: 8,
                width:'80%',
                marginTop:15
            },
            message: {
                border: "1px solid #264067",
                borderRadius: "4px",
                paddingLeft: 8,
                width:'80%',
                marginTop:15,
                fontFamily :'inherit',
                fontSize:'15px',
                paddingTop:2
            },
            formStyle:{
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center', 
                justifyContent:'center'
            },

            // button

            button:{
                textTransform:"lowercase",
                fontSize: '13px',
                padding: 10,
                backgroundColor:"#264067",
                color: "#fff",
                opacity:1,
                // marginRight:25,
                fontFamily:'inherit',
                [theme.breakpoints.up('sm')]: {
                    // marginRight: 30
                },
                '&:hover': {
                    backgroundColor: "#264067e0",
                 },
                 borderRadius:10,
            },
            boldtext: {
                fontWeight:900,
                fontSize: '13px',
                lineHeight: '23px',
            }
    }))


    // useEffect(() => {
    //     if(isSubmitted){
    //         history.push('/message')
    //     }
    // },[])


    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.switchVisibility} item container xs={12} md={5}>
                    <Container maxWidth='xs'>
                            <img className={classes.photo} src="/images/about-us.png" alt="VectorImage" />
                    </Container>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Container className={classes.formContainer} maxWidth='md' >
                        <Box>
                            <p className={classes.contact}>Contact Me</p>
                            <p className={classes.desc}>Let's Turn your Idea into an Outstanding Product</p>
                        </Box>
                        <Box mt={4}>
                        <form
                        className={classes.formStyle} action="https://formsubmit.co/sandip.rout901@gmail.com" method="POST">
                            <input type="hidden" name="_next" value="http://localhost:3000/message"></input>
                            <Input autoFocus placeholder='Your Name' type='text' name='name' required className={classes.input}  disableUnderline  />
                            <Input placeholder='Your Email' type='email' name='email' required className={classes.input}  disableUnderline  />
                            <Input placeholder='Subject' type='text' name='Subject' required className={classes.input}  disableUnderline  />
                            <TextareaAutosize className={classes.message} required minRows={10} name='message' placeholder="Message" />
                            <Box style={{marginTop: 30}}>
                                <Button className={classes.button} type='submit'>
                                    res.send(<span className={classes.boldtext}>message</span>)
                                </Button>
                            </Box>
                            </form>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactScreen
