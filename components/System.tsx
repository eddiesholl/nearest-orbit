import React from 'react'
import { Layer, Rect, Stage, Circle } from 'react-konva'
import Konva from 'konva'

import { Frame } from '../model/types'

const width = 500
const height = 500
const centerX = width / 2
const centerY = height / 2

interface SystemProps {
  frame: Frame;
}

export const System: React.SFC<SystemProps> = ({ frame }) => (
  <Stage width={width} height={height} >
    <Layer>
      <Rect width={width} height={height} fill={'#777'} />
      { frame.locations.map(loc => (
        <Circle key={loc.body.name} x={loc.x + centerX} y={loc.y + centerY} fill={loc.body.colour} radius={5} />
      )) }
    </Layer>
  </Stage>
)
