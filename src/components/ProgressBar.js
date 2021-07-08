/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core'
import React from 'react'

const ProgressBar = ({percentage, skillName}) => {
    const useStyles = makeStyles((theme) => ({
        forward :{
            animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
            height:7,
            width: `${percentage}`,
            background: '#264067',
            position: 'absolute',
            borderRadius: 5
        },
        background :{
            height:7,
            background: '#E5E5E5',
            width: "100%",
            position: 'relative',
            borderRadius: 5,
            margin: '10px 0',
            [theme.breakpoints.up('sm')]:{
                width: '80%'
            }
        },
          "@keyframes myEffect": {
            "from": {
               width:0
              },
              "to": {
                width: `${percentage}`
              }
          },
          skillName:{
              fontWeight: '500',
              fontSize: 17,
              lineHeight: '104.19%',
              letterSpacing:'0.01em',
          }

    }))
    const classes = useStyles()
    return (
        <div style={{margin: '0px 10px 20px 10px'}}>
            <p className={classes.skillName}>{skillName}</p>
            <div className={classes.background}>
                <div className={classes.forward}></div>
            </div>
        </div>
    )
}

export default ProgressBar;
