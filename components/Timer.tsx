import React, { useState } from 'react';
import { useInterval } from '../hooks';

import { engine } from '../model/engine';

export const Timer = ({ children }) => {

  const [time, setTime] = React.useState(0)
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setTime(time + 1)
  }, isRunning ? 1000 : null)

  return (
    <React.Fragment>
      Timer { time }
      <button onClick={() => setIsRunning(!isRunning)}>Toggle</button>
      <input onChange={(event) => setTime(parseInt(event.target.value.toString()) || 0)} />
      { children(engine(time)) }
    </React.Fragment>
  )
}
