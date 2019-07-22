import React, { useState } from 'react';
import { useInterval } from '../hooks';

import { generateFrame } from '../model/engine';
import { Frame } from '../model/types';

export const Timer = ({ children }) => {

  const [time, setTime] = React.useState(0)
  const [currentFrame, setCurrentFrame] = React.useState<Frame>()
  const [timeIncrement, setTimeIncrement] = React.useState(1000)
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    setTime(time + 1)
    setCurrentFrame(generateFrame(time + 1, currentFrame))
  }, isRunning ? timeIncrement : null)

  return (
    <React.Fragment>
      Timer { time }
      <button style={{ width: '100px'}} onClick={() => setIsRunning(!isRunning)}>
        { isRunning ? 'Pause' : 'Run'}
      </button>
      <input onChange={(event) => setTime(parseInt(event.target.value.toString()) || 0)} />
      <input value={timeIncrement} onChange={(event) => setTimeIncrement(parseInt(event.target.value.toString()) || 1000)} />
      { children(currentFrame) }
    </React.Fragment>
  )
}
