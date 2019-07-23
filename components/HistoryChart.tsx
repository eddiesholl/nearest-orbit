import React from 'react'
import { Layer, Rect, Stage, Circle } from 'react-konva'

import { Frame } from '../model/types'

interface DataProps {
  frames: Frame[]
}

const frameCount = 500;
const scale = 200;

export const HistoryChart: React.SFC<DataProps> = ({ frames }) => (
  <React.Fragment>
    { frames.slice(0, frameCount).map((f, frameIndex) => {
      return f.distances.map((d, dIndex) => (
        <Circle key={frameIndex + '-' + dIndex} x={frameIndex*1} y={500 - (d.au*scale)} fill={d.body.colour} radius={1} />
      ))
    })}
  </React.Fragment>
)
