import React, { useState } from "react";
import "./registration.scss";
import {
  AppBar,
  Box,
  Fab,
  Select,
  InputLabel,
  OutlinedInput,
  TextField,
  FormControl,
  Card,
  FormLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
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
import { organisataion, beds } from "../values.js";

const FormThree = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState("");
  const [drop, setdrop] = useState(organisataion);
  const [over, setover] = useState({
    a: false,
    b: false,
  });
  const [state, setstate] = useState({
    years: "",
    organisation: "",
    beds: "",
    patientcare: 0,
    administrative: 0,
    other: 0,
    academics: 0,
    hospitalsetting: 0,
    othersetting: 0,
    privatepractice: 0,
    outpatientsetting: 0,
    confirmpassword: "",
    password: ""
    // total:0
  });
  // const [others, setothers] = useState(false);
  const [error, seterror] = useState({
    years: false,
    specify: false,
    password: false,
    confirmpassword: false
  });

  function handleClick(e, name) {
    if (state.password == state.confirmpassword) {
      e.preventDefault();
      props.handleClick(e, name, state);
    } else {
      seterror({ ...error, password: true })
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name == "years") {
      const re = /^[0-9\b]+$/;
      if (value > 70 || value < 0) {
        seterror({ ...error, years: true });
        setstate({ ...state, years: "" });
      } else if (value === "" || re.test(value)) {
        setstate({ ...state, years: value });
        seterror({ ...error, years: false });
      }
    }
    if (name == "organisataion") {
      if (value == "Others (Please specify)") {
        seterror({ ...error, specify: true });
        setstate({ ...state, organisation: value });
        state.specify = "";
      } else {
        seterror({ ...error, specify: false });
        setstate({ ...state, organisation: value });
      }
    }
    if (name == "beds") {
      seterror({ ...error, specify: false });
      setstate({ ...state, beds: value });
    }
    if (
      name == "patientcare" ||
      name == "administrative" ||
      name == "academics" ||
      name == "other"
    ) {
      // var number = Number(e.target.value);
      // console.log(number);
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setstate({ ...state, [name]: +value });
      }
    }

    if (
      name == "hospitalsetting" ||
      name == "othersetting" ||
      name == "privatepractice" ||
      name == "outpatientsetting"
    ) {
      // var number = Number(e.target.value);
      // console.log(number);
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setstate({ ...state, [name]: +value });
      }
    } else {
      setstate({
        ...state,
        [name]: value,
      });
    }


  }

  const totala =
    state.academics + state.other + state.administrative + state.patientcare;
  if (totala > 100) {
    setstate({
      ...state,
      academics: 0,
      other: 0,
      patientcare: 0,
      administrative: 0,
    });
    setover({ ...over, a: true });
  }
  const totalb =
    state.hospitalsetting +
    state.othersetting +
    state.privatepractice +
    state.outpatientsetting;
  if (totalb > 100) {
    setstate({
      ...state,
      hospitalsetting: 0,
      othersetting: 0,
      privatepractice: 0,
      outpatientsetting: 0,
    });
    setover({ ...over, b: true });
  }

  return (
    <div
      className={
        props.state == 3 || props.state == 4
          ? "active registration"
          : "disabled"
      }
    >
      <Card>
        <Box
          component="form"
          sx={{ m: 1, width: "82ch" }}
          onSubmit={(e) => handleClick(e, "next")}
          Validate
          autoComplete="off"
        >
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>
              Are you board certified or board eligible in your primary
              specialty?
            </FormLabel>
            <RadioGroup row name="">
              <FormControlLabel
                value="a"
                control={
                  <Radio
                    onChange={(e) => setSelectedValue(e.target.value)}
                    checked={selectedValue == "a"}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="b"
                control={
                  <Radio
                    onChange={(e) => setSelectedValue(e.target.value)}
                    checked={selectedValue == "b"}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>
              Which of the following best describes the type of organization you
              work for?
            </FormLabel>
            {/* <InputLabel id="">Organisation</InputLabel> */}
            <Select
              // label="Organisation"
              // displayEmpty
              name="organisataion"
              value={state.organisation}
              onChange={handleChange}
              size="small"
            >
              {drop.map((i) => (
                <MenuItem key={i.id} value={i.value}>
                  {i.value}
                </MenuItem>
              ))}
            </Select>
            {
              <div
                style={
                  error.specify == true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <FormControl sx={{ mt: 2, width: "40ch" }}>
                  <TextField
                    type="text"
                    multiline
                    rows={4}
                    maxRows={4}
                    variant="outlined"
                    onChange={handleChange}
                    value={state.specify}
                    name="specify"
                    label="Others Specify"
                    required
                  ></TextField>
                </FormControl>
              </div>
            }
          </FormControl>
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>
              How long have you been employed at your facility/organization?
            </FormLabel>
            <TextField
              type="text"
              variant="outlined"
              onChange={handleChange}
              error={error.years}
              helperText={error.years ? "Value must be within 0 to 70" : ""}
              value={state.years}
              size="small"
              name="years"
              label="Years"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "80ch" }}>
            <FormLabel>
              What percentage of your professional time do you spend on each of
              the following activities?
            </FormLabel>
            <Typography variant="caption">
              Please ensure your response equals to 100
            </Typography>
            <div style={{ display: "flex" }}>
              <Card sx={{ width: "80%" }}>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Direct patient care</FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Direct patient care"
                    size="small"
                    onChange={handleChange}
                    value={state.patientcare}
                    name="patientcare"
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Academics/Teaching </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Academics/Teaching"
                    size="small"
                    onChange={handleChange}
                    name="academics"
                    value={state.academics}
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Administrative tasks</FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Administrative"
                    size="small"
                    onChange={handleChange}
                    name="administrative"
                    value={state.administrative}
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Other</FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Other"
                    size="small"
                    onChange={handleChange}
                    value={state.other}
                    name="other"
                    required
                  ></TextField>
                </FormControl>
              </Card>
              <Card sx={{ width: "20%", p: 2, display: { md: "grid" } }}>
                <Typography sx={{ mb: 2 }} align="center" variant="h4">
                  {totala}
                </Typography>
                {over.a ? (
                  <Typography color="red" variant="button">
                    Value Must be within 100
                  </Typography>
                ) : (
                  <></>
                )}
                {/* <Button onClick={emptyValue} >value</Button> */}
              </Card>
            </div>
          </FormControl>
          <FormControl sx={{ m: 2, width: "80ch" }}>
            <FormLabel>
              What percent of your professional time is spent in each of the
              following settings?{" "}
            </FormLabel>
            <Typography variant="caption">
              Please ensure your response equals to 100
            </Typography>
            <div style={{ display: "flex" }}>
              <Card sx={{ width: "80%" }}>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Hospital/Acute Care Setting</FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Hospital/Acute Care Setting"
                    size="small"
                    value={state.hospitalsetting}
                    onChange={handleChange}
                    name="hospitalsetting"
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Outpatient Care Setting </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Outpatient Care Setting"
                    size="small"
                    value={state.outpatientsetting}
                    onChange={handleChange}
                    name="outpatientsetting"
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Private practice/office </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Private practice/office"
                    size="small"
                    value={state.privatepractice}
                    onChange={handleChange}
                    name="privatepractice"
                    required
                  ></TextField>
                </FormControl>
                <FormControl sx={{ m: 2, width: "45%" }}>
                  <FormLabel>Other setting</FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputProps={{ maxLength: 3, minLength: 0 }}
                    InputLabelProps={{ shrink: true }}
                    label="Other setting"
                    size="small"
                    value={state.othersetting}
                    onChange={handleChange}
                    name="othersetting"
                    required
                  ></TextField>
                </FormControl>
              </Card>

              <Card sx={{ width: "20%", p: 2, display: { md: "grid" } }}>
                <Typography sx={{ mb: 2 }} align="center" variant="h4">
                  {totalb}
                </Typography>
                {over.b ? (
                  <Typography color="red" variant="button">
                    Value Must be within 100
                  </Typography>
                ) : (
                  <></>
                )}
                {/* <Button onClick={emptyValue} >value</Button> */}
              </Card>
            </div>
          </FormControl>
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>
              How many licensed beds does your hospital have?
            </FormLabel>
            <Select
              label="Organisation"
              displayEmpty
              // notched={true}
              name="beds"
              value={state.beds}
              onChange={handleChange}
              size="small"
            >
              {beds.map((i) => (
                <MenuItem key={i.id} value={i.value}>
                  {i.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>
              Is your hospital/organization part of a health system?{" "}
            </FormLabel>
            <RadioGroup row name="">
              <FormControlLabel
                value="Yes"
                control={
                  <Radio
                    onChange={(e) => setSelectedValues(e.target.value)}
                    checked={selectedValues == "Yes"}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={
                  <Radio
                    onChange={(e) => setSelectedValues(e.target.value)}
                    checked={selectedValues == "No"}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>Office/Practice/Hospital Name</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="Office/Practice/Hospital Name"
            //required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>Address</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="Address"
            // required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>City</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="City"
            // required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>State</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="State"
            // required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <FormLabel>Postal / Zip / Pin Code</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="Postal / Zip / Pin Code"
            // required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>Referal Code</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="years"
              label="Referal Code"
            // required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>Password</FormLabel>
            <TextField
              type="password"
              variant="outlined"
              size="small"
              name="password"
              label="Password"
              value={state.password}
              onChange={handleChange}
              required
              error={error.password}
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "40ch" }}>
            <FormLabel>Confrim Password</FormLabel>
            <TextField
              type="password"
              variant="outlined"
              size="small"
              name="confirmpassword"
              label="Confrim Password"
              error={error.password}
              required
              value={state.confirmpassword}
              onChange={handleChange}
            ></TextField>
          </FormControl>
          {props.state == 3 ? (
            <Box sx={{ m: 2, width: "80ch" }}>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                type="submit"
                className="float-right"
              >
                {props.state == 3 ? "Submit" : "Next"}
              </Button>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                className="float-right"
                onClick={(e) => handleClick(e, "prev")}
              >
                Previous
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Card>
    </div>
  );
};

export default FormThree;

// import PropTypes from 'prop-types';
// import React from 'react';

// export default class FormThree extends React.Component {
//   static defaultProps = { value: 0 };

//   static propTypes = { value: PropTypes.number };

//   state = { a: 0, b: 0 };

//   result = () => this.state.a + this.state.b + this.props.value;

//   updateA = e => this.setState({ a: +e.target.value });

//   updateB = e => this.setState({ b: +e.target.value });

//   render() {
//     return (
//       <div>
//         A: <input onChange={this.updateA} value={this.state.a} />
//         B: <input onChange={this.updateB} value={this.state.b} />
//         Result: {this.result()}
//       </div>
//     );
//   }
// }
