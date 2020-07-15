import React, { useEffect, useState } from "react";

import Title from "./components/Title";
import Speed from "./components/Speed";
import InputMinute from "./components/InputMinute";
import Countdown from "./components/Countdown";
import Status from "./components/Status";

import "./App.css";

function App() {
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [totalSeconds, setTotalSeconds] = useState("");
  const [currentSeconds, setCurrentSeconds] = useState("");
  const [timerStart, setTimerStart] = useState(false);
  const [speed, setSpeed] = useState("one");

  const handleChange = (e) => {
    setMinute(e.target.value);
    setTotalSeconds(e.target.value * 60);
    setCurrentSeconds(e.target.value * 60 + second);
    setTimerStart(false);
    setSecond(0);
  };

  useEffect(() => {
    let timeSpeed = 1000;

    if (speed === "one") timeSpeed = 1000;
    if (speed === "two") timeSpeed = 750;
    if (speed === "three") timeSpeed = 500;

    if (timerStart) {
      if (minute > 0 && second === 0) {
        setSecond(59);
        setMinute((minute) => minute - 1);
      }
      const timer =
        second > 0 && setInterval(() => setSecond(second - 1), timeSpeed);
      setCurrentSeconds(minute * 60 + second);
      if (currentSeconds === 0) {
        setTimerStart(false);
      }
      return () => clearInterval(timer);
    }
  }, [second, minute, timerStart, speed, currentSeconds]);

  return (
    <div className="App">
      <Title title="COUNTDOWN" />

      <InputMinute
        handleChange={handleChange}
        setTimerStart={setTimerStart}
      ></InputMinute>

      <Status
        currentSeconds={currentSeconds}
        totalSeconds={totalSeconds}
      ></Status>

      <Countdown
        currentSeconds={currentSeconds}
        minute={minute}
        second={second}
        timerStart={timerStart}
        setTimerStart={setTimerStart}
      ></Countdown>

      <Speed speed={speed} setSpeed={setSpeed} />
    </div>
  );
}

export default App;
