import { Layer, Rect, Stage } from 'react-konva'
import Konva from 'konva'

const width = 500
const height = 500

export const System = () => (
  <Stage width={width} height={height} >
    <Layer>
      <Rect width={width} height={height} fill={'#777'} />
    </Layer>
  </Stage>
)
