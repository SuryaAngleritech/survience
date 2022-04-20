import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
// import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  AppBar,
  Box,
  Fab,
  TextField,
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
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
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="widget1">
              <Typography color="white" variant="h4">
                About Survience+{" "}
              </Typography>
              <Typography color="white" variant="overline">
                Survience+ is an healthcare <br />
                Panel arm of Survience Research
                <br />
                and Consulting LLP.
              </Typography>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 socialLinks">
            <div className="">
              <ul>
                <li>
                  <FontAwesomeIcon
                    size="3x"
                    color="white"
                    icon={faFacebookSquare}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    size="3x"
                    color="white"
                    icon={faTwitterSquare}
                  />
                </li>
                <li>
                  <FontAwesomeIcon size="3x" color="white" icon={faLinkedin} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="widget">
              <Typography color="white" variant="h4">
                Contact us
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    {/* <Link>Panel Code of Conduct</Link> */}
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <a
                            variant="contained"
                            {...bindTrigger(popupState)}
                            style={{
                              color: "white",
                            }}
                          >
                            Code of Conduct
                          </a>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            style={{
                              width: "1300px",
                              marginTop: "-50px",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Typography
                              sx={{ mt: 2, mb: 2 }}
                              variant="h4"
                              align="center"
                            >
                              Panel of Conduct
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Panel Code of Conduct is designed to keep the
                              panel healthy and always secured during the data
                              collection process of Market Research.
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Guidelines to be followed by the panelist:
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Panelist, defines as a registered member of
                              Survience+ or www.survienceplus.com
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Registered Panelist are entitled to receive
                              Research Surveys request in the method of online
                              surveys [Quantitative] or
                              Telephonic/Tele-web/In-Person
                              Methodologies[Qualitative].
                            </Typography>

                            <Typography
                              //variant="h6"
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Survey answers/responses will be scrutinized in
                              view of the client/project requirement, any
                              answers/responses which/those do not met the
                              quality requirement is eligible to be
                              terminated/removed at the discretion of the client
                              data quality check process
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Removed responses/answers will be informed
                              within 30-45 days
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Respondents attempting to complete the survey
                              after the quota has been met or who do not qualify
                              will not be eligible to receive the honorarium. If
                              you do not qualify, your participation in the
                              survey will be terminated after a few short
                              screener questions, and no honorarium will be
                              paid.
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Honorarium/Incentives are only entitled to be
                              paid out only once the panelist completes the
                              survey in the stipulated time frame and being
                              approved on client's data quality check process
                              and approval of responses.{" "}
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Honorarium/Incentives is processed once the
                              research survey is completed. The turnaround time
                              [TAT] to be in receipt of the
                              Honorarium/Incentives is about 45-60 days once the
                              research is closed. An intimation will be shared
                              with all participants about the research closure.{" "}
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * A processing fee of $5 will be levied on all
                              incentive/honorarium payout process.{" "}
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * If you have any questions pertaining to research
                              or a particular project, you will either need to
                              reach out to{" "}
                              <a href="mailto:support@survience.com">
                                support@survience.com
                              </a>{" "}
                              or{" "}
                              <a href="mailto:pm@survience.com">
                                pm@survience.com
                              </a>
                              , please mention the survey ID on the subject line
                              for your email. Our Survey ID begin with SRC and
                              can be noted on the email invite you received.{" "}
                            </Typography>
                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * To know more about your data protection, please
                              write to our Data Protection Officer, email:{" "}
                              <span>
                                <a href="mailto:dpo@survience.com">
                                  dpo@survience.com
                                </a>
                              </span>{" "}
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    {/* <Link>Panel Code of Conduct</Link> */}
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <a
                            variant="contained"
                            {...bindTrigger(popupState)}
                            style={{
                              color: "white",
                            }}
                          >
                            Data Protection
                          </a>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            style={{
                              width: "1300px",
                              marginTop: "-100px",
                              paddingTop: "1000px",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Typography
                              sx={{ mt: 2, mb: 2, paddingTop: "70px" }}
                              variant="h4"
                              align="center"
                            >
                              Panel of Conduct
                            </Typography>

                            <Typography
                              sx={{ mt: 2, mb: 2 }}
                              variant="h2"
                              align="center"
                            >
                              Our Compliance to Data Protection
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Survience Research and Consulting LLP and its
                              healthcare arm Survience+ adheres to several codes
                              of conduct and comply to GDPR, CCPA, HIPPA, BHBIA,
                              PMRG and EphMRA.
                            </Typography>

                            {/* <Typography variant='h4' sx={{ mt: 2, mb: 2 }} >Guidelines to be followed by the panelist:</Typography> */}

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Survience Research and Consulting LLP has always
                              and will honor its users/panelist rights to data
                              privacy and protection. Our systems and data bases
                              are all complied with the latest standards and are
                              complied with. Our privacy conscious company
                              culture strengthens our commitment towards data
                              compliance.
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                              }}
                            >
                              * Our principles to data compliance is by design
                              and operational model with a minimal human
                              intervention. Our policies are regularly reviewed,
                              monitored and updated, and our teams are trained
                              on data protection and compliance every year.{" "}
                            </Typography>

                            <Typography
                              sx={{
                                mt: 2,
                                mb: 2,
                                fontSize: 13,
                                paddingLeft: 7,
                                paddingBottom: "70px",
                              }}
                            >
                              * If you have any questions in relation to data
                              protection, please write to our Data Protection
                              Officer, email:{" "}
                              <a href="mailto:dpo@survience.com">
                                dpo@survience.com
                              </a>{" "}
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
      <Divider color="white" />
      <div className="copyRightArea">
        <div className="col-12 text-center">
          <p>&copy; Copyright All rights reserved {year}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
