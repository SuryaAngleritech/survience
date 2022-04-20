import React from 'react';
import { AppBar, Box, TextField, Zoom,Card, Toolbar, Divider, Slide, useScrollTrigger, IconButton, CardActions, CardContent, Typography, Menu, Container, Button, MenuItem, CardMedia } from '@mui/material';

function ScrollTop(props) {
    const { children, childwindow } = props;

    const trigger = useScrollTrigger({
      target: childwindow ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      
      window.scrollTo({ top: 0, behavior: 'smooth' });

    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  export default ScrollTop