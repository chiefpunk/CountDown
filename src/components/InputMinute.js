import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const InputMinute = React.memo(({ handleChange, setTimerStart }) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
});
export default InputMinute;
