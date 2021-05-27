import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCard } from '@material-ui/icons';
import classes from '*.module.css';

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <ToolBar>
          <Typography>
            <img src={} alt="Golden Shoe" />
          </Typography>
        </ToolBar>
      </AppBar>
    </>
  )
}

export default Navbar
