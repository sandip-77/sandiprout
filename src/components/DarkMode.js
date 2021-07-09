/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#264067',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#264067',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
}))



const IOSSwitch = ()=> {

    const { dispatch } = useContext(ThemeContext)

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
    let checkBoxChecked;

    if (localStorage) {
        theme = localStorage.getItem("theme");
        checkBoxChecked = localStorage.getItem("checked") === "false" ? false : true
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }


    const [ischeked, setIschecked] = useState({checked : checkBoxChecked})

    const switchTheme = (e) => {
        if (e.target.checked) {
        setIschecked({[e.target.name]: true})
        localStorage.setItem("checked", e.target.checked)
        dispatch({type:"DARKMODE"})
        body.classList.replace(lightTheme, darkTheme);
        localStorage.setItem("theme", "dark");
        localStorage.setItem("darkMode", "on")
        theme = lightTheme;
        } else {
            setIschecked({[e.target.name]: false})

        body.classList.replace(darkTheme, lightTheme);
        localStorage.setItem("theme", "light");
        theme = darkTheme;
        dispatch({type: "LIGHTMODE"})
        localStorage.setItem("darkMode", "off")
        localStorage.setItem("checked", e.target.checked)
        }
    };

    const classes = useStyles()

  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      checked={ischeked.checked}
      inputProps= {{"aria-label": 'checkbox'}}
      name='checked'
      onChange={switchTheme}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
    />
  );
};

export  {IOSSwitch};
