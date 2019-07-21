import React from 'react';

import { engine } from '../model/engine';

export const Timer = ({ children }) => (
  <React.Fragment>
    Timer
    { children(engine(0)) }
  </React.Fragment>
)
