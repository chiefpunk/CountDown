import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  speedActive: {
    background: "#000",
    color: "#fff",
  },
}));

const BUTTONS = [
  {
    id: "speed-x-1",
    label: "1.0X",
    speed: "one",
  },
  {
    id: "speed-x-1.5",
    label: "1.5X",
    speed: "two",
  },
  {
    id: "speed-x-2",
    label: "2.0X",
    speed: "three",
  },
];

const Speed = React.memo(({ speed, setSpeed }) => {
  const classes = useStyles();

  return (
    <ButtonGroup
      size="large"
      color="primary"
      aria-label="large outlined primary button group"
    >
      {BUTTONS.map((button) => (
        <Button
          key={button.id}
          className={speed === button.speed && classes.speedActive}
          onClick={() => setSpeed(button.speed)}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  );
});
export default Speed;
