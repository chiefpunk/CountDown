import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const Status = React.memo(({ currentSeconds, totalSeconds }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.margin} variant="h5" gutterBottom>
      {currentSeconds < totalSeconds / 2
        ? currentSeconds === 0
          ? "Time’s up!"
          : "More than halfway there!"
        : ""}
    </Typography>
  );
});
export default Status;
