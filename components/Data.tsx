import React from 'react'
import { Layer, Rect, Stage, Text } from 'react-konva'

import { Frame } from '../model/types'

interface DataProps {
  frame: Frame
}

export const Data: React.SFC<DataProps> = ({ frame }) => (
  <Stage width={500} height={500} >
    <Layer>
      <Rect width={500} height={500} fill={'#555'} />
      { frame.distances.map((d, ix) => (
        <Text key={d.body.name} text={`${d.body.name}: ${d.au}`} x={20} y={20 + ix*20} fill={'#eee'} />
      ))}
    </Layer>
  </Stage>
)
