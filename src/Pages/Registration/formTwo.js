import React, { useState } from "react";
import {
  AppBar,
  Box,
  Fab,
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
  Alert,
  AlertTitle,
  Stack,
} from "@mui/material";
import "./registration.scss";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const FormTwo = (props) => {
  const initailstate = {
    first_name: "",
    last_name: "",
    date_of_birth: "", //new Date()
    email: "",
    mobile_no: "",
    gender: "",
    // user: {
    countries_id: 1,
    state_id:"",
    city_id:"",
    addressline1: "",
    addressline2: "",
    zip_postal_pincode: "",
    subspeciality: "",
    health_primary_speciality_id: "",
    // }
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [state, setstate] = useState(initailstate);
  // const [value, setValue] = useState(new Date());
  const [error, seterror] = useState({
    first_name: false,
    last_name: false,
    addressline1: false,
    addressline2: false,
    date_of_birth: false,
    zip_postal_pincode: false,
    mobile_no: false,
    email: false,
    subspeciality: false,
    health_primary_speciality_id: false,
    gender: false,
    city_id:false,
    state_id:false
  });
  // var newdate = new Date();
  // var date = new Date(newdate.getDate());
  // console.log(date);

  function handleChange(e) {
    var val = e.target.value;
    var name = e.target.name;

    if (name == "mobile_no") {
      const re = /^[0-9\b]+$/;
      if (val === "" || re.test(val)) {
        setstate({ ...state, mobile_no: val });
      }
    } else if (name == "zip_postal_pincode") {
      const re = /^[0-9\b]+$/;
      if (val === "" || re.test(val)) {
        setstate({ ...state, zip_postal_pincode: val });
      }
    } else {
      setstate({
        ...state,
        [name]: val,
      });
    }
  }

  function clearValue() {
    setstate({
      ...state,
      first_name: "",
      last_name: "",
      date_of_birth: "",
      addressline1: "",
      addressline2: "",
      zip_postal_pincode: "",
      mobile_no: "",
      email: "",
      gender: "",
    });
  }

  // function validation() {
  //     // if (error.firstname == "" || error.lastname == "" || error.address1 == "" || error.address2 == "" || error.zipcode == "") {
  //     //     seterror({...error,firstname:true,lastname:true,address1:true,address2:true,zipcode:true })
  //     // }
  //     if (state.firstname == "") {
  //         seterror({ ...error, firstname: true })
  //     };
  //     if (state.lastname == "") {
  //         seterror({ ...error, lastname: true })
  //     };
  // }

  function handleClick(e, name) {
    e.preventDefault();
    if (state.gender == "") {
      return alert("Please fill All fields ");
    }
    props.handleClick(e, name, state);
  }

  return (
    <div
      className={
        props.state == 2 || props.state == 4
          ? "active registration"
          : "disabled"
      }
    >
      <Card>
        <Box
          component="form"
          sx={{ m: 1, width: "90ch" }}
          onSubmit={(e) => handleClick(e, "next")}
          Validate
          autoComplete="off"
        >
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>First Name</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="first_name"
              onChange={handleChange}
              error={error.first_name}
              value={state.first_name}
              label="First Name"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Last Name</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="last_name"
              onChange={handleChange}
              error={error.last_name}
              value={state.last_name}
              label="Last Name"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Date of Birth</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={state.date_of_birth}
                onChange={(nV) => { setstate({ ...state, date_of_birth: nV }); }}
                label="Date of Birth"
                renderInput={(props) => (
                  <TextField
                    {...props}
                    id="date-picker-dialog"
                    size="small"
                    className="form-control"
                    inputformat="DD-MMM-YYYY"
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="">
              <FormControlLabel
                value="Male"
                control={
                  <Radio
                    onChange={(e) =>
                      setstate({ ...state, gender: e.target.value })
                    }
                    checked={state.gender == "Male"}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="Female"
                control={
                  <Radio
                    onChange={(e) =>
                      setstate({ ...state, gender: e.target.value })
                    }
                    checked={state.gender == "Female"}
                  />
                }
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Address Line 1</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="addressline1"
              onChange={handleChange}
              error={error.addressline1}
              value={state.addressline1}
              label="Address Line 1"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Address Line 2</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="addressline2"
              onChange={handleChange}
              error={error.addressline2}
              value={state.addressline2}
              label="Address Line 2"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Country</FormLabel>

            <TextField
              //variant="outlined"
              size="small"
              name="country"
              onChange={handleChange}
              value={state.countries_id}
              label="Country"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>State</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="state_id"
              onChange={handleChange}
              value={state.state_id}
              label="State"
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>City</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="city_id"
              onChange={handleChange}
              value={state.city_id}
              label="City"
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Zip Code</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              name="zip_postal_pincode"
              inputProps={{ maxLength: 6 }}
              onChange={handleChange}
              error={error.zip_postal_pincode}
              value={state.zip_postal_pincode}
              label="Zip Code"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Email</FormLabel>
            <TextField
              type="email"
              variant="outlined"
              size="small"
              name="email"
              onChange={handleChange}
              error={error.email}
              value={state.email}
              label="Email"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Phone</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              name="mobile_no"
              size="small"
              inputProps={{ maxLength: 10, minLength: 10 }}
              // onInput={(e)=>  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)}
              onChange={handleChange}
              error={error.mobile_no}
              value={state.mobile_no}
              label="Phone"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Primary specialty</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              onChange={handleChange}
              error={error.health_primary_speciality_id}
              value={state.health_primary_speciality_id}
              size="small"
              name="health_primary_speciality_id"
              label="Primary specialty"
              required
            ></TextField>
          </FormControl>
          <FormControl sx={{ m: 2, width: "25ch" }}>
            <FormLabel>Subspecialty</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              onChange={handleChange}
              error={error.subspeciality}
              value={state.subspeciality}
              size="small"
              name="subspeciality"
              label="Subspecialty"
              required
            ></TextField>
          </FormControl>
          {props.state == 2 ? (
            <Box sx={{ m: 2, width: "85ch" }}>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                type="submit"
                className="float-right"
              >
                Next
              </Button>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                className="float-right"
                onClick={clearValue}
              >
                Reset
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

export default FormTwo;
