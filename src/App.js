import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Input,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
} from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  timeCountBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  speedActive: {
    background: "#000",
    color: "#fff",
  },
  warningText: {
    color: "#ff0000",
  },
}));

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function App() {
  const classes = useStyles();

  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [blinking, setBlinking] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState("");
  const [currentSeconds, setCurrentSeconds] = useState("");
  const [timerStart, setTimerStart] = useState(false);
  const [speed, setSpeed] = useState("one");

  const handleChange = (e) => {
    setMinute(formatTime(e.target.value));
    setTotalSeconds(e.target.value * 60);
    setSecond(0);
    setCurrentSeconds(e.target.value * 60 + second);
    setTimerStart(false);
  };

  // Third Attempts
  useEffect(() => {
    let timeSpeed = 1000;
    if (speed === "one") timeSpeed = 1000;
    if (speed === "two") timeSpeed = 750;
    if (speed === "three") timeSpeed = 500;
    if (timerStart) {
      if (minute > 0 && second === 0) {
        setSecond(59);
        setMinute((minute) => formatTime(minute - 1));
      }
      const timer =
        second > 0 &&
        setInterval(() => setSecond(formatTime(second - 1)), timeSpeed);
      setCurrentSeconds(minute * 60 + second);
      console.log(currentSeconds);

      if(currentSeconds === "001")
      {
        setTimerStart(false);
      }
      return () => clearInterval(timer);
    }
  }, [second, minute, timerStart, speed]);
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        COUNTDOWN
      </Typography>

      <div>
        <Input
          placeholder="(Min)"
          onChange={(event) => handleChange(event)}
          inputProps={{ "aria-label": "description" }}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
          onClick={() => setTimerStart(true)}
        >
          Start
        </Button>
      </div>

      <Typography className={classes.margin} variant="h5" gutterBottom>
        {currentSeconds < totalSeconds / 2
          ? currentSeconds === "000"
            ? "Time’s up!"
            : "More than halfway there!"
          : ""}
      </Typography>

      <div className={classes.timeCountBlock}>
        <Typography
          className={currentSeconds < 20 ? currentSeconds < 10 && timerStart ? "blink" : classes.warningText : ""}
          variant="h1"
          gutterBottom
        >
          <span>{minute ? minute : "00"} : {second ? second : "00"}</span>
          
        </Typography>

        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            component="span"
            onClick={() => setTimerStart(!timerStart)}
          >
            {timerStart ? (
              <PauseCircleOutlineIcon fontSize="large" />
            ) : (
              <PlayCircleOutlineIcon fontSize="large" />
            )}
          </IconButton>
        </label>
      </div>

      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          className={speed === "one" ? classes.speedActive : ""}
          onClick={() => setSpeed("one")}
        >
          1.0X
        </Button>
        <Button
          className={speed === "two" ? classes.speedActive : ""}
          onClick={() => setSpeed("two")}
        >
          1.5X
        </Button>
        <Button
          className={speed === "three" ? classes.speedActive : ""}
          onClick={() => setSpeed("three")}
        >
          2.0X
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
