/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Box, Container, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core'
import {ButtonComponent} from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { ThemeContext } from '../ThemeContext';
import { PageviewOutlined } from '@material-ui/icons';
import itemData from '../itemData';


const SingleProject = () => {
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
        // photo:{
        //     // position:'static',
        //     width: 300,
        //     objectFit:'contain',
        //     border: '10px solid #26406726',
        //     borderRadius:'8px',
        //     [theme.breakpoints.up('sm')]: {
        //         width: 400,
        //     }
        // },
        // photoDark:{
        //     // position:'static',
        //     width: 300,
        //     objectFit:'contain',
        //     border: '10px solid rgba(255, 255, 255, 0.21)',
        //     borderRadius:'8px',
        //     [theme.breakpoints.up('sm')]: {
        //         width: 400,
        //     }
        // },
    }));

    const classes = useStyles()

    const d_theme = useContext(ThemeContext)
    const darkMode = d_theme.state.darkMode
    const theme = localStorage.getItem('theme');

    return (
        <div  className={darkMode || theme === 'dark' ? classes.rootDark : classes.root}>
            <Grid container spacing={3}>
            <Grid item container xs={12} md={5}>
            <Container >
                    <ImageList rowHeight={200} gap={6} className={classes.imageList}>
                                {itemData.map((item) => (
                                <ImageListItem className={classes.margin} key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
                                    <img src={item.img} alt={item.title} />
                                    <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton aria-label={`page ${item.title}`} className={classes.icon}>
                                        <PageviewOutlined />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                    />
                                    <ImageListItemBar
                            className={classes.titleBarDown}
                            />
                        </ImageListItem>
                        ))}
                    </ImageList>
                    </Container>
                </Grid> 
                <Grid item container xs={12} md={7}>
                    <Container >
                        <Container maxWidth='md'>
                                Hii
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default SingleProject
