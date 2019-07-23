import React from 'react'
import { Layer, Rect, Stage, Text } from 'react-konva'

import { Frame } from '../model/types'
import { HistoryChart } from './HistoryChart';

interface DataProps {
  frames: Frame[]
}

export const Data: React.SFC<DataProps> = ({ frames }) => (
  <Stage width={500} height={500} >
    <Layer>
      <Rect width={500} height={500} fill={'#555'} />
      { frames[0] && frames[0].distances.map((d, ix) => (
        <Text key={d.body.name} text={`${d.body.name}: ${d.au.toFixed(3)}`} x={20} y={20 + ix*20} fill={'#eee'} />
      ))}
      { <HistoryChart frames={frames} />}
    </Layer>
  </Stage>
)
