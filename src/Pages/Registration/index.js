import React, { useState, useEffect } from "react";
import FormOne from "./formone.js";
import FormTwo from "./formTwo.js";
import FormThree from "./formThree.js";
import axios from "axios";
import { AppBar, Box, Fab, Stepper, StepButton, Step, TextField, FormControl, Card, FormLabel, Radio, FormControlLabel, RadioGroup, Toolbar, Divider, Slide, useScrollTrigger, IconButton, CardActions, CardContent, Typography, Menu, Container, Button, MenuItem, CardMedia, } from "@mui/material";
import "./registration.scss";
import banner from "../../assets/images/panel.jpg";

const Registration = () => {
  const [state, setState] = useState(1);
  const [first, setfirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();

  function handleClick(e, name, val) {
    e.preventDefault();
    console.log("val", val);
    if (name == "next") {
      setState(state + 1);
    } else {
      setState(state - 1);
    }
    if (state == 1) {
      setfirst({
        ...first,
        val,
      })
    } else if (state == 2) {
      setSecond({
        ...second,
        val,
      })
    } else if (state == 3) {
      setThird({
        ...third,
        val,
      });
    }

  }
  // function handleClicktwo(e, name, val) {
  //   e.preventDefault();
  //   console.log("val", val);
  //   if (name == "next") {
  //     setState(state + 1);
  //   } else {
  //     setState(state - 1);
  //   }
  // }
  // function handleClickthree(e, name, val) {
  //   e.preventDefault();
  //   console.log("val", val);
  //   if (name == "next") {
  //     setState(state + 1);
  //   } else {
  //     setState(state - 1);
  //   }

  // }
  // const cerdiential = {
  //   username: "newuser",
  //   password: "test",
  // };
  const ContinueTo = () => {
    // console.log("first", first.val);
    // console.log("second", second.val);
    // console.log("third", third.val);
    let value = { ...first.val, ...second.val, ...third.val };
    // const requestOptions = {
    //   body: value,
    //   // Authorization: cerdiential,
    // };
    // let headers = {
    //   method: "POST",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   Authorization: cerdiential,
    // };
    console.log("value", value);

    try {
      axios.post("http://192.168.0.57/surviencenew/api/users/register", value)     // headers,       
        .then((response) => {
          console.log("response", response);
        });
    } catch (error) {
      console.log("err", error);
    }

  };
  return (
    <div style={{ margin: "15vh 0" }}>
      <div className="cbanner">
        {/* <img src={banner}></img> */}
        {/* <div> */}
        <Typography variant="h3" align="center">
          Registration
        </Typography>
        {/* </div> */}
      </div>
      <Box>
        <FormOne
          state={state} 
          handleClick={(e, name, val) => handleClick(e, "next", val)}
        />
        <FormTwo
          state={state} 
          handleClick={(e, name, val) => handleClick(e, name, val)}
        />
        <FormThree
          state={state}
          handleClick={(e, name, val) => handleClick(e, name, val)}
        />
        {state == "4" ? (
          <Button
            variant="contained"
            className="float-right"
            onClick={ContinueTo}
            style={{ marginRight: "23%" }}
          >
            Next
          </Button>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default Registration;
