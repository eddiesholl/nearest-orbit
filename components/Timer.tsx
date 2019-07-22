import React, { useState } from 'react';
import { useInterval } from '../hooks';

import { engine } from '../model/engine';

export const Timer = ({ children }) => {

  const [time, setTime] = React.useState(0)
  const [timeIncrement, setTimeIncrement] = React.useState(1000)
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setTime(time + 1)
  }, isRunning ? timeIncrement : null)

  return (
    <React.Fragment>
      Timer { time }
      <button style={{ width: '100px'}} onClick={() => setIsRunning(!isRunning)}>
        { isRunning ? 'Pause' : 'Run'}
      </button>
      <input onChange={(event) => setTime(parseInt(event.target.value.toString()) || 0)} />
      <input value={timeIncrement} onChange={(event) => setTimeIncrement(parseInt(event.target.value.toString()) || 1000)} />
      { children(engine(time)) }
    </React.Fragment>
  )
}
