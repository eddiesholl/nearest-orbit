import React from 'react'
import { Layer, Rect, Stage, Circle } from 'react-konva'

import { Frame } from '../model/types'

interface DataProps {
  frame: Frame
}

export const Data: React.SFC<DataProps> = ({ frame }) => (
  <Stage width={500} height={500} >
    <Layer>
      <Rect width={500} height={500} fill={'#555'} />
    </Layer>
  </Stage>
)
