import React from 'react';

import { System } from "./System";
import { Data } from "./Data";

export const Visualiser = ({ frame }) => (
  <div style={{display: "flex"}}>
    <System frame={frame} />
    <Data frame={frame} />
  </div >
)
