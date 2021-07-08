import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: 0,
    top:0,
    backgroundColor:'#fff',
    color:"#264067",
    boxShadow: '0 0 0 1px',
    fontFamily: 'Nunito'
  },
  flexnav:{
    display: 'flex',
    justifyContent:'space-between'
  },
  color: {
    color:"#264067",
    marginRight: 20
  },
  heading:{
    fontWeight:100,
    fontSize: '45px',
  },
  font: {
    marginRight: '40px',
    fontWeight: 100,
    fontSize: 21
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems:'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <div className={classes.color}>
      <MenuItem
        onClick={handleMobileMenuClose}>
        <Link className='link' to='/about'>
         <p>.about()</p>
        </Link>
      </MenuItem>

      <MenuItem
        onClick={handleMobileMenuClose}>
        <Link className='link' to='/work'>
          <p>.work()</p>
        </Link>
      </MenuItem>

      <MenuItem
        onClick={handleMobileMenuClose}>
        <Link className='link' to='/contact'>
          <p>.contact()</p>
        </Link>
      </MenuItem>

      <MenuItem
        onClick={handleMobileMenuClose}>
        <a className='link' rel="noreferrer" target='_blank' href='https://github.com/sandip-77'>
          <p>.gitHub()</p>
        </a>
      </MenuItem>

      <MenuItem
        onClick={handleMobileMenuClose}>
        <a className='link' rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sandip-rout-5264421ba/'>
          <p>.linkedIn()</p>
        </a>
      </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root}  position="static">
        <Container className={classes.flexnav} maxWidth='lg'>
        <Link style={{textDecoration:'none', color:"inherit"}}  to='/' >
          <p className={classes.heading}>
            SR.
          </p>
        </Link>
          <div className={classes.sectionDesktop}>
          <Link className='link' to='/about' >
            <p className={classes.font} >
                .about()
            </p>
          </Link>
          <Link className='link' to='/work' >
            <p className={classes.font} >
                .work()
            </p>
          </Link>

          <Link className='link' to='/contact' >
            <p className={classes.font} >
                .contact()
            </p>
          </Link>

            <a className='link' rel="noreferrer" target='_blank' href='https://github.com/sandip-77'>
                <IconButton className={classes.color}>
                    <GitHubIcon/> 
                </IconButton>
            </a>
           <a className='link' rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sandip-rout-5264421ba/'>
           <IconButton className={classes.color}>
              <LinkedInIcon/> 
           </IconButton>
           </a>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
