import React, { useState } from 'react';
import { useInterval } from '../hooks';

import { generateFrame } from '../model/engine';
import { Frame } from '../model/types';

export const Timer = ({ children }) => {

  const [time, setTime] = React.useState(0)
  const [frames, setFrames] = React.useState<Frame[]>([])
  const [timeIncrement, setTimeIncrement] = React.useState(50)
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setTime(time + 1)
    setFrames([generateFrame(time + 1), ...frames])
  }, isRunning ? timeIncrement : null)

  return (
    <React.Fragment>
      Timer { time }
      <button style={{ width: '100px'}} onClick={() => setIsRunning(!isRunning)}>
        { isRunning ? 'Pause' : 'Run'}
      </button>
      <input onChange={(event) => setTime(parseInt(event.target.value.toString()) || 0)} />
      <input value={timeIncrement} onChange={(event) => setTimeIncrement(parseInt(event.target.value.toString()) || 1000)} />
      { children(frames) }
    </React.Fragment>
  )
}
