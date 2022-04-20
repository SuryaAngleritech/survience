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
} from "@mui/material";
// import { currencies } from '../country';
// import Registration from '../registarion'
import axios from "axios";
import {currencies} from '../values.js';
import "./registration.scss";

const FormOne = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState("");
  const [state, setstate] = useState({
    countries_id: false,
    npinumber: false,
  });
  // const [npinumber, setnpinumber] = useState("");
  const [value, setvalue] = useState({
    npinumber:"",
    countries_id: ""
    });
  // const [countries_id, setCountry] = useState("");
  const [datas, setDatas] = useState([]);
  const data = {};


  const given = {
    number: value.npinumber,
    version: "2.1",
  };
  async function continueTo(e) {
    if (value.npinumber !== "") {
      // axios.post('https://npiregistry.cms.hhs.gov/api/?version=2.0&number=1740296946').then((res)=> res.results

      // )
      // axios.get(`https://npiregistry.cms.hhs.gov/api/?version=2.0&number=${npinumber}`).then((res) => {
      //     setDatas(res.data)
      //   })
      try {
        // const response = await fetch(`https://npiregistry.cms.hhs.gov/api/?number=${npinumber}&version=2.1`)
        // console.log(response);
        axios
          .post("https://npiregistry.cms.hhs.gov/api", given)
          .then((response) => {
            setDatas(response.data);
          });
      } catch (error) {
        console.log(error);
      }

      // .then((res) => {
      //     try {
      //         if(res.data != ""){
      //             setDatas(res.data);
      //         }
      //     } catch (error) {
      //         console.log(error);
      //     }
      // })
    }
    e.preventDefault();
    // if (value.npinumber !== "") {
    //   data.npinumber = npinumber;
    // }
    // if (countries_id !== "") {
    //   data.countries_id = countries_id;
    // }
    if (selectedValue == "a") {
      if (selectedValues == "a") {
        if (value.countries_id !== "") {
          if (value.npinumber !== "") {
            props.handleClick(e, "next", value);
          } else {
            setstate({
              ...state,
              npinumber: true,
            });
          }
        } else {
          setstate({
            ...state,
            countries_id: true,
            npinumber: true,
          });
        }
      } else {
        if (value.countries_id == "") {
          setstate({
            ...state,
            countries_id: true,
          });
        } else if (value.countries_id !== "") {
          props.handleClick(e, "next", value);
        }
      }
    } else if (selectedValue == "b") {
      if (value.countries_id == "") {
        setstate({
          ...state,
          countries_id: true,
        });
      }
      if (value.countries_id !== "") {
        props.handleClick(e, "next", value);
      }
    } else {
      if (value.countries_id == "") {
        setstate({
          ...state,
          countries_id: true,
        });
      } else if (value.npinumber == "") {
        setstate({
          ...state,
          npinumber: true,
        });
      }
    }
  }
  return (
    <div
      className={
        props.state == 1 || props.state == 4 ? "registration" : "disabled"
      }
    >
      <Card>
        <Box
          sx={{
            flexGrow: 1,
            m: 2,
            minWidth: "50vw",
            display: { xs: "flex", md: "flex" },
          }}
        >
          <TextField
            id="country"
            size="small"
            className="form-control .mui-fixed"
            select
            label="Select"
            value={value.countries_id}
            error={state.countries_id} // onChange={handleChange}
            helperText="Please select your Country"
            onChange={(e) => setvalue({...value, countries_id: e.target.value})}
            //onChange={(e) => Country(e.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl sx={{ ml: 2, minWidth: "50%" }}>
            <FormLabel id="radio">Are you a Healthcare Professional?</FormLabel>
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
        </Box>

        <Box sx={{ flexGrow: 1, m: 2, display: { xs: "flex", md: "block" } }}>
          {selectedValue == "a" ? (
            <Box sx={{ display: { md: "flex" } }}>
              <Box className="col-lg-6">
                <label>Do You Have NPI Number?</label>
                <br />
                <label>&nbsp;Yes</label>
                <Radio
                  checked={selectedValues == "a"}
                  onChange={(e) => setSelectedValues(e.target.value)}
                  value="a"
                  name="radio-buttons"
                />
                <label>No</label>
                <Radio
                  checked={selectedValues == "b"}
                  onChange={(e) => setSelectedValues(e.target.value)}
                  value="b"
                  name="radio-buttons"
                />
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Box>
        {selectedValues == "a" ? (
          <Box className="col-lg-6">
            <TextField
              //className="col-lg-12"
              id="npinumber"
              label="NPI Number"
              type="number"
              maxLength="10"
              placeholder="NPI Number"
              className="form-control .mui-fixed"
              value={value.npinumber}
              error={state.npinumber}
              onChange={(e) => setvalue({...value,npinumber:e.target.value})}
              variant="outlined"
              helperText="Please select your NPI number"
              disabled={selectedValues == "b"}
              required
            />
          </Box>
        ) : (
          ""
        )}
        {props.state == 1 ? (
          <Box className="col-lg-12">
            <Button
              variant="contained"
              className="float-right"
              onClick={continueTo}
            >
              Next
            </Button>
            {/* <button className="float-left" onClick={(e) => props.handleClick(e, 'prev')}>Login</button> */}
          </Box>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default FormOne;
