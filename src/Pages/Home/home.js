import React, { useState } from "react";
import {
  AppBar,
  Box,
  Fab,
  TextField,
  Card,
  Toolbar,
  Divider,
  Slide,
  useScrollTrigger,
  IconButton,
  CardActions,
  CardContent,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  CardMedia,
} from "@mui/material";
import Banner from "../../assets/images/dbanner.jpg";
import "./home.scss";
import { MenuOpen, KeyboardArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import log from "../../assets/images/New folder/1 (3).jpg";
import login from "../../assets/images/login.jpg";
import register from "../../assets/images/register.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faWallet,
  faBlog,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { faAmazonPay, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import WorldMap from "react-world-map";
import ScrollTop from "../../Component/scrolltotop.js";
import Footer from "../HeaderandFooter/footer.js";

// function HideOnScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//         target: window ? window() : undefined,
//     });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }

function Home(props) {
  // const [anchorElNav, setAnchorElNav] = useState(false);
  const [selected, onSelect] = useState(false);

  // const handleOpenNavMenu = (e) => {
  //     setAnchorElNav(e.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //     setAnchorElNav(false);
  // };

  return (
    <div>
      <Box sx={{ backgroundColor: "#00000030" }}>
        <img className="img" src={Banner}></img>
      </Box>
      {/* <Box sx={{ fontWeight: 500}} className='headerbox'>
                <Typography variant="h1" sx={{ fontWeight: 500}} align="center" >Survience+</Typography><br />
                <Typography variant="h5" sx={{ fontWeight: 600}} align="center" >Healthcare Surveys, Simplified Opinions</Typography><br /><br />
                <Typography variant="h6" sx={{ fontWeight: 600}} align="center" >One step forward to share your opinion, is a step forward to building a better healthcare ecosystem. </Typography>
            </Box> */}

      {/* <Box textAlign='center'>
                <Container >
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </Container>
            </Box> */}
      {/* <Container className='appbar'>
                <HideOnScroll {...props}>
                    <AppBar id='appbar' >
                        <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
                            <Toolbar className="tool" >
                                <CardMedia component="img" image={logo} alt="Survience" sx={{ mr: 2, width: '18%', height: '100%', display: { xs: 'none', md: 'flex' } }} />
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" >
                                        <MenuOpen />
                                    </IconButton>
                                    <Menu open={anchorElNav} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none', width: '50%' }, }} >
                                        <MenuItem>
                                            <Typography sx={{ mx: 3, color: 'black', display: 'block' }} >Home</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 3, color: 'black', display: 'block' }} >About us</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 3, color: 'black', display: 'block' }} >Contact Us</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography sx={{ mx: 3, color: 'black', display: 'block' }} >Blog</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <CardMedia component="img" image={logo} alt="Survience" sx={{ flexGrow: 0, width: "15%", display: { xs: 'flex', md: 'none' } }} />

                                <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                                    <Typography sx={{ mx: 3, display: 'block' }} ><a >Home</a></Typography>
                                    <Typography sx={{ mx: 3, display: 'block' }} ><a >Contact us</a></Typography>
                                    <Typography sx={{ mx: 3, display: 'block' }} ><a>About Us</a></Typography>
                                    <Typography sx={{ mx: 3, display: 'block' }} ><a>Blog</a></Typography>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>

                </HideOnScroll>

                <Box id="navbtns" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <a href="#home"><FontAwesomeIcon icon={faHouse} /><span id="itemreveal">Home</span></a>
                    <a href="#services"><FontAwesomeIcon icon={faUser} /><span id="itemreveal">Services</span></a>
                    <a href="#contact"><FontAwesomeIcon icon={faBlog} /> <span id="itemreveal">Contact</span></a>
                </Box>


                <Typography variant="h1" align="center" >Survience +</Typography><br />
                <Typography variant="h5" align="center" >Healthcare Surveys, Simplified Opinions</Typography><br /><br />
                <Typography variant="h6" align="center" >One step forward to share your opinion, is a step forward to building a better healthcare ecosystem. </Typography>
            </Container> */}
      <Container
        maxWidth="lg"
        className="login"
        sx={{ display: { xs: "block", md: "flex" }, mt: 4 }}
      >
        {/* <Box sx={{ display: { xs: 'none', md: 'block' }, maxWidth: 400 }}  >
                    <Card sx={{ maxWidth: 345, mt: 4, mb: 4 }}>
                        <CardMedia
                            component="img"
                            height="345"
                            image={log}
                            alt="Register"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Begin Opinionating
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center', mt: 2, mb: 2 }}>
                            <Button variant='contained'>Login</Button>
                        </CardActions>
                    </Card>
                </Box> */}

        <Box sx={{ mt: 4, mb: 4 }}>
          <CardMedia
            component="img"
            image={register}
            alt="Survience"
          ></CardMedia>
          <Card sx={{ boxShadow: "0px 0px 15px #00000050" }}>
            <CardContent align="center">
              <Typography variant="h6">Begin Opinionating</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", mt: 1, mb: 1 }}>
              <Button variant="contained">
                <Link to="/registration" style={{ color: "white" }}>
                  Register
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box sx={{ mt: 4, mb: 4 }}>
          {/* <Card > */}
          <CardMedia component="img" image={login} alt="Survience"></CardMedia>
          {/* </Card> */}
          <Card sx={{ boxShadow: "0px 0px 15px #00000050" }}>
            <CardContent align="center">
              <Typography variant="h6">Already Signed?</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", mt: 1, mb: 1 }}>
              <Button variant="contained">Signin</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
      <Container>
        <Typography align="center" variant="h5">
          Join our distinguished advisory healthcare panel. You can provide your
          opinions through one of our various methodologies, such as Online
          surveys, Telephonic, Tele-web Interviews and many more
        </Typography>
        <br />
        <br />

        <Typography align="center" variant="h3">
          Participate. Share Opinions. Get Paid
        </Typography>
        <br />
        <br />
        <Box className="map">
          <WorldMap selected={selected} />
        </Box>
      </Container>
      <br />
      <br />
      <Typography align="center" variant="h3">
        Our Reward Partners
      </Typography>
      <br />

      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{ mt: 4, mb: 4, width: "20%", display: { textAlign: "center" } }}
        >
          <FontAwesomeIcon size="4x" icon={faAmazonPay} />
          <Typography sx={{ mt: 2 }} variant="h6">
            {" "}
            Amazon Pay{" "}
          </Typography>
        </Box>
        <Box
          sx={{ mt: 4, mb: 4, width: "20%", display: { textAlign: "center" } }}
        >
          <FontAwesomeIcon size="4x" icon={faCcVisa} />
          <Typography sx={{ mt: 2 }} align="center" variant="h6">
            {" "}
            Visa{" "}
          </Typography>
        </Box>
        <Box
          sx={{ mt: 4, mb: 4, width: "20%", display: { textAlign: "center" } }}
        >
          <FontAwesomeIcon size="4x" icon={faWallet} />
          <Typography sx={{ mt: 2 }} align="center" variant="h6">
            {" "}
            Wallet
          </Typography>
        </Box>
        <Box
          sx={{ mt: 4, mb: 4, width: "20%", display: { textAlign: "center" } }}
        >
          <FontAwesomeIcon size="4x" icon={faMoneyBill} />
          <Typography sx={{ mt: 2 }} align="center" variant="h6">
            Soft Cash{" "}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
