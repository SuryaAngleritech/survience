import React, { useState } from 'react'
import { AppBar, Box, Fab, TextField, Card, Toolbar, Divider, Slide, useScrollTrigger, IconButton, CardActions, CardContent, Typography, Menu, Container, Button, MenuItem, CardMedia } from '@mui/material';
import Banner from '../../assets/images/dbanner.jpg'
// import './home.scss';
import { MenuOpen, KeyboardArrowUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import log from '../../assets/images/New folder/1 (3).jpg'
import login from '../../assets/images/login.jpg'
import register from '../../assets/images/register.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faWallet, faBlog, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from '../../Component/scrolltotop.js';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Header(props) {
    const [anchorElNav, setAnchorElNav] = useState(false);



    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };


    return (
            <div className='appbar'>
                <HideOnScroll {...props}>
                    <AppBar id='appbar' >
                        <Container maxWidth="lg" >
                            <Toolbar className="tool" >
                                <CardMedia component="img" image={logo} alt="Survience" sx={{ mr: 2, width: '18%', height: '100%', display: { xs: 'none', md: 'flex' } }} />
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" >
                                        <MenuOpen />
                                    </IconButton>
                                    <Menu open={anchorElNav} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none', width: '50%' }, }} >
                                        <MenuItem>
                                            <Typography sx={{ mx: 2, color: 'black', display: 'block' }} >Home</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 2, color: 'black', display: 'block' }} >About us</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 2, color: 'black', display: 'block' }} >Contact Us</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 2, color: 'black', display: 'block' }} >Blog</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 2, color: 'black', display: 'block' }} ><Link to='/login'>Login Page</Link></Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <CardMedia component="img" image={logo} alt="Survience" sx={{ flexGrow: 0, width: "15%", display: { xs: 'flex', md: 'none' } }} />

                                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                                    <Typography sx={{ mx: 1, display: 'block' }} ><Link to='/' >Home</Link></Typography>
                                    <Typography sx={{ mx: 1, display: 'block' }} ><a >Contact us</a></Typography>
                                    <Typography sx={{ mx: 1, display: 'block' }} ><a>About Us</a></Typography>
                                    <Typography sx={{ mx: 1, display: 'block' }} ><a>Blog</a></Typography>
                                    <Typography sx={{ mx: 1, display: 'block' }} ><Link to='/login'>Login Page styles</Link></Typography>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>

                </HideOnScroll>

                <ScrollTop {...props}>
                    <Box id="navbtns" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <a href="#home"><FontAwesomeIcon color="danger" icon={faHouse} /><span id="itemreveal">Home</span></a>
                        <a href="#services"><FontAwesomeIcon icon={faUser} /><span id="itemreveal">Services</span></a>
                        <a href="#contact"><FontAwesomeIcon icon={faBlog} /> <span id="itemreveal">Contact</span></a>
                    </Box>
                </ScrollTop>

                <ScrollTop {...props}>
                    <Fab color="warning" size="small" >
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollTop>
            </div>
    )
}

export default Header;