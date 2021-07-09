import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import itemData from '../itemData';
import {  PageviewOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'inherit',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)', 
  },
  titleBarDown:{
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function AdvancedImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={6} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem className={classes.margin} key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`page ${item.title}`} className={classes.icon}>
                 <a rel="noreferrer" target="_blank" href={item.link} className='link'>
                  <PageviewOutlined />
                  </a>
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
    </div>
  );
}