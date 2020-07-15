import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  timeCountBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  warningText: {
    color: "#ff0000",
    margin: 0,
  },
}));
const Countdown = React.memo(
  ({ currentSeconds, minute, second, timerStart, setTimerStart }) => {
    const classes = useStyles();

    return (
      <div className={classes.timeCountBlock}>
        <Typography
          className={
            currentSeconds < 20
              ? currentSeconds < 10 && timerStart
                ? "blink"
                : classes.warningText
              : "timeText"
          }
          variant="h1"
          gutterBottom
        >
          <span>
            {minute ? formatTime(minute) : "00"} :{" "}
            {second ? formatTime(second) : "00"}
          </span>
        </Typography>

        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            component="span"
            onClick={() => setTimerStart(!timerStart)}
          >
            {timerStart ? (
              <PauseCircleOutlineIcon fontSize="large" className="buttonIcon" />
            ) : (
              <PlayCircleOutlineIcon fontSize="large" className="buttonIcon" />
            )}
          </IconButton>
        </label>
      </div>
    );
  }
);
export default Countdown;
