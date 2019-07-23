import React from 'react';

import { System } from "./System";
import { Data } from "./Data";

export const Visualiser = ({ frames }) => (
  <div style={{display: "flex"}}>
    <System frames={frames} />
    <Data frames={frames} />
  </div >
)
