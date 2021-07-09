/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink, Router } from 'react-router-dom';


const ButtonComponent = ({text1, text2, link, type, disabled}) => {
    const useStyles = makeStyles((theme) => ({
        button:{
            textTransform:"lowercase",
            fontSize: '13px',
            padding: 10,
            backgroundColor:"#264067",
            color: "#fff",
            opacity:1,
            margin:'0px 7px',
            fontFamily:'inherit',
            [theme.breakpoints.up('sm')]: {
                margin: '0 15px'
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
    const classes = useStyles();
    return (
            <Button disabled={disabled} component={RouterLink} to={`${link}`} type={type} disableElevation className={classes.button} variant='contained'>{text1}(<span className={classes.boldtext}>{text2}</span>)</Button>
    )
}

export default ButtonComponent
